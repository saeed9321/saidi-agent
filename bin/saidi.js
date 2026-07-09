#!/usr/bin/env node
/**
 * Saidi CLI entry (`saidi`) — a small SUPERVISOR around the server.
 *
 * It runs the actual server as a CHILD process and watches it. Most of the time
 * the child just runs; but when the user saves a change that needs a fresh boot
 * (a new MONGODB_URI, re-hydrated env, an agent/memory import), the server exits
 * with RESTART_EXIT_CODE and this supervisor relaunches it — the old child fully
 * exits first, so the port is released before the new one binds (no port race).
 * Any other exit code (clean stop or crash) is propagated and NOT relaunched, and
 * a crash-loop guard stops runaway restarts.
 *
 * Runtime dispatch is unchanged: a published install boots the compiled bundle
 * (dist/server.js) with plain Node; a source checkout (or SAIDI_DEV) runs
 * src/orchestrator/server.ts through the tsx loader. The child is told it is
 * supervised (SAIDI_SUPERVISED=1) so its self-restart path is safe to take. We
 * chdir to the package root (config.ts derives ROOT from cwd), open the browser
 * once on the FIRST launch only, and forward SIGINT/SIGTERM to the child.
 */
import net from 'node:net';
import path from 'node:path';
import { existsSync, readFileSync } from 'node:fs';
import { spawn } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { decideRestart } from './supervisor.js';

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');
// The server reads memory/, agents/, .env, client/dist relative to process.cwd().
// A global install can be launched from anywhere, so anchor cwd to the package.
process.chdir(root);

// Read a value from config/settings.json (the file-backed store). Best-effort:
// the server resolves the same way (config.ts), so the browser opens the right URL
// even with no .env. Real env still wins below.
function settingsValue(key) {
  try {
    const file = path.join(root, 'config', 'settings.json');
    if (!existsSync(file)) return undefined;
    return JSON.parse(readFileSync(file, 'utf8'))?.[key];
  } catch {
    return undefined;
  }
}

// Mirror config.ts's resolution (env → settings.json → default) so we open the
// right URL without importing the server config before the runtime is chosen.
const envPort = Number(process.env.PORT);
const cfgPort = Number(settingsValue('port'));
const port = Number.isFinite(envPort) && envPort > 0 ? envPort
  : Number.isInteger(cfgPort) && cfgPort > 0 && cfgPort <= 65535 ? cfgPort
  : 4317;

/** Open a URL in the OS default browser (no dependency): macOS `open`,
 *  Windows `start`, Linux `xdg-open`. Best-effort — failure never throws. */
function openBrowser(url) {
  const cmd = process.platform === 'darwin' ? 'open'
    : process.platform === 'win32' ? 'cmd'
    : 'xdg-open';
  const args = process.platform === 'win32' ? ['/c', 'start', '', url] : [url];
  try {
    spawn(cmd, args, { stdio: 'ignore', detached: true }).unref();
  } catch {
    /* headless / no browser — the server URL is already printed to the console */
  }
}

/** Resolve once the server is accepting TCP connections on `port`, or after the
 *  timeout elapses (we open anyway; the page will connect when the server is up). */
function waitForListening(timeoutMs = 20000) {
  const cfgHost = settingsValue('host');
  const host = process.env.HOST?.trim()
    || (typeof cfgHost === 'string' && cfgHost.trim() ? cfgHost.trim() : '')
    || '127.0.0.1';
  const start = Date.now();
  return new Promise((resolve) => {
    const tryOnce = () => {
      const sock = net.connect(port, host === '0.0.0.0' ? '127.0.0.1' : host);
      sock.once('connect', () => { sock.destroy(); resolve(); });
      sock.once('error', () => {
        sock.destroy();
        if (Date.now() - start > timeoutMs) resolve();
        else setTimeout(tryOnce, 250);
      });
    };
    tryOnce();
  });
}

// Choose the runtime: compiled bundle (published) vs tsx + source (local dev).
const distEntry = path.join(root, 'dist', 'server.js');
const serverTs = path.join(root, 'src', 'orchestrator', 'server.ts');
const useDist = existsSync(distEntry) && !process.env.SAIDI_DEV;
// Compiled bundle → plain node; source checkout → node with the tsx ESM loader.
// (tsx is a devDependency, present in source checkouts, absent from published installs.)
const childArgs = useDist ? [distEntry] : ['--import', 'tsx', serverTs];

let restartTimestamps = [];
let firstLaunch = true;
let shuttingDown = false;
let child = null;

function spawnChild() {
  child = spawn(process.execPath, childArgs, {
    stdio: 'inherit',
    env: { ...process.env, SAIDI_SUPERVISED: '1' },
  });
  child.on('error', (err) => {
    console.error('Failed to launch the Saidi server:', err);
    process.exit(1);
  });
  child.on('exit', onChildExit);

  // Open the browser only once, on the very first launch (prod serves the app on
  // `port`; dev serves it from Vite at :5317, so we don't open it here).
  if (firstLaunch) {
    firstLaunch = false;
    if (!process.env.SAIDI_DEV) {
      waitForListening().then(() => openBrowser(`http://localhost:${port}/`));
    }
  }
}

function onChildExit(code, signal) {
  child = null;
  // A forwarded SIGINT/SIGTERM tore the child down → we're on our way out too.
  if (shuttingDown) { process.exit(typeof code === 'number' ? code : 0); return; }

  const decision = decideRestart(code, restartTimestamps, Date.now());
  if (decision.action === 'relaunch') {
    restartTimestamps = decision.restartTimestamps;
    console.log('\n♻️  Applying your changes — restarting Saidi…\n');
    spawnChild();
    return;
  }
  if (decision.reason === 'restart-loop') {
    console.error('\n⛔ Saidi restarted repeatedly in a short window — stopping to avoid a loop.');
    console.error('   Check your most recent Settings / Secrets change, then start Saidi again.\n');
  } else if (signal) {
    console.error(`\nSaidi server stopped (signal ${signal}).\n`);
  }
  process.exit(decision.code);
}

/** Forward a termination signal to the child; when it exits we follow (onChildExit). */
function forwardSignal(sig) {
  shuttingDown = true;
  if (child) child.kill(sig);
  else process.exit(0);
}
process.on('SIGINT', () => forwardSignal('SIGINT'));
process.on('SIGTERM', () => forwardSignal('SIGTERM'));

spawnChild();

#!/usr/bin/env node
/**
 * Saidi CLI entry (`saidi`).
 *
 * Published installs (from the public `saidi-agent` repo) ship a compiled,
 * source-free bundle at dist/server.js — this boots it with plain Node, no tsx
 * and no TypeScript at runtime. A local source checkout has no dist/ (or sets
 * SAIDI_DEV), so it falls back to running src/orchestrator/server.ts through the
 * tsx loader. Either way it reuses the SAME server bootstrap — no server logic is
 * reimplemented here. It chdir's to the package root (config.ts derives ROOT from
 * process.cwd(), so the server must run from the install dir, not the user's shell
 * cwd), then waits for the port to accept connections and opens the browser.
 */
import net from 'node:net';
import path from 'node:path';
import { existsSync, readFileSync } from 'node:fs';
import { spawn } from 'node:child_process';
import { fileURLToPath, pathToFileURL } from 'node:url';

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
const useDist = existsSync(distEntry) && !process.env.SAIDI_DEV;

if (useDist) {
  await import(pathToFileURL(distEntry).href);
} else {
  // Dev / source checkout only — tsx is a devDependency, absent from published installs.
  const { register } = await import('tsx/esm/api');
  register();
  await import(pathToFileURL(path.join(root, 'src', 'orchestrator', 'server.ts')).href);
}

// Dev mode serves the app from Vite (:5317); production serves it on `port`.
if (!process.env.SAIDI_DEV) {
  await waitForListening();
  openBrowser(`http://localhost:${port}/`);
}

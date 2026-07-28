/**
 * Supervisor decision logic for bin/saidi.js.
 *
 * bin/saidi.js runs the actual server as a CHILD process and, when the child
 * exits, asks decideRestart() what to do. Factored out as a pure function so the
 * relaunch / propagate / crash-loop rules are unit-testable without spawning
 * anything (bin/supervisor.test.ts).
 */

/** The child exits with this code to request a relaunch (mirror of RESTART_EXIT_CODE in restart.ts). */
export const RESTART_EXIT_CODE = 75;

/** The child exits with this code to request "install the update, THEN relaunch"
 *  (mirror of UPDATE_EXIT_CODE in restart.ts). The install deliberately runs here in
 *  the supervisor, between spawns: `npm i -g` rewrites the very package directory the
 *  server executes from, so doing it in-process would swap the code under a live run. */
export const UPDATE_EXIT_CODE = 76;

/** Crash-loop guard: at most MAX_RESTARTS relaunches within WINDOW_MS. */
export const MAX_RESTARTS = 3;
export const WINDOW_MS = 10_000;

/** A freshly-updated child that survives this long is considered good, and the
 *  rollback safety-net is disarmed. Shorter than a slow boot would be risky; longer
 *  would roll back on an unrelated crash hours later. */
export const HEALTHY_MS = 60_000;

/** Exit codes the child chooses deliberately — a clean stop, or a request to come
 *  back. None of these mean "the new version is broken", so none trigger a rollback. */
function isDeliberate(code) {
  return code === 0 || code === null || code === undefined
    || code === RESTART_EXIT_CODE || code === UPDATE_EXIT_CODE;
}

/**
 * Decide what the supervisor should do when the child process exits.
 *
 * - Post-update child crashed before HEALTHY_MS → roll back to the previous version.
 * - Child exited with UPDATE_EXIT_CODE   → install the update, then relaunch.
 * - Child exited with RESTART_EXIT_CODE  → relaunch (unless it's looping too fast).
 * - Any other code (clean exit or crash) → propagate it; do NOT relaunch.
 * - Too many restarts inside the window  → stop with an error code (crash-loop guard).
 *
 * The rollback check runs FIRST and deliberately bypasses the crash-loop guard: a
 * broken release that dies instantly would otherwise trip the guard and leave the
 * app down, which is exactly the outage the rollback exists to prevent. Callers make
 * it one-shot by clearing `rollbackTo` once they act on it, so a second failure
 * propagates normally instead of reinstall-looping.
 *
 * Pure: callers thread the relaunch timestamps through `restartTimestamps` and pass
 * the current time as `now`.
 *
 * @param {number|null|undefined} code   child exit code (null when killed by signal)
 * @param {number[]} restartTimestamps   times (ms) of recent relaunches, oldest→newest
 * @param {number} now                   current time (ms)
 * @param {{ rollbackTo?: string|null, childStartedAt?: number|null }} [ctx]
 *        rollbackTo — version to reinstall if this child proves bad (null = disarmed);
 *        childStartedAt — when the current child was spawned (ms).
 * @returns {{ action: 'relaunch'|'update'|'rollback'|'exit', code?: number, reason?: string, version?: string, restartTimestamps?: number[] }}
 */
export function decideRestart(code, restartTimestamps, now, ctx = {}) {
  const { rollbackTo = null, childStartedAt = null } = ctx;

  // The new version died on its own before proving itself → put the old one back.
  if (rollbackTo && !isDeliberate(code) && childStartedAt !== null && now - childStartedAt < HEALTHY_MS) {
    return { action: 'rollback', version: rollbackTo, restartTimestamps };
  }

  // Only the two "bring me back" codes continue past here; a clean shutdown or a
  // crash is honoured as-is and never relaunched (avoids crash-loops).
  if (code !== RESTART_EXIT_CODE && code !== UPDATE_EXIT_CODE) {
    return { action: 'exit', code: code ?? 0 };
  }

  const recent = restartTimestamps.filter((t) => now - t < WINDOW_MS);
  if (recent.length >= MAX_RESTARTS) {
    // Restarting faster than the guard allows → a bad config would spin forever.
    return { action: 'exit', code: 1, reason: 'restart-loop' };
  }
  return { action: code === UPDATE_EXIT_CODE ? 'update' : 'relaunch', restartTimestamps: [...recent, now] };
}

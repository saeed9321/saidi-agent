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

/** Crash-loop guard: at most MAX_RESTARTS relaunches within WINDOW_MS. */
export const MAX_RESTARTS = 3;
export const WINDOW_MS = 10_000;

/**
 * Decide what the supervisor should do when the child process exits.
 *
 * - Child exited with RESTART_EXIT_CODE  → relaunch (unless it's looping too fast).
 * - Any other code (clean exit or crash) → propagate it; do NOT relaunch.
 * - Too many restarts inside the window   → stop with an error code (crash-loop guard).
 *
 * Pure: callers thread the relaunch timestamps through `restartTimestamps` and pass
 * the current time as `now`.
 *
 * @param {number|null|undefined} code   child exit code (null when killed by signal)
 * @param {number[]} restartTimestamps   times (ms) of recent relaunches, oldest→newest
 * @param {number} now                   current time (ms)
 * @returns {{ action: 'relaunch'|'exit', code?: number, reason?: string, restartTimestamps?: number[] }}
 */
export function decideRestart(code, restartTimestamps, now) {
  if (code !== RESTART_EXIT_CODE) {
    // Clean shutdown or a crash — honour it, never relaunch (avoids crash-loops).
    return { action: 'exit', code: code ?? 0 };
  }
  const recent = restartTimestamps.filter((t) => now - t < WINDOW_MS);
  if (recent.length >= MAX_RESTARTS) {
    // Restarting faster than the guard allows → a bad config would spin forever.
    return { action: 'exit', code: 1, reason: 'restart-loop' };
  }
  return { action: 'relaunch', restartTimestamps: [...recent, now] };
}

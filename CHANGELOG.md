# Changelog

All notable changes to Saidi are documented here. The format is based on
[Keep a Changelog](https://keepachangelog.com/en/1.1.0/), and Saidi follows
[Semantic Versioning](https://semver.org/spec/v2.0.0.html).

The version in the root `package.json` is the single source of truth: bumping it
with `npm version <patch|minor|major>` syncs `client/package.json` and stages
this file automatically.

## [0.2.0](https://github.com/saeed9321/saidi/compare/v0.1.1...v0.2.0) (2026-07-07)


### Features

* automated source-free release pipeline (esbuild bundle + release-please + dist repo) ([5b6480c](https://github.com/saeed9321/saidi/commit/5b6480ce777e8df4fd1eb65acf2b3f1ebec2922b))
* installable CLI (saidi bin) + update-available dialog ([a7a4475](https://github.com/saeed9321/saidi/commit/a7a4475b78a4bbadd2747c55c621b1ee6472a441))
* What's New update dialog driven by single-source version ([a619ea4](https://github.com/saeed9321/saidi/commit/a619ea4b967d7440e2a9be573597fa3bed527d72))


### Performance Improvements

* auto-compact PRIME main-chat session (FIX 5) ([aa85850](https://github.com/saeed9321/saidi/commit/aa8585083fa2601b1278ad779f33f33924866d6d))
* cap delegation results returned to PRIME context (FIX E2) ([af999a0](https://github.com/saeed9321/saidi/commit/af999a0a4e214c083c4d1422bdd9b603a3a472b3))
* cheap run-membership check + activity TTL (FIX 6) ([361c991](https://github.com/saeed9321/saidi/commit/361c991e0449c2707c238a88e94ad2bbc42ae165))
* cheaper /api/state — singletons, gh TTL cache, coalesced snapshot (FIX 4) ([0a0f8ad](https://github.com/saeed9321/saidi/commit/0a0f8ad02600097467d2d520db3252658a372a39))
* debounce run persistence + quiet mid-flight participant saves (FIX 2/3) ([ed05956](https://github.com/saeed9321/saidi/commit/ed059568710342ed2f1f87c64d218da919e50c24))
* keep PRIME main-chat system prompt stable for prompt cache (FIX 1/E1/E3) ([004f030](https://github.com/saeed9321/saidi/commit/004f030f91a89069f3e281a2b82a73d27930f46d))

## [0.1.0] - 2026-07-07

The first tagged release of the Saidi orchestrator dashboard.

### Added

- **Runs** — persistent, PRIME-orchestrated workstreams that keep a shared
  context across turns, each with its own isolated per-run workspace.
- **CRONS** — scheduled background tasks that fire runs on a cron expression.
- **SETTINGS** — a file-backed settings surface for agents and providers.
- **Per-agent MCP servers** — each custom agent can declare its own MCP servers.
- **What's New dialog** — surfaces release highlights once per version bump,
  driven by this changelog and the shared app version.

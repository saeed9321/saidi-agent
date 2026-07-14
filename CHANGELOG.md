# Changelog

All notable changes to Saidi are documented here. The format is based on
[Keep a Changelog](https://keepachangelog.com/en/1.1.0/), and Saidi follows
[Semantic Versioning](https://semver.org/spec/v2.0.0.html).

The version in the root `package.json` is the single source of truth: bumping it
with `npm version <patch|minor|major>` syncs `client/package.json` and stages
this file automatically.

## [1.8.0](https://github.com/saeed9321/saidi/compare/v1.7.0...v1.8.0) (2026-07-14)


### Features

* add boot-time configuration summary for transparent settings resolution and diagnostic logging ([3eb93ec](https://github.com/saeed9321/saidi/commit/3eb93ec91dcf7756054a5c1819f832fdea08a0b7))
* **saas:** cloud frontend (auth gate, org wizard, TEAM + PLATFORM tabs, user menu) and cloud migration script ([2fd92cd](https://github.com/saeed9321/saidi/commit/2fd92cdab1ffa84e8348c3b8ae1efb6180d41ede))
* **saas:** cloud/local mode split, tenant context, per-org stores, auth stack, org/admin API, governance gates ([631820a](https://github.com/saeed9321/saidi/commit/631820a1efbc31bd22005c00cfd4677a3411c29d))
* **saas:** MongoDB as single source of truth + no-fallback loading + run-sandbox foundation ([3d1a52b](https://github.com/saeed9321/saidi/commit/3d1a52b2a1c763549d65a90089e0d714e9931b6b))

## [1.7.0](https://github.com/saeed9321/saidi/compare/v1.6.0...v1.7.0) (2026-07-12)


### Features

* add context auto-compaction settings, introduce store reload methods, and implement run-files API route ([c13fa01](https://github.com/saeed9321/saidi/commit/c13fa011f465d8f639b86bcdf78800cc804ccff8))
* add persistence fields to run model and sync configuration updates to the store ([5efd37a](https://github.com/saeed9321/saidi/commit/5efd37af8404a07082ef866c7d9a6aca67d5dd11))
* implement credit debiting for chat-based agent delegations ([4186f9d](https://github.com/saeed9321/saidi/commit/4186f9d5ad720963dd16b4b36bacac2b45f72d8d))

## [1.6.0](https://github.com/saeed9321/saidi/compare/v1.5.0...v1.6.0) (2026-07-11)


### Features

* implement robust release note formatting and provider execution scoping for agent runs ([873b190](https://github.com/saeed9321/saidi/commit/873b190625b3f19420b52d15e6b63d77941047f0))
* implement webhook management routes, add a centralized cron service, and expand theme selection palette ([26f7d05](https://github.com/saeed9321/saidi/commit/26f7d05fa3343be8df4e466ce3c54bd6c491aaa6))


### Bug Fixes

* set width to 100% in Panels container to ensure proper layout expansion ([f1277d4](https://github.com/saeed9321/saidi/commit/f1277d4a1f3d4bed52730c3849c79d0d13bb230c))

## [1.5.0](https://github.com/saeed9321/saidi/compare/v1.4.0...v1.5.0) (2026-07-10)


### Features

* add reflexes, credits & effort modes, and AI provider selector ([befa2b6](https://github.com/saeed9321/saidi/commit/befa2b6206121809956c81be0b9390f19a41f1cd))
* **runs:** raw per-call LLM log at memory/runs/&lt;runId&gt;/log.json ([d118bf3](https://github.com/saeed9321/saidi/commit/d118bf39ce48d650fab8ef7bbdbb624937788573))

## [1.4.0](https://github.com/saeed9321/saidi/compare/v1.3.0...v1.4.0) (2026-07-09)


### Features

* add marketplace storefront and restructure settings ([4d24f6e](https://github.com/saeed9321/saidi/commit/4d24f6e02403481512acdfc9d6d2932bd0fada90))
* **runs:** department leads orchestrate their own specialists ([67fc75c](https://github.com/saeed9321/saidi/commit/67fc75cde7674a2f52d8bcb1925136345db70601))

## [1.3.0](https://github.com/saeed9321/saidi/compare/v1.2.0...v1.3.0) (2026-07-09)


### Features

* **restart:** self-restart on saves that need a fresh boot ([cbb76dd](https://github.com/saeed9321/saidi/commit/cbb76dd26be9f305c2eb9c234ba32083ae6f0617))
* **runs:** consult department leads before routing to specialists ([ed6db09](https://github.com/saeed9321/saidi/commit/ed6db097c366df87fdd30347db1637214e2e608a))
* **runs:** consult dept leads + surface token usage & cost ([aa3d47e](https://github.com/saeed9321/saidi/commit/aa3d47e4e9cbab1c133a4bacb99b8785d478024b))
* **runs:** surface token usage & cost in logs and UI ([2f10915](https://github.com/saeed9321/saidi/commit/2f10915a0032dd1401d45dfaa02045e474239ee7))

## [1.2.0](https://github.com/saeed9321/saidi/compare/v1.1.0...v1.2.0) (2026-07-07)


### Features

* **import:** copy agents & memory in from another folder ([e6c3509](https://github.com/saeed9321/saidi/commit/e6c3509f20dc9078b3ee6ece2174961b2d339220))
* **runs:** context-efficiency fixes and completion guardrails ([c39d32c](https://github.com/saeed9321/saidi/commit/c39d32cdb61998becfb9cab2a7d321cf7d658b61))

## [1.1.0](https://github.com/saeed9321/saidi/compare/v1.0.1...v1.1.0) (2026-07-07)


### Features

* **config:** file-backed config store; boot without .env (phase 1) ([292a34c](https://github.com/saeed9321/saidi/commit/292a34c805a213e2e5ce1adde26da01ae512b877))
* **settings:** manage every .env value from the UI (phase 3) ([d4e60a5](https://github.com/saeed9321/saidi/commit/d4e60a510a5a5490bd2028da237362f7cc33617d))


### Bug Fixes

* **doctor:** accurate, prod-aware, non-blocking diagnostics (phase 2) ([8b78260](https://github.com/saeed9321/saidi/commit/8b78260eb77949fd997e0fbd89a7db98bbd59894))

## [1.0.1](https://github.com/saeed9321/saidi/compare/v1.0.0...v1.0.1) (2026-07-07)


### Bug Fixes

* **doctor:** don't require client node_modules in published installs ([612fe0e](https://github.com/saeed9321/saidi/commit/612fe0eaf99ea32a04f58b1f023c932240a76c23))

## 1.0.0 (2026-07-07)


### Features

* automated source-free release pipeline (esbuild bundle + release-please + dist repo) ([5b6480c](https://github.com/saeed9321/saidi/commit/5b6480ce777e8df4fd1eb65acf2b3f1ebec2922b))
* configurable owner name + rename orchestrator display PRIME→Saidi ([96d82c3](https://github.com/saeed9321/saidi/commit/96d82c36f1f11cc1c1cf3873c3c5177cfb4a7093))
* configurable owner name + rename orchestrator display PRIME→Saidi ([1f90d1b](https://github.com/saeed9321/saidi/commit/1f90d1b7f9c66e173f6b1d18c8f66a32234d6303))
* installable CLI (saidi bin) + update-available dialog ([a7a4475](https://github.com/saeed9321/saidi/commit/a7a4475b78a4bbadd2747c55c621b1ee6472a441))
* What's New update dialog driven by single-source version ([a619ea4](https://github.com/saeed9321/saidi/commit/a619ea4b967d7440e2a9be573597fa3bed527d72))


### Bug Fixes

* **ci:** auto-publish to saidi-agent from release-please run ([ffaf228](https://github.com/saeed9321/saidi/commit/ffaf22885e0f10a58b711f87a44a7311d3088bf1))


### Performance Improvements

* auto-compact PRIME main-chat session (FIX 5) ([aa85850](https://github.com/saeed9321/saidi/commit/aa8585083fa2601b1278ad779f33f33924866d6d))
* cap delegation results returned to PRIME context (FIX E2) ([af999a0](https://github.com/saeed9321/saidi/commit/af999a0a4e214c083c4d1422bdd9b603a3a472b3))
* cheap run-membership check + activity TTL (FIX 6) ([361c991](https://github.com/saeed9321/saidi/commit/361c991e0449c2707c238a88e94ad2bbc42ae165))
* cheaper /api/state — singletons, gh TTL cache, coalesced snapshot (FIX 4) ([0a0f8ad](https://github.com/saeed9321/saidi/commit/0a0f8ad02600097467d2d520db3252658a372a39))
* debounce run persistence + quiet mid-flight participant saves (FIX 2/3) ([ed05956](https://github.com/saeed9321/saidi/commit/ed059568710342ed2f1f87c64d218da919e50c24))
* keep PRIME main-chat system prompt stable for prompt cache (FIX 1/E1/E3) ([004f030](https://github.com/saeed9321/saidi/commit/004f030f91a89069f3e281a2b82a73d27930f46d))

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

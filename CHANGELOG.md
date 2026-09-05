# Changelog

All notable changes to Saidi are documented here. The format is based on
[Keep a Changelog](https://keepachangelog.com/en/1.1.0/), and Saidi follows
[Semantic Versioning](https://semver.org/spec/v2.0.0.html).

The version in the root `package.json` is the single source of truth: bumping it
with `npm version <patch|minor|major>` syncs `client/package.json` and stages
this file automatically.

## [1.25.1](https://github.com/saeed9321/saidi/compare/v1.25.0...v1.25.1) (2026-09-05)


### Bug Fixes

* **build:** unbreak `npm run build` — annotate the 3 colours check:tokens flags ([88e6588](https://github.com/saeed9321/saidi/commit/88e6588c63d09e1ffab64f4a0d08ee17e9ac1128))

## [1.25.0](https://github.com/saeed9321/saidi/compare/v1.24.0...v1.25.0) (2026-09-05)


### Features

* add throughput visualization component for daily job delivery and spend metrics ([c2238dc](https://github.com/saeed9321/saidi/commit/c2238dcc1e37c397c86aed5668c125638cd6a354))


### Bug Fixes

* resolve agent/project targets using consistent logic to ensure correct worktree paths for verification and log accurate timing metadata. ([eda2fe4](https://github.com/saeed9321/saidi/commit/eda2fe48bfaee43d9f39430f382e9396c2768476))

## [1.24.0](https://github.com/saeed9321/saidi/compare/v1.23.0...v1.24.0) (2026-08-19)


### Features

* automatically reopen finished runs when receiving a new message and add focus status hints to Telegram UI ([8a448f5](https://github.com/saeed9321/saidi/commit/8a448f5ed6372ff3f1f49eb45eaf5e11bf5a2090))
* **billing:** credit enforcement is a live setting, and only gates the Saidi provider ([a54bd79](https://github.com/saeed9321/saidi/commit/a54bd791c23c4bf777b70dfa8b79a616cfc18cd0))
* **cloud:** edit any workspace's settings from one screen ([c68795f](https://github.com/saeed9321/saidi/commit/c68795f2eacf4b7430f4213c3c4b02096e1a191c))
* **cloud:** per-workspace settings overrides on top of one platform default ([585aeee](https://github.com/saeed9321/saidi/commit/585aeee9b2ae4936fcbdd0253d1da758f8f13560))
* **cloud:** platform configuration disappears for everyone but the platform owner ([82ec7ff](https://github.com/saeed9321/saidi/commit/82ec7ff0771f38174531edab7c61877284215dc1))
* **cloud:** provider and model controls are the platform owner's alone ([fd1aea2](https://github.com/saeed9321/saidi/commit/fd1aea2b8d226f3aa673a7fb7d6510bc17eb9127))
* **cloud:** provider scope is explicit, workspace defaults are pinnable, Anthropic can't strand everyone ([8897d12](https://github.com/saeed9321/saidi/commit/8897d122d3ecb1e1107201523a6414dd7483ab68))
* **cloud:** the machine room is the platform owner's alone ([3cf5f7b](https://github.com/saeed9321/saidi/commit/3cf5f7b6b8b390f994ab5aa222707f5a186a80ea))
* **cloud:** the machine room is the platform owner's alone ([8a073de](https://github.com/saeed9321/saidi/commit/8a073de549a8731d1ff577ba47563b984926d864))
* implement procedure learning engine, run event watchers, and memory tracing capabilities ([44c5158](https://github.com/saeed9321/saidi/commit/44c51580b40551f59458888c5927c9813bc20b63))
* instruct model to use amend_plan for new work when the project plan is complete ([2b6cfd3](https://github.com/saeed9321/saidi/commit/2b6cfd31c9fa602765d4092637df21db18dbac9c))
* **platform:** cross-org usage tracking — what the platform actually costs ([3c9e3bb](https://github.com/saeed9321/saidi/commit/3c9e3bbed03fcbff749d9c37ec7fa5561fc963d4))
* **prompt:** forbid PRIME from executing anything itself, always delegate to forge ([6d52689](https://github.com/saeed9321/saidi/commit/6d52689eb9fa2b42d7922018087f202064be84f8))
* replace fuzzy thread-based approval gate with explicit per-task authorization grants ([fade4e0](https://github.com/saeed9321/saidi/commit/fade4e08a21db87bad1609e687718b57619cf853))


### Bug Fixes

* **billing:** the org credit wallet no longer gates a member's own AI account ([5836ede](https://github.com/saeed9321/saidi/commit/5836ede537c8620e495139922efb9078cf711864))
* **byo:** a personal AI account overrides the workspace provider, not blends with it ([f40a8c5](https://github.com/saeed9321/saidi/commit/f40a8c5dbf1a9648a8276c6d5d38711573760214))
* **cloud:** platform scope must READ the platform, not the workspace you're in ([b5fbccc](https://github.com/saeed9321/saidi/commit/b5fbccc656ad06011fc6cc977a3980e3ed8a9aa9))
* **cloud:** platform scope must READ the platform, not the workspace you're in ([2e631f9](https://github.com/saeed9321/saidi/commit/2e631f9cc8d4b5d0e7a675af9e563b675be60f94))
* **cloud:** provider profiles follow the settings scope selector, not the active workspace ([c6cda6e](https://github.com/saeed9321/saidi/commit/c6cda6eef863a5d4e81dd89bfbd0f5a688ae9f69))
* **ui:** make every page usable on a phone — run details, modals, tables ([86ac550](https://github.com/saeed9321/saidi/commit/86ac550f405fac973c355a1ed7492c0cad99f192))
* **ui:** make every page usable on a phone — run details, modals, tables ([10a6601](https://github.com/saeed9321/saidi/commit/10a6601bb70c879390b33da0bb5bfa648275aea1))
* **voice:** retry a failed media connect, and stop blaming the network ([bba43c2](https://github.com/saeed9321/saidi/commit/bba43c2309e5163e60152958d55e7616c86e5184))
* **voice:** retry a failed media connect, and stop blaming the network ([6e4130e](https://github.com/saeed9321/saidi/commit/6e4130ec33eaf69c6a3e5cfdf8914c3d28f19905))


### Performance Improvements

* **queue:** messages typed in a row are one turn, not one turn each ([e541eb3](https://github.com/saeed9321/saidi/commit/e541eb3d1d7c0061c863cf86701c8af6a59ccf37))
* **queue:** messages typed in a row are one turn, not one turn each ([e1da472](https://github.com/saeed9321/saidi/commit/e1da47250eb2d1ba4ec5ef3b8917e51a5967179d))

## [1.23.0](https://github.com/saeed9321/saidi/compare/v1.22.0...v1.23.0) (2026-08-11)


### Features

* implement verdict feedback logic and add tests for run retry and effort dispatching ([5720b54](https://github.com/saeed9321/saidi/commit/5720b5480139a517a8985b6309e2c2c21ff68ed2))

## [1.22.0](https://github.com/saeed9321/saidi/compare/v1.21.0...v1.22.0) (2026-08-11)


### Features

* implement lazy loading for chat thread history with scroll-to-anchor persistence ([f813646](https://github.com/saeed9321/saidi/commit/f8136466151992336b65e767ae8b5b60407ae1f7))


### Bug Fixes

* explicitly set background color to transparent in file explorer rows to prevent rendering artifacts ([cb49b05](https://github.com/saeed9321/saidi/commit/cb49b0509c984ed5069888dd5521d9000c30eeca))

## [1.21.0](https://github.com/saeed9321/saidi/compare/v1.20.0...v1.21.0) (2026-08-10)


### Features

* add markdown preview support for run files in RunFiles component ([2f41753](https://github.com/saeed9321/saidi/commit/2f41753fb5ea13427b2383045f77c602a841d35f))
* add router provider support and implement tenant-scoped provider profile overlays ([c4526fa](https://github.com/saeed9321/saidi/commit/c4526fad251aa4939f24c34e5c66c7eb3e77c9f7))
* **billing:** count BYO spend against the member's monthly budget ([ce2ace6](https://github.com/saeed9321/saidi/commit/ce2ace6de85446c1037292a39ce31178b8efb7c3))
* **byo:** a model is chosen from the list, never typed ([fa9e248](https://github.com/saeed9321/saidi/commit/fa9e248f41f41d327eec08d035667abe78f45b67))
* **byo:** a shared admin account, and a member's choice of which one runs ([72424fb](https://github.com/saeed9321/saidi/commit/72424fb785cd2248380eb8304a522d8b313de7d0))
* **byo:** capture the SDK rate_limit_event per member and expose it ([0e00935](https://github.com/saeed9321/saidi/commit/0e00935859327671fd163de248051fbf6102b2c6))
* **byo:** fetch the live model catalogue from the gateway and pin from it in the UI ([1c16f56](https://github.com/saeed9321/saidi/commit/1c16f5677f58d6a9bd70fc96a331b4d889ead148))
* **byo:** finish the AI Account states, catalogue refresh and the plain-language copy ([3040b4d](https://github.com/saeed9321/saidi/commit/3040b4d9e5c07fba8fa80ec061744de38043f30b))
* **byo:** gate connecting an AI account, and expose the four choices ([61c9633](https://github.com/saeed9321/saidi/commit/61c9633be986717f66c71af14a92cf3f96fe5ad6))
* **byo:** make the 9router sidecar health-gated and its base URL configurable ([62950c8](https://github.com/saeed9321/saidi/commit/62950c8e70f5fa7cc6ff578e77aced494f6e5517))
* **byo:** per-member Codex proxy for multi-member cloud ([37dbad5](https://github.com/saeed9321/saidi/commit/37dbad5f1f1f58176fa826a1f5980b24f9745f23))
* **byo:** persist a member's model and reasoning-effort pin and read it at execution time ([bee0b83](https://github.com/saeed9321/saidi/commit/bee0b83779b790138a46f3bec207c89ac692dac8))
* **byo:** refresh the maintained Codex list to the GPT-5.6 generation ([6728842](https://github.com/saeed9321/saidi/commit/6728842109af2164efa8f580c7b83b9c7012ffae))
* **byo:** report the real subscription ceiling instead of an empty card ([22e3233](https://github.com/saeed9321/saidi/commit/22e32336f859cf51b73535c985e33dd128deebc3))
* **byo:** route ChatGPT traffic to the 9router sidecar on single-owner installs ([77da2a0](https://github.com/saeed9321/saidi/commit/77da2a041febcbb29dd762f90a3ba98355ffec99))
* **client:** a member picks Saidi, Claude or ChatGPT — nothing else ([a2aad4f](https://github.com/saeed9321/saidi/commit/a2aad4f0a8f2ce4d9f46d720029e26ba5e7186de))
* **client:** choose which of the four AI accounts runs your work ([1cb8aa2](https://github.com/saeed9321/saidi/commit/1cb8aa2b2346be44f81731db7bc02e250c801832))
* **client:** connect a subscription by signing in, not by pasting a token ([c5fd891](https://github.com/saeed9321/saidi/commit/c5fd8918774ed4c4dbcf151620496207b71d9420))
* **client:** disclose member-credential precedence and offer it at onboarding ([45da4c1](https://github.com/saeed9321/saidi/commit/45da4c1df8b17a03243ac72365b428bee8b98fa9))
* **client:** hide the workspace balance from a member their runs never charge ([7c88acb](https://github.com/saeed9321/saidi/commit/7c88acb00a63094af2bfc8b3b8619d21a55a01ca))
* **client:** make Your AI account readable, and select-only ([2040b93](https://github.com/saeed9321/saidi/commit/2040b934c16521da4d3347480b09a4abb04ab855))
* **client:** show admins who is running on their own AI account ([3b7b755](https://github.com/saeed9321/saidi/commit/3b7b755ab26cc47667594567e629477a9acaae05))
* **client:** show the Claude subscription window, reset time, and utilization only when reported ([d546188](https://github.com/saeed9321/saidi/commit/d54618861feee6c34bd6df23e8e997bbb2f9488a))
* **client:** tell a member their own AI account was disconnected ([54cbec5](https://github.com/saeed9321/saidi/commit/54cbec5b9c32c30950db074a053a5cb1a0213c9f))
* **client:** the member-facing "Your AI account" screen ([6b2900e](https://github.com/saeed9321/saidi/commit/6b2900ec9c1ef1181eee636679c547ef46a33f4b))
* **client:** types, API client and nav for the member AI-account screen ([c2ac251](https://github.com/saeed9321/saidi/commit/c2ac2517820c05b59ef0fc2913ab88c9a518859b))
* **cloud:** an admin view of who is running on their own AI account ([cb7dbf4](https://github.com/saeed9321/saidi/commit/cb7dbf437b1d0687e767a03e6834c7d727c87644))
* **cloud:** member-facing credential API with a live pre-save probe ([d2ef65a](https://github.com/saeed9321/saidi/commit/d2ef65a5a6fa8ad2abd489ab7918752e4443a695))
* **cloud:** open self-serve signup with a free 3-seat workspace ([01464a3](https://github.com/saeed9321/saidi/commit/01464a35d2fe9dafadbfec81fee6878456d373da))
* **cloud:** per-member provider credentials (BYO subscription, Path A) ([1e641bf](https://github.com/saeed9321/saidi/commit/1e641bfac0369df160bfc095c90c9d50e3be2250))
* **cloud:** per-member usage metering and an honest quota surface ([410fc30](https://github.com/saeed9321/saidi/commit/410fc3069b15dfeecc9257767efdefbe3b68ec6e))
* **cloud:** retire a member credential the provider rejects ([e041e18](https://github.com/saeed9321/saidi/commit/e041e183eeb315875ac9d38e77282dbd7525ba06))
* **credentials:** personal subscriptions only, and never bill the org for them ([170e115](https://github.com/saeed9321/saidi/commit/170e11504367d0e1a73924de6ad105b12605e12a))
* enhance landing page interactivity with pointer effects and improve project documentation by removing sandbox concepts and refining API references. ([4051b91](https://github.com/saeed9321/saidi/commit/4051b91e2e54590701baf3991d303d0a98eae440))
* implement durable run queues and automated resume on server restart ([d27a680](https://github.com/saeed9321/saidi/commit/d27a680c51ac0aab4d7a207632b0bde744c0344f))
* optimize provider selection UI, update credential isolation, and add associated test suite ([495ef91](https://github.com/saeed9321/saidi/commit/495ef91a10c10a9d9a0f47db60ae68e244724c92))
* **org:** let an admin revoke aiAccount.connect for one member ([b2b471c](https://github.com/saeed9321/saidi/commit/b2b471ce34d20721ff88837659c8fb2039602504))
* **platform:** let the operator erase a workspace, and land sign-ins in the app ([9582ad0](https://github.com/saeed9321/saidi/commit/9582ad082539f0009e22745d00023c0c6cac1803))
* **providers:** sign in with your own subscription — OAuth + PKCE ([590812f](https://github.com/saeed9321/saidi/commit/590812ff8e9156a1bd1f58cc24abdee27ea3290a))
* redesign landing page with new interactive UI components and update documentation structure ([94867fc](https://github.com/saeed9321/saidi/commit/94867fccd52a351eb5299cca34d43f89e82a5155))
* **settings:** admin-configurable member sign-in + per-member isolation tests ([bb02bad](https://github.com/saeed9321/saidi/commit/bb02badddbedd72d8dc3f484d33b925e64266e8c))
* **settings:** let an admin configure member sign-in instead of a dead end ([6e5e0fe](https://github.com/saeed9321/saidi/commit/6e5e0fe1422bf9edcb5c36d9e5af3d8b1c7f3469))
* **settings:** let the platform owner choose what tool activity chat shows ([0173986](https://github.com/saeed9321/saidi/commit/0173986f6b0358f9383e0212eee68ea647490e91))
* surface whose AI credential paid, on the run and under each message ([c6f82cc](https://github.com/saeed9321/saidi/commit/c6f82cc3887fa9612f9008102a96c6569567cf01))


### Bug Fixes

* **auth:** stop rejecting the empty issuer every OAuth signup passes ([045dc06](https://github.com/saeed9321/saidi/commit/045dc0627b9ed2f88a3b55551ec251a0b2458ce7))
* **byo:** no silent plaintext at rest, no shared ChatGPT seat, durable disconnect ([e45b979](https://github.com/saeed9321/saidi/commit/e45b979fa89dcd812cd066658767b7d5e6265580))
* **byo:** stop sending an output ceiling the Codex backend refuses ([6f8fd77](https://github.com/saeed9321/saidi/commit/6f8fd77ee2959dd4ac03178c04ae5e10320df10e))
* **chat:** let PRIME read the files Said attaches ([d3a4ab4](https://github.com/saeed9321/saidi/commit/d3a4ab409b2326057b5a7fbd63318279d04100ab))
* **client:** finish a sign-in the provider hands back to the member ([9ced331](https://github.com/saeed9321/saidi/commit/9ced33169c751bd925190917a6bc0f2374af74ee))
* **client:** stop noopener faking a blocked sign-in tab ([3f49243](https://github.com/saeed9321/saidi/commit/3f49243355e2ba2f963ed185cadf875e3eff415d))
* **cloud:** make the uid migration runnable, and stop it breaking agent scratch ([dde88db](https://github.com/saeed9321/saidi/commit/dde88db413617b025e96d6bc6da1d2be123a618b))
* **cloud:** stop mongo-enable-auth.sh sourcing .env.cloud as shell ([c606a57](https://github.com/saeed9321/saidi/commit/c606a57d97d348554efe3c5db03ed646974eedaa))
* **deploy:** point the 9router healthcheck at the endpoint that exists ([415895e](https://github.com/saeed9321/saidi/commit/415895e99398be4b734ecc3ae41e50019333f193))
* **execution:** stop a gateway seat hanging when no model is pinned ([1d6dfee](https://github.com/saeed9321/saidi/commit/1d6dfeee2b5c4eb6195a8ba608b0a4b661776fe2))
* fetch before resolving base branch, ensure up-to-date trees before committing, and enforce no-AI-attribution rules in sub-agent prompts ([1b9ba4b](https://github.com/saeed9321/saidi/commit/1b9ba4ba0798f8f56ad863bd2479ce5fbd990534))
* **providers:** gate the OAuth callback on aiAccount.connect ([eb80318](https://github.com/saeed9321/saidi/commit/eb80318dfb1ce442080672335ac18fe58e62b634))
* **providers:** name the admin who shared, and read a reset epoch as a clock ([1fea4f5](https://github.com/saeed9321/saidi/commit/1fea4f5cae8550178c8f9d5dda353a1e60bb2922))
* resolve run asset file proofing, prevent database corruption from array padding, and improve error logging for API failures. ([1c5e6f5](https://github.com/saeed9321/saidi/commit/1c5e6f5d4e63cc7a108afe90188331b2987c2931))
* **runs:** keep whose credential paid across a restart ([bdc1c13](https://github.com/saeed9321/saidi/commit/bdc1c138f3bd779a53b2c0a3e4efc18d084d6f10))
* **settings:** save every setting, and stop claiming a restart that does nothing ([587c646](https://github.com/saeed9321/saidi/commit/587c646e1eee5442c75bf396b583c2fc50bdc6e0))

## [1.20.0](https://github.com/saeed9321/saidi/compare/v1.19.1...v1.20.0) (2026-08-05)


### Features

* add admin capability to join organizations and refine agent prompt instructions regarding approval gates ([3eacc85](https://github.com/saeed9321/saidi/commit/3eacc857b0087aeb2eea0514a33b7cdd2fde881b))
* add cloud deployment mode with docker-compose and configuration example ([7eee56d](https://github.com/saeed9321/saidi/commit/7eee56db515c4ce199e567543e5345981bb7c93f))
* add primeNeedsRehydrate field to Run model to ensure persistence across sessions ([a426e32](https://github.com/saeed9321/saidi/commit/a426e32b68b87995b4523b645327ce042290b864))
* add workspace admin UI to list and delete personal agents ([b111af9](https://github.com/saeed9321/saidi/commit/b111af9a3afd117470d975b96513b8f5a6e3dae4))
* **cloud:** isolate tenants with per-org uids and authenticated Mongo ([34f3954](https://github.com/saeed9321/saidi/commit/34f395444dfa5fb3cf7f401b5b6638a07c6d3439))
* implement agent scope copying, marketplace rate-limiting, and automated chat titling infrastructure. ([ec4a510](https://github.com/saeed9321/saidi/commit/ec4a5101a8fcddf2d83b8369861df5568b89a610))
* implement chronological feed ordering using server-side epoch timestamps and add associated test suite ([9b45dbf](https://github.com/saeed9321/saidi/commit/9b45dbffbe0a3c1ffd24ef93ede3e0e2f8559bf4))
* implement cross-directory session resumption by migrating transcripts to the current working directory ([022d7d3](https://github.com/saeed9321/saidi/commit/022d7d349fa64a8603fc27155d860a0c0a120894))
* initialize .mex directory with comprehensive documentation, architectural context, and pattern templates ([832c57d](https://github.com/saeed9321/saidi/commit/832c57d07735c3e294d9771ddad468115b9f3d02))
* integrate VitePress documentation site into the main application build and server routing ([c9b4088](https://github.com/saeed9321/saidi/commit/c9b40882822f2e4e2afec2e57469a52f666e93f2))
* **memory:** cross-member recall, and fix the team-roster tool being unreachable ([507da24](https://github.com/saeed9321/saidi/commit/507da24c6e45fdb73cf63f564a90e51725d30f49))
* migrate custom endpoint thinking configuration from global setting to per-effort provider profile setting ([0872736](https://github.com/saeed9321/saidi/commit/08727369162e3b137396c0989d738663dba1e7a3))


### Bug Fixes

* **chat:** stop PRIME promising an approval card it never raises ([594c291](https://github.com/saeed9321/saidi/commit/594c291077b73bcba5ae8fc36bcd2bc8ea5f2c02))
* **cloud:** base the image on Debian so agents can run glibc binaries ([ed07e3d](https://github.com/saeed9321/saidi/commit/ed07e3de85b174a063c9e11570636d5989830d1d))
* **cloud:** cap the saidi container's memory and cpu ([b2efc9c](https://github.com/saeed9321/saidi/commit/b2efc9c8db8450b1789d5a4a57822909d9bb85f8))
* **cloud:** install bash so agents can run commands at all, plus chromium for PDFs ([4390ece](https://github.com/saeed9321/saidi/commit/4390ece5d3c66093d31bc451f148af8ccd78414e))
* **cloud:** run mongo as an initialised single-node replica set ([e96d6e8](https://github.com/saeed9321/saidi/commit/e96d6e88cb662c976cdf88917a09dde087b8a5cb))
* **cloud:** serve attachments and run files, which could never send the org header ([36fbde1](https://github.com/saeed9321/saidi/commit/36fbde18d0a12bfa8fb69d503925082546f1484a))
* **cloud:** use CHROMIUM_USER_FLAGS so --no-sandbox actually reaches chromium ([074bb28](https://github.com/saeed9321/saidi/commit/074bb28bd7c66c46763df2518de99a5721803412))
* **docs-site:** disable lastUpdated so the cloud image builds ([b071354](https://github.com/saeed9321/saidi/commit/b071354dc4e54efdc8f3b4daf4486e23d6c906c0))
* reset orphaned tasks to pending on process startup to prevent deadlocks ([81b53df](https://github.com/saeed9321/saidi/commit/81b53df880b6f315c18c8a2736a54b823685cda4))

## [1.19.1](https://github.com/saeed9321/saidi/compare/v1.19.0...v1.19.1) (2026-08-02)


### Bug Fixes

* prevent unhandled rejections in chat switching and rectify MongoDB connection pool exhaustion by properly managing change stream lifecycles ([eafc6e1](https://github.com/saeed9321/saidi/commit/eafc6e1977d24f175aa8fcc216ee0c0407b5f430))

## [1.19.0](https://github.com/saeed9321/saidi/compare/v1.18.0...v1.19.0) (2026-08-01)


### Features

* add unreported usage flag and filter ephemeral SDK events to correctly account for unpriced LLM calls ([94affe4](https://github.com/saeed9321/saidi/commit/94affe4d4bfa619cc6ba11e0cda808ddebeeb516))

## [1.18.0](https://github.com/saeed9321/saidi/compare/v1.17.0...v1.18.0) (2026-08-01)


### Features

* add agent packing logic with cost-based metering and migration support ([10ac4eb](https://github.com/saeed9321/saidi/commit/10ac4eb2149616ad746dc1a20996c7128a99623c))
* add model-based spend tracking to RunContext and implement self-assessment logic for autonomous runs. ([fc80e9f](https://github.com/saeed9321/saidi/commit/fc80e9fd831a4123e5cc2e4bcfc38ca26440a45b))
* add per-message cost apportionment and upgrade provider testing to support streaming probes ([28a9af5](https://github.com/saeed9321/saidi/commit/28a9af5e282c191916665fe974c0dd73770f6bfc))
* implement live endpoint connectivity testing for provider profiles via a new /api/providers/test route and UI probe button ([bd5c047](https://github.com/saeed9321/saidi/commit/bd5c0470dc640fbdc4d96a948da1edd8daddb8c4))
* implement real-time reasoning (thinking) display with buffered scratchpad support across client and orchestrator ([7f1d351](https://github.com/saeed9321/saidi/commit/7f1d351d700005f542a3e43f0c139917473f50a0))

## [1.17.0](https://github.com/saeed9321/saidi/compare/v1.16.1...v1.17.0) (2026-07-31)


### Features

* add descriptive hints to SystemSettings dropdown components ([dfc84d4](https://github.com/saeed9321/saidi/commit/dfc84d41b33185cbabe324e5d2d7569227fa6326))
* conditionally hide session management settings in SystemSettings based on optimization and adaptive session state ([ad6ffdc](https://github.com/saeed9321/saidi/commit/ad6ffdc315922fd173022b87d6b9bbfeb989d33a))
* introduce git worktree support for concurrent run execution per repository ([4b95654](https://github.com/saeed9321/saidi/commit/4b95654f9f056f03f2c75acb0f864970aeeb0c80))


### Bug Fixes

* update VERIFIER_THINKING_BUDGET to 1024 to satisfy the provider's API minimum requirements ([138311d](https://github.com/saeed9321/saidi/commit/138311d6c7eff24a2f6f9cabc13c022e2e13001d))

## [1.16.1](https://github.com/saeed9321/saidi/compare/v1.16.0...v1.16.1) (2026-07-31)


### Bug Fixes

* increase header z-index to resolve stacking context issue with Actions menu ([7724386](https://github.com/saeed9321/saidi/commit/7724386c1abc20ae5bf85b172d9881fcc36d7186))

## [1.16.0](https://github.com/saeed9321/saidi/compare/v1.15.0...v1.16.0) (2026-07-31)


### Features

* implement run management system with new UI components and Telegram conversation orchestration logic ([9602bd4](https://github.com/saeed9321/saidi/commit/9602bd4cf40a2b01eb39569a0738d795c15ac117))
* implement run optimization, memory snapshotting, and task-based evidence tracking across the orchestrator engine ([7b57623](https://github.com/saeed9321/saidi/commit/7b57623148740cdd8786380b3d1864c9aa188342))

## [1.15.0](https://github.com/saeed9321/saidi/compare/v1.14.0...v1.15.0) (2026-07-31)


### Features

* implement smart context clipping to preserve critical verification evidence and fix data loss during run replanning ([adae1ed](https://github.com/saeed9321/saidi/commit/adae1ed95305c97a68785786bd19279511109fc3))


### Bug Fixes

* **runs:** bind mechanical checks to the criteria they prove, and gate the commands they run ([3e41fd4](https://github.com/saeed9321/saidi/commit/3e41fd4762298207fe4879a3c363c766927fa8f6))
* **runs:** meter the verifier, separate gate failures from work failures, and unify attempt policy ([d753cbb](https://github.com/saeed9321/saidi/commit/d753cbbf50d58c45ca1d259addfb4a4a0c02e400))
* **runs:** verify the work, not the base branch; settle approved work; make model checks supplementary ([bb6bd2e](https://github.com/saeed9321/saidi/commit/bb6bd2ea044702122f8f9d7853074edea4e2012e))

## [1.14.0](https://github.com/saeed9321/saidi/compare/v1.13.1...v1.14.0) (2026-07-30)


### Features

* implement model-alias pinning to ensure sub-agents resolve correctly with custom endpoints ([2df726d](https://github.com/saeed9321/saidi/commit/2df726d734745438043ac0797aac080971952a49))
* implement task-level guard configuration and automated mechanical check execution for run validation ([78cba09](https://github.com/saeed9321/saidi/commit/78cba09e1eae15c12cbe37f6d8c75a6072006826))


### Bug Fixes

* patch liveness leaks by preventing ownerless status from lighting nodes and add Docker orchestration support ([743564b](https://github.com/saeed9321/saidi/commit/743564bdf0a968f8b371cf3060bac966c2f9101b))

## [1.13.1](https://github.com/saeed9321/saidi/compare/v1.13.0...v1.13.1) (2026-07-28)


### Bug Fixes

* **runs:** verify against the full report, and never burn an attempt on truncation ([46e2538](https://github.com/saeed9321/saidi/commit/46e2538c1d3b4cf23785c1306ba35e7ff848885a))

## [1.13.0](https://github.com/saeed9321/saidi/compare/v1.12.0...v1.13.0) (2026-07-28)


### Features

* **runs:** guided execution runtime — frozen plan, verification gate, engine-owned dispatch ([27e954d](https://github.com/saeed9321/saidi/commit/27e954d074d828949c9903446eec593c49890ebe))

## [1.12.0](https://github.com/saeed9321/saidi/compare/v1.11.0...v1.12.0) (2026-07-26)


### Features

* add capability to remove skills and detach MCP servers from agents via UI ([a61cf6b](https://github.com/saeed9321/saidi/commit/a61cf6b248cd2702cd954fb391be0d8df68d8a1e))
* add task tracking to run engine via checklist item updates and task ID association ([de7de23](https://github.com/saeed9321/saidi/commit/de7de23102c64eea40c010a31d2ebe6f83e8922b))
* implement late-connection database hydration and state recovery for seamless orchestrator re-initialization ([32b6db9](https://github.com/saeed9321/saidi/commit/32b6db9190ed75bf6f58530a1eeac50fda2ee059))


### Bug Fixes

* **telegram:** deliver full run results and show live typing indicators ([ee37f26](https://github.com/saeed9321/saidi/commit/ee37f262f042eb9fc1369c76539557876255337b))

## [1.11.0](https://github.com/saeed9321/saidi/compare/v1.10.0...v1.11.0) (2026-07-19)


### Features

* consolidate creative roster, retire duplicate agents, update agent documentation, and improve custom agent resolution logic. ([c6b8849](https://github.com/saeed9321/saidi/commit/c6b884921dec61c103b1bfba80243ef1ee567ad6))
* implement per-action auto-approve settings, add persistent chat transcript loading, and fix websocket conversation routing security. ([c7139aa](https://github.com/saeed9321/saidi/commit/c7139aa4f53c38cecf262b01bcae53e9ec7d15f7))
* implement retry logic for agent queries and scale marketplace r… ([5d2261b](https://github.com/saeed9321/saidi/commit/5d2261b642322c681fae28ebd7f65a8e7b63d573))
* implement retry logic for agent queries and scale marketplace resource limits for multi-agent departments. ([995c298](https://github.com/saeed9321/saidi/commit/995c2985001695662663a7c58eff0cfd1cf25ffc))


### Bug Fixes

* **runs:** surface delegated-agent deliverables in the run chat ([73f7da6](https://github.com/saeed9321/saidi/commit/73f7da677254d3c0bc99f9bbf0a1825f1bb19ca9))

## [1.10.0](https://github.com/saeed9321/saidi/compare/v1.9.0...v1.10.0) (2026-07-16)


### Features

* add ChatSkeleton component to display loading state during chat transitions ([b88cc07](https://github.com/saeed9321/saidi/commit/b88cc07b5446ee0a04283a8070be2738d1d133f0))
* add toolDetail helper to provide granular tool call summaries in sandbox event status messages ([7fc1d87](https://github.com/saeed9321/saidi/commit/7fc1d8723dd07e0da48a6a701ea41f25f627b971))
* authenticate GitHub requests using user's marketplace session token to improve API quota utilization ([0bacffe](https://github.com/saeed9321/saidi/commit/0bacffefb34a9848d82323d73f7305db3b8e11f9))
* enforce thinking token budget caps based on the current effort mode ([26fec56](https://github.com/saeed9321/saidi/commit/26fec5655bdf421cba19e53136d40ec5ba36510e))
* implement per-org channel configuration store with MongoDB and … ([3325936](https://github.com/saeed9321/saidi/commit/3325936d626eb89b2b6b2d2df9fcd545b2f9eca6))
* implement per-org channel configuration store with MongoDB and disk persistence support ([432c4f5](https://github.com/saeed9321/saidi/commit/432c4f53bc0a9bda2c5bfaba4c6bf8e82e8a06bf))
* implement per-run docker container pool for agent isolation and persistent workspace state ([9d24dc6](https://github.com/saeed9321/saidi/commit/9d24dc68ac446310fda9b168cdb8e81ecc533e43))
* implement per-turn cost and step guardrails in system settings to prevent runaway agent loops ([fb6b6cb](https://github.com/saeed9321/saidi/commit/fb6b6cbe5914e8c5242a9d9bd832c1104ecded72))
* implement UI feedback and error signaling for failed tool results ([1f314be](https://github.com/saeed9321/saidi/commit/1f314bef0a0461c236637b79e5f1b3ad2a9fe082))
* make all client pages responsive on mobile screens ([8978af5](https://github.com/saeed9321/saidi/commit/8978af5f9ecd263b71eda2d4944b47d4ca10fa60))


### Bug Fixes

* **cost:** cap extended-thinking tokens per effort tier at both Claude call sites ([acb5698](https://github.com/saeed9321/saidi/commit/acb56989a02ba2ef482322061a5529131c2accad))
* **mobile:** constrain new-run modal to viewport; wrap run-detail header toolbar ([78752ad](https://github.com/saeed9321/saidi/commit/78752ad1cf5770bdcd8b18614bdac8c6c43f5bb5))
* **mobile:** give composer textarea its own full-width line above controls ([0f0ca1f](https://github.com/saeed9321/saidi/commit/0f0ca1fd1e6730e1916206040e5c0f6e50867d2d))
* **mobile:** hide orbit pan-zoom hint and wrap composer row so Send never clips ([a490c58](https://github.com/saeed9321/saidi/commit/a490c58826149c2c4830f634cb3e470435fc5cb0))
* **mobile:** keep composer on one line; trim fixed width so Send fits at 320px ([b39cd50](https://github.com/saeed9321/saidi/commit/b39cd504f167d02d76bfa797debdd1139a71ba22))
* **mobile:** let run-detail action toolbar wrap to full width ([3cb109b](https://github.com/saeed9321/saidi/commit/3cb109b1bfa67cd729f2acb7bf193abe7092788e))
* **mobile:** prevent iOS input focus-zoom by forcing &gt;=16px font on mobile form controls ([024b36d](https://github.com/saeed9321/saidi/commit/024b36d9e644d177d74f6ff96ca6f51dd898f212))
* **mobile:** stop full-width content clipping and collapse Crons grid on phones ([d6d9d0c](https://github.com/saeed9321/saidi/commit/d6d9d0c21b91a2c6abbe3cb4218d5759fa7f987c))
* **onboarding:** stack check rows on mobile so detail column doesn't squeeze ([34bca17](https://github.com/saeed9321/saidi/commit/34bca17585d57abe84fc2fef449d76f6e04bf4d0))
* reconcile cross-file wirings (streaming shared-viewers, chat setShared ACL) ([7f39533](https://github.com/saeed9321/saidi/commit/7f39533785dad7a916fc7c0849af8de87d5120ea))
* **security:** close two re-audit residuals (WS default-chat ACL, SSRF IPv6) ([778af5f](https://github.com/saeed9321/saidi/commit/778af5fe5661dbf67a3bcbd2377fd682d202ee65))

## [1.9.0](https://github.com/saeed9321/saidi/compare/v1.8.0...v1.9.0) (2026-07-14)


### Features

* implement message attachments system and unified stick-to-bottom scroll behavior for chat and run views. ([64a6022](https://github.com/saeed9321/saidi/commit/64a602237a66abbcdce72d7e5c15fdbbf1079a7f))

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

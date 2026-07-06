# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

Uses **pnpm** (via corepack) on **Node 24** — see `.nvmrc` and the `engines` field. One-time: `corepack enable pnpm` and `nvm use`. **⚠️ Always `nvm use` first** — Nx needs Node 20+, and the default shell may be on an older Node.

```bash
pnpm dev          # Next.js dev server (http://localhost:3000)
pnpm build        # Production build
pnpm start        # Serve the production build
pnpm lint         # ESLint 10 (flat config) over the whole repo
pnpm testc        # Jest: coverage + verbose + --forceExit (no plain `test` script)
```

This is an **Nx workspace**, so also:

```bash
pnpm nx lint <project>          # e.g. pnpm nx lint qiibee
pnpm nx typecheck <lib>         # per-lib strict tsc (TS libs only)
pnpm nx run-many -t typecheck   # all projects
pnpm nx affected -t lint typecheck testc build   # only what a change touched (this is what CI runs)
pnpm nx show projects
```

Single test file / by name:

```bash
pnpm jest libs/haptik/src/lib/index.test.tsx
pnpm jest -t "search filter works"
```

Tests are **co-located with their libs** as `libs/<name>/src/lib/index.test.tsx` (importing the lib **relatively** — `./index` / `./state` — so the module-boundary rule doesn't flag a self-import), and run via a single root Jest (`pnpm testc` discovers them by the default `*.test.tsx` glob). **Every feature lib has a co-located spec**: the FriendsList/Haptik behavioural suite (`haptik`), a redux-connected Qiibee tripwire (`qiibee`), and mount **smoke** tests for the rest (`dashboard`, `timer`, `solid-principles`, `cogsy`, `taikai`, `fynd`, `plaza`, `appbase`) — plus `weather-app`/`valory`, which install a never-resolving `fetch` stub (jsdom has no `fetch`) so they stay in their loading state instead of hitting the network or the amCharts CDN global. [jest.setup.js](jest.setup.js) polyfills `matchMedia` + `MessageChannel` and mocks `next/router` (the `MessageChannel` polyfill uses `worker_threads`, whose handle React's scheduler keeps alive — so `testc` runs with `--forceExit` to avoid a multi-second lingering exit); [jest.config.js](jest.config.js) stubs `.less/.css` (→ [jest.styleMock.js](jest.styleMock.js)), maps the `@my-portfolio/*` aliases, transforms `ts/tsx` via `next/babel`, and scopes coverage to Haptik (excluding `*.test.*`). The specs are **TypeScript** (`.tsx`): they import jest globals from `@jest/globals` and load the jest-dom matcher types via `import '@testing-library/jest-dom/jest-globals'` — so the per-lib `tsconfig` (which includes `.tsx`) **type-checks them too** under `nx typecheck`.

## Architecture

A **portfolio + learning-sandbox site** — a collection of largely independent mini-apps (recruiter take-home assignments and UI/concept practice) stitched under one Next.js site. It has been migrated to an **Nx workspace** and is **TypeScript throughout**.

- **One Next.js app** (Nx project `my-portfolio`, tag `type:app`) — Pages Router. `pages/` are thin re-exports (`_app.tsx` also composes the redux store), and `components/` now holds only the **app shell**: `GlobalStyles`, `Layout`, and the `Portfolio` landing page.
- **12 feature libs** under [libs/](libs/), each its own Nx project (tag `type:feature`), each a self-contained mini-app:
  `weather-app` · `valory` · `timer` · `solid-principles` · `qiibee` · `dashboard` · `cogsy` · `taikai` · `fynd` · `appbase` · `plaza` · `haptik`.
- **1 util lib** — [`ui-theme`](libs/ui-theme/) (tag `type:util`), the app-shell design tokens (the `COLOR` palette used by `GlobalStyles`, `Layout`, and `Portfolio`). Import it as `@my-portfolio/ui-theme`. Each mini-app keeps its **own** brand palette — `ui-theme` is deliberately just the site-shell tokens, not a merged cross-app theme.
- **1 sandbox lib** — [`javascript-learning`](libs/javascript-learning/) (tag `type:feature`), plain-JS interview/concept practice snippets. **Not wired into the app** (nothing imports it), so it has a `lint` target only — no `typecheck`, barrel, alias, or page.

There is almost no shared domain logic between features — treat each lib as its own app.

### Routing: pages → libs
[pages/](pages/) files are thin re-exports, e.g. `import Timer from '@my-portfolio/timer'; export default Timer;`. **All real code lives in the lib.** When adding behavior, edit the lib, not the page.

### Lib layout
```
libs/<name>/
  src/index.ts     # public API barrel — the ONLY import surface (import '@my-portfolio/<name>')
  src/lib/         # implementation: index.tsx, styles.ts, Reducer.ts, Helpers/, ...
  project.json     # Nx project: tags + lint (+ typecheck for TS) targets
  tsconfig.json    # per-lib strict typecheck (extends ../../tsconfig.base.json)
  package.json     # only when { "sideEffects": false } is needed (see below)
  README.md
```

### Module boundaries (enforced — this is the point of the Nx split)
`@nx/enforce-module-boundaries` in [eslint.config.mjs](eslint.config.mjs) uses the `type:*` tags in each `project.json`:
- `type:app` → may import `type:feature` / `type:util`
- `type:feature` → may import `type:util` **only — never another feature**
- so **one mini-app cannot import another**; a cross-lib import is a lint error.

The app's legacy convenience aliases (`components/*`, `images/*`) are **allow-listed** in the rule — they're in-app imports, not project boundaries.

### Path aliases (in THREE places — keep in sync)
- **Scoped lib aliases** `@my-portfolio/<name>` → `libs/<name>/src/index.ts`, declared in **all three** of: [tsconfig.json](tsconfig.json) (Next + `tsc`), [tsconfig.base.json](tsconfig.base.json) (read by the boundary rule), and [jest.config.js](jest.config.js) `moduleNameMapper`.
- **App aliases** (`components/*`, `images/*`) live in **`tsconfig.json` only** — do **not** add them to `tsconfig.base.json` or the boundary rule would flag every in-app import.

### State management
- **Redux (qiibee only):** the **qiibee lib owns its slice** — reducer, actions, and the domain types live in [libs/qiibee/src/lib/state/](libs/qiibee/src/lib/state/) and the lib's barrel exports `qiibeeReducer`. The app **composes** it in [pages/_app.tsx](pages/_app.tsx) (`makeStore` + `next-redux-wrapper`) — an app→feature dependency, the correct direction (immutability & serializability checks are **off** because the legacy reducer mutates in place). There is no separate `store/` folder.
- **Local:** every other lib uses `useReducer`/`useState`. The assignment reducers (Haptik, Taikai, Fynd, Appbase) keep an untouched `...Copy` of the original list and derive filtered/sorted views from it, so search/sort/reset never lose data.

### Styling
- **styled-components** — colocated `styles.ts` per lib. SSR via `ServerStyleSheet` in [pages/_document.tsx](pages/_document.tsx); SWC handles it (`compiler.styledComponents` in [next.config.js](next.config.js) — there is **no `.babelrc`**).
- **antd 6** (CSS-in-JS) — its styles are extracted server-side in `_document.tsx` via `@ant-design/cssinjs`.
- Global CSS from [components/GlobalStyles/](components/GlobalStyles/); **amCharts v4** loads from its CDN via `<script>` tags injected in the `_document` head (so chart pages depend on that CDN at runtime, and headless tooling tends to block on it).

### Barrels & tree-shaking
Multi-entry libs — **qiibee** (5 page components) and **appbase** (2) — carry a `package.json` with `{ "sideEffects": false }` so each Next page bundles only the component it imports (without it, every page pulls the whole barrel).

### CI
[.github/workflows/ci.yml](.github/workflows/ci.yml) runs `pnpm nx affected -t lint typecheck testc build` on PRs — only projects a change touches get checked (uses `nrwl/nx-set-shas`).

### Animation
The Portfolio landing page ([components/Portfolio/Pages/Home.tsx](components/Portfolio/Pages/Home.tsx)) uses a **GSAP timeline** for the intro overlay; the overlay unmounts via React state once the animation completes so it stops blocking interaction.

## Adding a new lib (extraction recipe)
1. `git mv components/<Feature>` (or its source) → `libs/<name>/src/lib` (relative imports survive the move).
2. Barrel `src/index.ts` (single default, or named exports for a multi-page lib — then add `package.json` with `sideEffects: false`).
3. `project.json` — tags `["scope:<name>", "type:feature"]` + `lint` and (for TS) `typecheck` targets.
4. Per-lib `tsconfig.json` extending `../../tsconfig.base.json`.
5. Alias `@my-portfolio/<name>` in **tsconfig.json + tsconfig.base.json + jest.config.js**.
6. Redirect the page(s) to `import … from '@my-portfolio/<name>'`.
7. Verify: `pnpm nx lint <name>`, `pnpm nx typecheck <name>`, `pnpm build`, `pnpm testc`.

## Principles

Durable rules for working in this repo — follow them by default.

- **No `any` — model the real types.** Define interfaces for domain data (e.g. the qiibee `Customer` / `Brand` model in [libs/qiibee/src/lib/state/types.ts](libs/qiibee/src/lib/state/types.ts)). For a genuinely dynamic value use `unknown` **plus a narrow typed assertion** (`x as SomeType`) — never `any`. A hand-written redux reducer stays RTK-compatible by typing its action as `{ type: string; data?: unknown }` and casting `data` per case; narrow `currentUser` with `as Customer` / `as Brand` where the action implies the variant. (`unknown` + assertion is fine; `any` is not.)
- **Verify before calling it done.** Run the relevant checks and confirm green — `pnpm lint`, `pnpm nx typecheck <lib>` (or `nx run-many -t typecheck`), `pnpm build`, `pnpm testc` — never report "done" on a guess.
- **Preserve behavior when refactoring.** Type-tightening, renames, and extractions must not change runtime behavior. If a "correct" type would force a behavior change, prefer a documented assertion over changing the logic.
- **Match the surrounding code.** Keep the existing conventions (the `...Copy` reducer pattern, the `reedeem` misspellings, `arrow-parens: as-needed`, the lib/barrel layout) rather than introducing new styles.

## Conventions & gotchas
- **pnpm config home is [pnpm-workspace.yaml](pnpm-workspace.yaml)** — pnpm 11 **ignores** the `package.json` `pnpm` field (it warns). Both `allowBuilds` (native build-script allowlist: `nx`, `sharp`, `unrs-resolver`) and `overrides` (security bumps) live there. Applying new overrides needs `pnpm install --no-frozen-lockfile`.
- **ESLint 10 flat config** ([eslint.config.mjs](eslint.config.mjs)): `eslint-config-next` (native flat array) + `js.recommended`, `@typescript-eslint` for `.ts/.tsx`, jest rules for tests, and the boundary rule. `arrow-parens: as-needed`. Run `pnpm lint` before considering work done. **ESLint 10 gotchas** (all handled in the config): pin `settings.react.version` (`eslint-plugin-react`'s version *detection* calls the removed `context.getFilename()`); **don't** re-declare the `@typescript-eslint` plugin (eslint-config-next registers it — redefining a plugin is a hard error in 10); and point plain **JS** at our `@typescript-eslint/parser` too (its bundled copy predates the `scopeManager.addGlobals` API). Needs `@typescript-eslint` ≥ 8.63 (first version peering ESLint 10).
- The **OpenWeatherMap key** is `NEXT_PUBLIC_OPENWEATHERMAP_API_KEY` in `.env.local` (see [.env.example](.env.example)) — no longer hardcoded.
- The qiibee slice uses the consistent misspellings **`reedeemed_points` / `reedeem_points`** — match them so lookups keep working.
- Test files are still `.jsx` (jest transforms `ts/tsx` via `next/babel`); coverage is scoped to Haptik.

---
name: library-docs
description: The dependency stack of my-portfolio with the version-specific gotchas that are already worked around — pnpm 11, Node 24, Nx 23, Next 16, React 19, TypeScript 6, ESLint 10, antd 6, styled-components 6, Jest 30, GSAP, amCharts v5 CDN, and the Vercel deploy config. Load before adding, upgrading, or removing a dependency, when an install/build/lint/test fails in a way that smells version-specific, or before "cleaning up" a config workaround.
---

# Library docs

Every workaround below exists because something broke. **Read the relevant entry
before removing a config oddity** — most of them are load-bearing and commented
in place.

## Toolchain

| | Version | Pinned in |
|---|---|---|
| Node | **24.x** | `.nvmrc` (`24`), `engines.node` |
| pnpm | **11.5.1** via corepack | `packageManager` |
| Nx | **23.0.1** | `nx.json`, `defaultBase: master` |

```bash
corepack enable pnpm   # one-time
nvm use                # ⚠️ ALWAYS FIRST — Nx needs Node 20+
```

**`nvm use` before anything.** The default shell may sit on an older Node and Nx
will fail with an unhelpful error.

### pnpm 11

- **Config home is [pnpm-workspace.yaml](../../../pnpm-workspace.yaml), not
  `package.json`.** pnpm 11 **ignores** the `package.json` `pnpm` field (it only
  warns). Three things live there:
  - **`allowBuilds`** — native build-script allowlist: `nx` (file-hashing +
    daemon bindings), `sharp` (Next image optimization / libvips),
    `unrs-resolver` (native resolver for `eslint-plugin-import`).
    It is **`allowBuilds:`**, *not* `onlyBuiltDependencies:`.
  - **`minimumReleaseAgeExclude`** — pnpm 11 blocks freshly-published packages;
    the ten `@typescript-eslint@8.63.0` packages are allowlisted so CI and
    Vercel can install.
  - **`overrides`** — security bumps for vulnerable **transitive** deps
    (`lodash`, `d3-color`, `postcss`, `js-yaml@3`, `brace-expansion@1`), each
    annotated with the CVE class and the path it comes in through.
- **Applying new overrides needs `pnpm install --no-frozen-lockfile`.**
- [.npmrc](../../../.npmrc): `node-linker=hoisted` (flat layout, a low-risk
  legacy of the yarn migration — phantom deps are not yet fixed, so don't switch
  to the strict symlinked layout casually) and `engine-strict=true`.

### Vercel

[vercel.json](../../../vercel.json) forces corepack so the build uses pnpm 11:

```json
"installCommand": "COREPACK_ENABLE_DOWNLOAD_PROMPT=0 corepack pnpm install --frozen-lockfile",
"buildCommand":   "COREPACK_ENABLE_DOWNLOAD_PROMPT=0 corepack pnpm run build"
```

Without the corepack prefix Vercel picks its own pnpm and the install diverges.

---

## Framework

### Next.js 16 (Pages Router)

- Pages Router, **not** App Router. Don't introduce `app/`.
- `compiler.styledComponents` in [next.config.js](../../../next.config.js) — SWC
  does the styled-components transform. **There is no `.babelrc` and adding one
  disables SWC** (it was deliberately deleted: `refactor(build): delete .babelrc,
  re-enable SWC`).
- `eslint-config-next` 16 ships a **native flat-config array** — spread it
  directly, no `FlatCompat` bridge (the bridge choked on the new circular-ref
  config shape).
- `next/image` is required; bare `<img>` is lint-flagged.

### React 19

- `defaultProps` is gone — use **default parameters**, enforced by
  `react/require-default-props: { functions: 'defaultArguments' }`.
- `prop-types` 15.8.1 is still a dep for legacy JS. Don't add new usage.

### TypeScript 6

- `ignoreDeprecations: "6.0"` in `tsconfig.base.json` — needed for options TS 6
  deprecated.
- Every lib typechecks standalone under `strict: true`:
  `tsc --noEmit -p libs/<name>/tsconfig.json`.
- Per-lib config: `target ES2017`, `module esnext`,
  `moduleResolution bundler`, `jsx react-jsx`, `types: [node, react, react-dom]`.

---

## Linting — ESLint 10

Flat config in [eslint.config.mjs](../../../eslint.config.mjs). Three landmines,
all handled — **do not "tidy" them away**:

1. **Pin `settings.react.version: '19'`.** `eslint-plugin-react`'s version
   *detection* calls `context.getFilename()`, removed in ESLint 10 → crash.
2. **Never re-declare the `@typescript-eslint` plugin.** `eslint-config-next`
   already registers it, and redefining a plugin is a **hard error** in ESLint 10.
3. **Point plain JS at our `@typescript-eslint/parser` too.** The copy bundled
   with `eslint-config-next` predates ESLint 10's `scopeManager.addGlobals`.

Requires `@typescript-eslint` ≥ **8.63** (first version peering ESLint 10) —
which is also why the `minimumReleaseAgeExclude` list exists.

Plugins in play: `eslint-config-next/core-web-vitals` (react, react-hooks,
jsx-a11y, import), `@eslint/js` recommended, `eslint-plugin-jest` (test files
only), `@nx/eslint-plugin` (module boundaries).

---

## Testing — Jest 30

- `testEnvironment: 'jsdom'` (Jest 27 changed the default to `node`).
- Transform: `babel-jest` with `presets: ['next/babel']`,
  `sourceType: 'unambiguous'` — the last bit lets babel detect and rewrite the
  bare ESM `import`s in the un-ignored node_modules deps.
- **`transformIgnorePatterns: ['/node_modules/\\.pnpm/(?!@ant-design\\+)']`** —
  `@ant-design/icons` 6.3.x and `@ant-design/fast-color` ship bare ESM
  `import` statements from their **CJS** entry, so any antd component under Jest
  dies with *"Cannot use import statement outside a module"*. Only those two are
  un-ignored. Note the pnpm layout: real files nest under
  `.pnpm/<pkg>@<ver>/`.
- `moduleNameMapper` stubs `.less/.css` → `jest.styleMock.js` and mirrors every
  path alias — **keep it in sync with both tsconfigs**.
- [jest.setup.js](../../../jest.setup.js) polyfills `matchMedia` and
  `MessageChannel` and mocks `next/router`. The `MessageChannel` polyfill uses
  `worker_threads`, whose handle React's scheduler keeps alive — hence
  **`--forceExit`** in `pnpm testc`. Removing it costs a multi-second hang.

---

## UI stack

| Package | Version | Notes |
|---|---|---|
| `styled-components` | 6.4.3 | SSR via `ServerStyleSheet` in `_document.tsx`; transient `$props` |
| `@emotion/is-prop-valid` | 1.4.0 | Peer of styled-components 6 for prop filtering |
| `antd` | 6.5.0 | CSS-in-JS; SSR extracted via `@ant-design/cssinjs` (`createCache` + `StyleProvider` + `extractStyle`) |
| `@ant-design/charts` | 2.6.7 | Pulls `lodash` + `d3-color` → the security overrides |
| `@ant-design/icons` | 6.3.2 | The Jest `transformIgnorePatterns` case above |
| `react-icons` | 5.7.0 | Icon set for the mini-apps |
| `gsap` | 3.15.0 | **Installed but unused** since 6b8b983 — landing motion is now hand-rolled (rAF + IntersectionObserver). Removal candidate; check `grep -rn gsap` before assuming otherwise |

### amCharts v5 — CDN, not a dependency

Loaded as `<script>` tags in the `_document` head:

```
//cdn.amcharts.com/lib/5/index.js          → window.am5
//cdn.amcharts.com/lib/5/xy.js             → window.am5xy
//cdn.amcharts.com/lib/5/themes/Animated.js
```

Consumed as **untyped globals** in
[libs/weather-app/src/lib/Graph/index.tsx](../../../libs/weather-app/src/lib/Graph/index.tsx).
Consequences:

- Chart pages depend on that CDN **at runtime**.
- **Headless tooling tends to block on it** — expect timeouts screenshotting or
  crawling `/weather-app`.
- Under Jest, `weather-app` and `valory` install a **never-resolving `fetch`
  stub** so they stay in their loading state and never touch the CDN global.
- Typing these globals is a legitimate `unknown` + narrow-assertion case — still
  never `any`.

---

## State

| Package | Version | Notes |
|---|---|---|
| `@reduxjs/toolkit` | 2.12.0 | `configureStore` in `pages/_app.tsx`. Immutability + serializability checks **off** — the legacy qiibee reducer mutates in place |
| `react-redux` | 9.3.0 | |
| `next-redux-wrapper` | 8.1.0 | `createWrapper` for SSR store hydration |

Only `qiibee` uses Redux. Everything else is `useReducer`/`useState`.

---

## Environment

`NEXT_PUBLIC_OPENWEATHERMAP_API_KEY` in `.env.local` (see
[.env.example](../../../.env.example)) — no longer hardcoded. `.env*.local` is
gitignored; `.env.example` stays committed.

---

## Adding or upgrading a dependency

1. Check whether an existing dep already covers it — `react-icons` and the local
   inline icon sets cover most icon needs; see the `ui-registry` skill.
2. Only add it to the lib that needs it. **Don't introduce antd into a lib that
   doesn't already use it.**
3. `pnpm add <pkg>` (add `--no-frozen-lockfile` if you touched `overrides`).
4. If it ships native build scripts, add it to `allowBuilds` in
   `pnpm-workspace.yaml`.
5. If it's brand-new on npm, it may trip `minimumReleaseAge` — allowlist the
   exact `name@version` entries.
6. If it ships ESM from a CJS entry, it will break Jest — extend
   `transformIgnorePatterns`.
7. **Verify the full gate**: `pnpm lint`, `pnpm nx run-many -t typecheck`,
   `pnpm testc`, `pnpm build`.
8. Commit as `chore(deps):` or `feat(deps):`, separate from feature work.
9. **Leave a comment recording which version broke what** — that is the pattern
   every config file here follows and it is why the workarounds survive.

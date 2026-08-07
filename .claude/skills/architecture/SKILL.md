---
name: architecture
description: How the my-portfolio Nx workspace is wired — lib layout, the enforced module boundaries, the three places path aliases must stay in sync, page→lib routing, state management, styling/SSR, and barrels. Load before adding a lib, moving code between projects, adding an import that crosses a project, touching tsconfig/jest aliases, or debugging an "enforce-module-boundaries" or unresolved-alias error.
---

# Architecture

An **Nx workspace**, TypeScript throughout: one Next.js app + 15 libs. The split
is not cosmetic — it is enforced by lint so the mini-apps cannot bleed into each
other.

```
my-portfolio/
  pages/            # Next Pages Router — THIN RE-EXPORTS ONLY
  components/       # app shell only: GlobalStyles, Layout, Portfolio
  libs/<name>/      # one Nx project per mini-app
  eslint.config.mjs # boundary rule lives here
  tsconfig.json     # Next + tsc paths (lib aliases + app aliases)
  tsconfig.base.json# lib aliases only — read by the boundary rule
  jest.config.js    # moduleNameMapper mirrors both
  nx.json           # targetDefaults + defaultBase: master
```

## Projects and tags

| Project | Tags | Notes |
|---|---|---|
| `my-portfolio` (root) | `type:app` | Tag lives in `package.json`'s `nx` field, not a `project.json` |
| 13 feature libs | `scope:<name>`, `type:feature` | `weather-app` `valory` `timer` `solid-principles` `qiibee` `dashboard` `cogsy` `taikai` `fynd` `appbase` `plaza` `haptik` `mohan-gpt` |
| `javascript-learning` | `scope:*`, `type:feature` | Unwired sandbox — `lint` target only |
| `ui-theme` | `type:util` | App-shell design tokens only |

## Module boundaries — the point of the split

`@nx/enforce-module-boundaries` in [eslint.config.mjs](../../../eslint.config.mjs):

```
type:app     → may import  type:feature, type:util
type:feature → may import  type:util  ONLY
type:util    → may import  type:util
```

**One mini-app cannot import another.** A cross-feature import is a lint error,
not a warning. If you find yourself wanting one:

- Duplicate the small thing into the consuming lib (correct default here — these
  are independent apps and duplication is cheaper than coupling), **or**
- If it is genuinely a site-shell token/primitive, promote it to `ui-theme`
  (`type:util`) — but `ui-theme` is deliberately *only* the shell palette and
  fonts, **not** a merged cross-app theme. Each mini-app keeps its own brand.

The app's legacy convenience aliases `components/**` and `images/**` are
**allow-listed** in the rule (`allow: [...]`) because they are in-app imports,
not project boundaries. Nx's `allow` uses `/**` for any-depth matching (`/*` is
one segment only).

## Path aliases live in THREE places — keep them in sync

Adding `@my-portfolio/<name>` means editing **all three**:

1. [tsconfig.json](../../../tsconfig.json) — for Next + `tsc`
2. [tsconfig.base.json](../../../tsconfig.base.json) — read by the boundary rule
   to resolve the alias to a project
3. [jest.config.js](../../../jest.config.js) `moduleNameMapper`

Miss one and the failure is confusing: miss (2) and the boundary rule silently
stops enforcing; miss (3) and only Jest breaks.

**App aliases** (`components/*`, `images/*`) go in **`tsconfig.json` + jest
only**. Putting them in `tsconfig.base.json` would make the boundary rule treat
every in-app import as a project hop and flag it.

## Lib layout

```
libs/<name>/
  src/index.ts        # public API barrel — the ONLY import surface
  src/lib/            # implementation: index.tsx, styles.ts, Reducer.ts, Helpers/, ...
  src/lib/index.test.tsx   # co-located spec (imports RELATIVELY: './index')
  project.json        # tags + lint (+ typecheck for TS) targets
  tsconfig.json       # strict, extends ../../tsconfig.base.json
  package.json        # ONLY when { "sideEffects": false } is needed
  README.md
```

Rules:

- **`src/index.ts` is the entire public surface.** Never reach into another
  project's `src/lib/`.
- Specs import the lib **relatively** (`./index`, `./state`) so the boundary
  rule doesn't flag a self-import through the alias.
- Sub-components get their own folder with `index.tsx` + `styles.ts`.

## Routing: pages → libs

```tsx
// pages/timer.tsx
import Timer from '@my-portfolio/timer';

export default Timer;
```

That is the whole file. When adding behavior, **edit the lib, not the page**.
The only things a page may legitimately add are a route-scoped `<Head>` override
(see `pages/mohangpt.tsx`) and data fetching (`getStaticProps` in
`pages/index.tsx`).

## State management

- **Redux — qiibee only.** The **lib owns its slice**: reducer, actions, and
  domain types live in `libs/qiibee/src/lib/state/`, and the barrel exports
  `qiibeeReducer`. The **app composes** it in
  [pages/_app.tsx](../../../pages/_app.tsx) via `configureStore` +
  `next-redux-wrapper`. That is an app→feature dependency — the correct
  direction. There is no `store/` folder.
  Immutability and serializability checks are **off** because the legacy reducer
  mutates in place; leave that alone unless you are rewriting the reducer.
- **Everything else** uses `useReducer` / `useState`.
- **The `...Copy` pattern** (Haptik, Taikai, Fynd, Appbase): the reducer keeps an
  untouched copy of the original list and derives filtered/sorted views from it,
  so search/sort/reset never lose data. Match it when editing those reducers.

## Styling & SSR

- **styled-components** with a colocated `styles.ts` per lib/sub-component.
  SSR via `ServerStyleSheet` in [pages/_document.tsx](../../../pages/_document.tsx).
  SWC handles the transform (`compiler.styledComponents` in `next.config.js`) —
  **there is no `.babelrc`**; do not add one, it disables SWC.
- **antd 6** (CSS-in-JS) — styles extracted server-side in `_document.tsx` via
  `@ant-design/cssinjs` (`createCache` + `extractStyle` + `StyleProvider`).
- **GlobalStyles** paints `body` white for every page. The dark landing pages
  own their own background locally rather than changing the global — the
  mini-apps must stay light.
- **amCharts v5** loads from a **CDN** via `<script>` tags injected in the
  `_document` head (`index.js` → `am5`, `xy.js` → `am5xy`, plus the Animated
  theme), used as untyped globals in
  [libs/weather-app/src/lib/Graph/index.tsx](../../../libs/weather-app/src/lib/Graph/index.tsx).
  Consequence: chart pages depend on that CDN at runtime, and **headless tooling
  tends to block on it** — expect timeouts when screenshotting `/weather-app`.

## Barrels & tree-shaking

Multi-entry libs — **qiibee** (5 page components) and **appbase** (2) — carry a
`package.json` with `{ "sideEffects": false }` so each Next page bundles only
the component it imports. Without it, every page pulls the whole barrel.

**If you add a second export to a single-entry lib's barrel, add that
`package.json`.**

## CI

[.github/workflows/ci.yml](../../../.github/workflows/ci.yml) runs
`pnpm nx affected -t lint typecheck testc build` on PRs (via `nrwl/nx-set-shas`),
so only projects a change touches get checked. `defaultBase` is `master`.

## Adding a new lib — extraction recipe

1. `git mv components/<Feature>` → `libs/<name>/src/lib` (relative imports survive).
2. Barrel `src/index.ts` — single default, or named exports for a multi-page lib
   (then add `package.json` with `sideEffects: false`).
3. `project.json` — tags `["scope:<name>", "type:feature"]` + `lint` and (TS)
   `typecheck` targets. Copy `libs/haptik/project.json` as the template.
4. Per-lib `tsconfig.json` extending `../../tsconfig.base.json` (strict).
5. Alias in **tsconfig.json + tsconfig.base.json + jest.config.js**.
6. Redirect the page(s) to `import … from '@my-portfolio/<name>'`.
7. Add a co-located `src/lib/index.test.tsx` (at minimum a mount smoke test).
8. `README.md` — follow the shape of
   [libs/haptik/README.md](../../../libs/haptik/README.md): what it is, usage,
   public API, tests, targets.
9. Verify: `pnpm nx lint <name>` · `pnpm nx typecheck <name>` · `pnpm testc` ·
   `pnpm build`.

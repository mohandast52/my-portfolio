# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
yarn dev          # Start Next.js dev server (http://localhost:3000)
yarn build        # Production build
yarn start        # Serve the production build
yarn lint         # ESLint over the whole repo (airbnb + jest/all rulesets)
yarn testc        # Run Jest with coverage + verbose
```

There is no plain `test` script — use `yarn testc`. To run a single test file:

```bash
yarn jest tests/components/FriendsList/List/index.test.jsx
yarn jest -t "search filter works"   # run a single test by name
```

Note: only one test file exists ([tests/components/FriendsList/List/index.test.jsx](tests/components/FriendsList/List/index.test.jsx), which tests `components/Assignments/Haptik`). The `collectCoverageFrom` glob in [jest.config.js](jest.config.js) points at `components/FriendList/*`, a path that does not exist — coverage numbers will be empty until that glob is fixed.

## Architecture

This is a **Next.js 12 (Pages Router) portfolio + learning sandbox** — React 17, mostly `.jsx` with one stray `.ts` file. It is a collection of largely independent mini-apps (recruiter take-home assignments and UI/concept practice) stitched under one site. There is almost no shared domain logic between routes; treat each top-level feature as its own self-contained app.

### Routing and the pages → components convention
Files in [pages/](pages/) are thin and contain almost no logic — most just re-export a component (e.g. [pages/index.jsx](pages/index.jsx) is `export default Portfolio`). **All real code lives in [components/](components/).** Each feature is a folder following the convention:

```
ComponentName/
  index.jsx     # the component
  styles.jsx    # its styled-components
  Reducer.jsx   # optional, when the component uses useReducer
  Helpers/      # optional dummy data, icons, theme
```

When adding behavior, edit the component folder, not the page.

### Two-tier state management
- **Global (Redux):** wired once in [pages/_app.jsx](pages/_app.jsx) via `next-redux-wrapper` → [store/index.js](store/index.js). Only the **`qiibee`** slice is combined into the root reducer and actually used (loyalty-points app with customer/brand user types, acting on in-memory `dummyData`). A `blocpal` slice exists in [store/](store/) but is **not** wired into `combineReducers` — ignore it unless asked.
- **Local (per-feature):** every other interactive app uses `useReducer`/`useState` locally — there is no global store involvement. The assignment reducers (Haptik, Taikai, Fynd, Appbase) share a recurring pattern: keep an untouched copy of the original list (`...Copy`) and derive the filtered/sorted view from it, so search/sort/reset never lose data.

### Styling (three layers, all active)
- **styled-components** is the primary system — colocated `styles.jsx` per component. SSR is handled in [pages/_document.jsx](pages/_document.jsx) via `ServerStyleSheet`, with `babel-plugin-styled-components` (`ssr: true`) in [.babelrc](.babelrc).
- **Ant Design** is loaded on-demand via `babel-plugin-import` + `next-plugin-antd-less` ([next.config.js](next.config.js)); LESS with `javascriptEnabled` is configured for antd theming.
- **Global CSS** comes from [components/GlobalStyles/](components/GlobalStyles/) and [pages/styles.less](pages/styles.less). Google Fonts and **amCharts v4 CDN `<script>` tags** are injected from `_document.jsx` head.

### Module path aliases (defined in TWO places — keep them in sync)
Imports like `components/...`, `store/...`, `util/...`, `images/...` are not relative paths. They are resolved by:
- [.babelrc](.babelrc) → `babel-plugin-module-resolver` (this is what actually resolves at build/runtime): `util`, `common-util`, `components`, `images` (→ `public/images`), `store`.
- [jsconfig.json](jsconfig.json) → editor IntelliSense only: `common-util`, `components`, `util`, `static`, `images`.

The two lists differ (`.babelrc` has `store`; `jsconfig.json` has `static`). When adding a new alias, update `.babelrc` for it to work and `jsconfig.json` for the editor. ESLint's `import/no-unresolved` is configured in [.eslintrc.json](.eslintrc.json) to ignore these aliases.

### Animation
The landing page ([components/Portfolio/Pages/Home.jsx](components/Portfolio/Pages/Home.jsx)) uses a **GSAP timeline** for the intro overlay; the overlay component is unmounted via React state once the animation completes so it stops blocking interaction.

## Conventions and gotchas
- ESLint extends `airbnb` + `plugin:jest/all`. Notable overrides: `arrow-parens: as-needed` (single-arg arrows have no parens), `react/jsx-props-no-spreading: off`, `react/react-in-jsx-scope: off`. Match existing style — `eslint:recommended`/airbnb are strict, so run `yarn lint` before considering work done.
- A live **OpenWeatherMap API key is hardcoded** in [components/WeatherApp/index.jsx](components/WeatherApp/index.jsx). If touching that file, move it to an env var rather than copying the literal.
- `package.json` lists `ethers`, `@web3-react/core`, and `@walletconnect/*` but no code uses them — they are vestigial. Don't assume Web3 functionality exists.
- The qiibee store uses the consistent misspellings `reedeemed_points` / `reedeem_points` throughout — match them when editing that slice so lookups keep working.

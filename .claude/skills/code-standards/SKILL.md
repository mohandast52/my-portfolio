---
name: code-standards
description: The non-negotiable coding rules for my-portfolio — no `any`, the comment style, ESLint 10 flat-config rules, React 19 patterns, the co-located test convention, conventional-commit format, git hygiene, and the verification gate that must pass before anything is called done. Load before writing or reviewing any TypeScript/React code, before committing, or when deciding how to type a dynamic value.
---

# Code standards

## Typing — never `any`

**`any` is banned.** Model the real types.

- Define interfaces for domain data. The reference example is the qiibee
  `Customer` / `Brand` model in
  [libs/qiibee/src/lib/state/types.ts](../../../libs/qiibee/src/lib/state/types.ts).
- For a genuinely dynamic value use **`unknown` plus a narrow typed assertion**
  (`x as SomeType`) — never `any`.
- The hand-written qiibee reducer stays RTK-compatible by typing its action as
  `{ type: string; data?: unknown }` and casting `data` **per case**; narrow
  `currentUser` with `as Customer` / `as Brand` where the action implies the
  variant.
- Third-party / legacy boundaries (e.g. the amCharts CDN globals) get a
  **documented, narrow assertion** with a comment saying why — not `any`.

Every lib typechecks under `strict: true`. `pnpm nx typecheck <lib>`.

## Comment style

This repo comments **why**, not what — and it does so generously at the top of
non-obvious files. Match it. The house voice is a short prose paragraph above
the declaration, wrapped at ~80 columns, explaining the constraint that forced
the code to look this way:

```ts
// The tokens are CSS custom properties applied to the lib's root element rather
// than to <html>, so they stay scoped to MohanGPT and cannot leak into the rest
// of the site. Children read them as var(--token).
```

```ts
/* Spec value was #707070, which measures 3.87:1 on --panel — under the 4.5:1
   AA floor for the small text it carries. Nudged to the lightest value that
   clears AA against all three surfaces. */
```

Config files carry the same treatment — see the `"//"` key in
`tsconfig.base.json` and the block comments throughout `eslint.config.mjs` and
`jest.config.js`. **When you work around a version-specific bug, write down
which version and what broke.** That is the single most valuable comment class
in this repo.

Do not add narration comments (`// set the state`, `// map over items`).

## Lint — ESLint 10 flat config

Run `pnpm lint` (whole repo) or `pnpm nx lint <project>`.

House rules that will bite you:

- **`arrow-parens: as-needed`** — `x => x`, not `(x) => x`.
- **`react/require-default-props: { functions: 'defaultArguments' }`** — use
  default parameters, not `defaultProps` (removed in React 19):
  `const Reveal = ({ children, delay = 0, className = undefined }: Props) => …`
- **`@typescript-eslint/no-unused-vars`** with `^_` ignore pattern; the base
  `no-unused-vars` is off for `.ts/.tsx` (it misreads type-level param names).

The config itself has three ESLint-10 landmines already handled — **do not
"clean them up"**:

1. `settings.react.version` is pinned to `'19'`; `eslint-plugin-react`'s version
   *detection* calls the removed `context.getFilename()` and crashes.
2. The `@typescript-eslint` plugin is **not** re-declared — `eslint-config-next`
   registers it, and redefining a plugin is a hard error in ESLint 10.
3. Plain **JS** files are pointed at our `@typescript-eslint/parser` too; the
   copy bundled with `eslint-config-next` predates `scopeManager.addGlobals`.

Needs `@typescript-eslint` ≥ 8.63 (first version peering ESLint 10).

## React 19 patterns

- Function components, arrow-function style, default export from `index.tsx`.
- Default parameters over `defaultProps`.
- Hooks: return a cleanup from every `useEffect` that subscribes/observes.
  See [components/Portfolio/reveal.tsx](../../../components/Portfolio/reveal.tsx)
  for the house pattern — SSR-safe (starts hidden, no `window` on the server),
  `prefers-reduced-motion` respected, `IntersectionObserver` feature-detected,
  observer disconnected on cleanup, and a `requestAnimationFrame` deferral so a
  synchronous `setState`-in-effect never happens.
- `prop-types` is still a dependency for legacy JS components; **don't add new
  `prop-types` usage** — new code is TypeScript and types its props with an
  `interface`.

## Tests

Co-located as `libs/<name>/src/lib/index.test.tsx`, discovered by one root Jest.

- Specs are **TypeScript** (`.tsx`): import jest globals from `@jest/globals`
  and load matcher types with `import '@testing-library/jest-dom/jest-globals'`.
  The per-lib `tsconfig` includes `.tsx`, so **`nx typecheck` type-checks the
  specs too** — a sloppy test breaks the typecheck target.
- Import the lib **relatively** (`./index`), not through its alias.
- Drive components through `data-testid` attributes and user-visible behaviour
  (`@testing-library/user-event`), not implementation details.
- **Every feature lib has at least a mount smoke test.** New lib → new spec.
- `weather-app` / `valory` install a **never-resolving `fetch` stub** (jsdom has
  no `fetch`) so they stay in their loading state instead of hitting the network
  or the amCharts CDN global. Copy that approach for any network-touching lib.
- Coverage is scoped to `haptik` only — that is intentional, not an oversight.

```bash
pnpm testc                                   # coverage + verbose + --forceExit
pnpm jest libs/haptik/src/lib/index.test.tsx # single file
pnpm jest -t "search filter works"           # by name
```

`--forceExit` is required: the `MessageChannel` polyfill in `jest.setup.js` uses
`worker_threads`, whose handle React's scheduler keeps alive.

## Naming & conventions

- Directories: `PascalCase` for component folders (`List/`, `Pagination/`,
  `Helpers/`), lowercase-kebab for lib names (`mohan-gpt`, `solid-principles`).
- Files: `index.tsx` (component), `styles.ts` (styled-components),
  `types.ts`, `Reducer.ts`, `content.ts` (static copy), `tokens.ts`.
- Styled-components use **transient props** (`$shown`, `$delay`) so they don't
  leak to the DOM.
- **Preserve existing misspellings.** The qiibee slice uses
  `reedeemed_points` / `reedeem_points` consistently — match them or lookups
  break. Same for any other established-but-odd identifier.

## Commits

**Conventional commits**, lowercase scope, imperative, no trailing period:

```
feat(mohan-gpt): add MohanGPT interactive résumé at /mohangpt
fix(weather-app): correct temperature units (Kelvin -> Celsius/Fahrenheit)
refactor(theme): extract app-shell colors into a ui-theme util lib; drop util/
chore(deps): safe patch/minor bumps (dev tooling + patches)
build: migrate package manager from yarn to pnpm
test: co-locate specs inside their libs (drop the tests/ folder)
```

Types in use: `feat` `fix` `refactor` `chore` `build` `test` `docs`.
Scope is the lib or concern (`mohan-gpt`, `weather-app`, `deps`, `lint`, `theme`,
`security`, `portfolio`, `react`, `antd`). Omit the scope for repo-wide changes.

**Never add AI/Co-Authored-By attribution trailers** to commits or PR bodies.
All commits are authored as the repo owner.

## Git hygiene

- **Never `git add -A` / `git add .`** — stage explicitly by path.
  `components/TypescriptLearning/` is a personal sandbox that must stay
  untracked, and `/.plans` is gitignored.
- Branch off `master`; the current working branch is `mohan/dev`.
- Keep changes focused — one concern per commit/PR. Don't bundle a dependency
  bump with a feature.

## The verification gate

**Never report "done" on a guess.** Run the checks and confirm they pass:

```bash
nvm use                       # ⚠️ FIRST — Nx needs Node 20+; default shell may be older
pnpm lint
pnpm nx typecheck <lib>       # or: pnpm nx run-many -t typecheck
pnpm testc
pnpm build
```

Or scope it the way CI does:

```bash
pnpm nx affected -t lint typecheck testc build
```

If something failed or you skipped it, **say so plainly** in the summary. A
partial run reported as green is worse than no run at all.

## Refactoring

Type-tightening, renames, and extractions **must not change runtime behavior**.
If the "correct" type would force a behavior change, prefer a documented
assertion and flag the finding — don't silently change the logic.

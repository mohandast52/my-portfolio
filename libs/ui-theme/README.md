# ui-theme

Shared design tokens for the portfolio **app shell** — the `COLOR` palette used
by the `Portfolio` landing page, `Layout`, and `GlobalStyles`.

Tagged `type:util`, so both the app and feature libs may import it via
`@my-portfolio/ui-theme` (the first — and currently only — util lib in the
workspace). Each mini-app under `libs/*` keeps its **own** brand palette; this
lib is deliberately just the site-shell tokens, **not** a merged cross-app theme.

## Usage

```ts
import { COLOR } from '@my-portfolio/ui-theme';
```

## Targets

```bash
pnpm nx lint ui-theme
pnpm nx typecheck ui-theme
```

# plaza

A self-contained mini-app: a virtual meeting card (Plaza assignment). It walks
through a three-step flow — an email/password join form with debounced email
autocomplete, a meeting-details confirmation, and a confirmed/reschedule screen.
Authored in TypeScript.

## Usage

```tsx
import Assignment from '@my-portfolio/plaza';
```

Rendered by [pages/plaza.jsx](../../pages/plaza.jsx).

## Public API

Only `src/index.ts` is the public surface. Everything under `src/lib/` is
internal — import the package, don't reach into `lib/`. The `part-*.ts` files
under `src/lib/` are standalone exercise answers kept alongside the component.

## Targets

```bash
pnpm nx lint plaza
pnpm nx typecheck plaza
```

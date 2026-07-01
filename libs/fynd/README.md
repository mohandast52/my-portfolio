# fynd

A self-contained mini-app: a searchable multi-select dropdown assignment.
Renders two dropdowns over in-memory options — one searchable, one not — with
a `useReducer`-driven checklist (search filter, per-item and select-all checks).
Authored in TypeScript as part of the incremental Nx migration.

## Usage

```tsx
import Fynd from '@my-portfolio/fynd';
```

Rendered by [pages/assignment/fynd.jsx](../../pages/assignment/fynd.jsx).

## Public API

Only `src/index.ts` is the public surface. Everything under `src/lib/` is
internal — import the package, don't reach into `lib/`.

## Targets

```bash
pnpm nx lint fynd
pnpm nx typecheck fynd
```

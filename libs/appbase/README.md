# appbase

A self-contained assignment lib with two independent screens:

- **Appbase** — a data-list / search widget (single- or multi-select, optional
  count, searchable, default-selected keys) driven by a `useReducer` state
  machine that keeps an untouched copy of the source list so search and reset
  never lose data.
- **Circles** — a timer-driven state-machine puzzle ("circles") that advances
  two locked color positions on each tick.

Authored in TypeScript.

## Usage

```tsx
import { Appbase, Circles } from '@my-portfolio/appbase';
```

Rendered by [pages/assignment/appbase.jsx](../../pages/assignment/appbase.jsx)
and [pages/assignment/circles.jsx](../../pages/assignment/circles.jsx).

## Public API

Only `src/index.ts` is the public surface — it re-exports both screens as the
named exports `Appbase` and `Circles`. Everything under `src/lib/` is internal;
import the package, don't reach into `lib/`.

## Targets

```bash
pnpm nx lint appbase
pnpm nx typecheck appbase
```

# haptik

A self-contained mini-app: a paginated, searchable friends list (mark
favourites, add/delete friends, sort by favourite). A recruiter take-home
assignment, now authored in TypeScript as part of the incremental Nx
migration. Exported as `FriendsList`.

## Usage

```tsx
import FriendsList from '@my-portfolio/haptik';
```

Rendered by [pages/friend-list.jsx](../../pages/friend-list.jsx).

## Public API

Only `src/index.ts` is the public surface — it re-exports the default
`FriendsList` component. Everything under `src/lib/` is internal (the
`List/`, `Pagination/`, `Helpers/`, and `Reducer` building blocks); import
the package, don't reach into `lib/`.

## Tests

Covered by a co-located Jest test at
[src/lib/index.test.tsx](src/lib/index.test.tsx), which imports the component
relatively (`./index`) and drives it via its `data-testid` attributes (search,
sort, add, pagination). Run the suite centrally with `pnpm testc`.

## Targets

```bash
pnpm nx lint haptik
pnpm nx typecheck haptik
```

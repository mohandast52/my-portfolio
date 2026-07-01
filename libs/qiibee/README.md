# qiibee

A loyalty-points mini-app (customer + brand dashboards, sign in / sign up) — the
only feature wired into the global Redux store. Extracted into an Nx library
(TypeScript) that **owns its redux slice** (`src/lib/state/`) and exports the
`qiibeeReducer` for the app to compose (see the Redux note below).

## Usage

The lib exposes one connected component per Next page:

```tsx
import {
  QiibeeAssignment, // pages/qiibee
  QiibeeBrand,      // pages/qiibee/brand-dashboard
  QiibeeCustomer,   // pages/qiibee/customer-dashboard
  QiibeeSignIn,     // pages/qiibee/login
  QiibeeSignUp,     // pages/qiibee/signup
} from '@my-portfolio/qiibee';
```

## Redux note

This lib **owns its redux slice** — the reducer, action creators, and domain
types (`Customer` / `Brand`) live in [src/lib/state/](src/lib/state/), and the
barrel exports `qiibeeReducer`. The app **composes** it in `store/index.ts` (RTK
`configureStore` + `next-redux-wrapper`) — an app→feature dependency, the correct
direction. Immutability / serializability checks are disabled there because the
legacy reducer mutates state in place.

## Targets

```bash
pnpm nx lint qiibee
pnpm nx typecheck qiibee
```

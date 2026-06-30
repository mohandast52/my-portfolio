# qiibee

A loyalty-points mini-app (customer + brand dashboards, sign in / sign up) — the
only feature wired into the global Redux store. Extracted into an Nx library and
now authored in TypeScript. The redux **slice** stays app-level (see the Redux
note below); the lib's connected components are pragmatically typed (component
props get an `interface`; the redux `state`/`dispatch` are typed as `any`).

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

The redux **slice** (`store/qiibee`) and store composition (`store/index.js`,
`next-redux-wrapper`) intentionally stay app-level — that is the integration
boundary. This lib's connected components dispatch action creators imported from
`store/qiibee/actions`, which is allow-listed in the module-boundary rule.

## Targets

```bash
pnpm nx lint qiibee
pnpm nx typecheck qiibee
```

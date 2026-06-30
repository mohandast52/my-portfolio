# qiibee

A loyalty-points mini-app (customer + brand dashboards, sign in / sign up) — the
only feature wired into the global Redux store. Extracted into an Nx library;
still authored in JSX (a TypeScript conversion is a follow-up).

## Usage

The lib exposes one connected component per Next page:

```jsx
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
```

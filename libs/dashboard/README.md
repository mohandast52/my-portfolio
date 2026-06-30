# dashboard

A static admin/dashboard UI (left/top nav, project-detail cards with charts,
client messages). Self-contained and API-less. Extracted into an Nx library and
authored in TypeScript (`.tsx` components, `.ts` styles/helpers).

```tsx
import Dashboard from '@my-portfolio/dashboard';
```

Rendered by [pages/dashboard.jsx](../../pages/dashboard.jsx); also a smoke-test target.

```bash
pnpm nx lint dashboard
pnpm nx typecheck dashboard
```

# dashboard

A static admin/dashboard UI (left/top nav, project-detail cards with charts,
client messages). Self-contained and API-less. Extracted into an Nx library;
still authored in JSX (a TypeScript conversion is a follow-up).

```jsx
import Dashboard from '@my-portfolio/dashboard';
```

Rendered by [pages/dashboard.jsx](../../pages/dashboard.jsx); also a smoke-test target.

```bash
pnpm nx lint dashboard
```

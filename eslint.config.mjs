import js from '@eslint/js';
import nextCoreWebVitals from 'eslint-config-next/core-web-vitals';
import jest from 'eslint-plugin-jest';
import nx from '@nx/eslint-plugin';
import tsParser from '@typescript-eslint/parser';

const config = [
  {
    ignores: [
      '**/.next/**',
      '.nx/**',
      'out/**',
      'coverage/**',
      'components/TypescriptLearning/**',
    ],
  },
  js.configs.recommended,
  // Next's recommended rules + the react/react-hooks/jsx-a11y/import plugins.
  // eslint-config-next 16 ships a native flat-config array — spread it directly
  // (no more FlatCompat bridge; it choked on the new circular-ref config shape).
  ...nextCoreWebVitals,
  {
    // eslint-config-next sets `react.version: 'detect'`, and eslint-plugin-react's
    // detection calls the deprecated `context.getFilename()` — removed in ESLint 10,
    // so it crashes. Pin the version explicitly to skip detection entirely.
    settings: { react: { version: '19' } },
    rules: {
      'arrow-parens': ['error', 'as-needed'],
      // We migrated to default parameters in the React 19 phase; accept those.
      'react/require-default-props': ['error', { functions: 'defaultArguments' }],
    },
  },
  // Nx module boundaries: each mini-app is its own project (tagged in its
  // project.json). The app may import feature libs; a feature lib may only
  // depend on util libs — never another feature — so the mini-apps stay
  // isolated from each other. Tags grow as more libs are extracted.
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    plugins: { '@nx': nx },
    rules: {
      '@nx/enforce-module-boundaries': ['error', {
        // The app's legacy root aliases are in-app imports, not project
        // boundaries; exempt them from the "use relative within a project" nag.
        // Nx allow uses /** for any-depth prefix matching (/* is one segment).
        allow: ['components/**', 'images/**'],
        depConstraints: [
          { sourceTag: 'type:app', onlyDependOnLibsWithTags: ['type:feature', 'type:util'] },
          { sourceTag: 'type:feature', onlyDependOnLibsWithTags: ['type:util'] },
          { sourceTag: 'type:util', onlyDependOnLibsWithTags: ['type:util'] },
        ],
      }],
    },
  },
  // TypeScript: the base no-unused-vars misreads type-level parameter names
  // (e.g. `fn: (acc, item) => number`) as unused vars. Turn it off in favour of
  // the TS-aware rule for .ts/.tsx. The @typescript-eslint plugin + parser are
  // already registered by eslint-config-next (redefining the plugin is a hard
  // error under ESLint 10), so we only add rule tweaks here.
  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: { parser: tsParser },
    rules: {
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_', varsIgnorePattern: '^_' }],
    },
  },
  // eslint-config-next also applies @typescript-eslint/parser to plain JS, but
  // its bundled copy predates ESLint 10's scopeManager.addGlobals API. Point JS
  // at our ESLint-10-compatible parser (8.63) too.
  {
    files: ['**/*.{js,jsx,mjs,cjs}'],
    languageOptions: { parser: tsParser },
  },
  // jest rules only apply to test files (co-located in each lib) + the jest setup.
  {
    files: ['**/*.test.{js,jsx,ts,tsx}', 'jest.setup.js'],
    ...jest.configs['flat/recommended'],
  },
];

export default config;

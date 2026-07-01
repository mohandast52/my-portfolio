import js from '@eslint/js';
import { FlatCompat } from '@eslint/eslintrc';
import jest from 'eslint-plugin-jest';
import nx from '@nx/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import tsPlugin from '@typescript-eslint/eslint-plugin';

const compat = new FlatCompat({ baseDirectory: import.meta.dirname });

const config = [
  {
    ignores: [
      '**/.next/**',
      '.nx/**',
      'out/**',
      'coverage/**',
      'components/TypescriptLearning/**',
      'JS/**',
    ],
  },
  js.configs.recommended,
  // Next's recommended rules + the react/react-hooks/jsx-a11y/import plugins,
  // brought in via FlatCompat (eslint-config-next 15 is still eslintrc-shaped).
  ...compat.extends('next/core-web-vitals'),
  {
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
        allow: ['components/**', 'util/**', 'images/**'],
        depConstraints: [
          { sourceTag: 'type:app', onlyDependOnLibsWithTags: ['type:feature', 'type:util'] },
          { sourceTag: 'type:feature', onlyDependOnLibsWithTags: ['type:util'] },
          { sourceTag: 'type:util', onlyDependOnLibsWithTags: ['type:util'] },
        ],
      }],
    },
  },
  // TypeScript: the base no-unused-vars misreads type-level parameter names
  // (e.g. `fn: (acc, item) => number`) as unused vars. Use the TS-aware rule
  // for .ts/.tsx (eslint-config-next only scopes its TS overrides to root *.ts).
  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: { parser: tsParser },
    plugins: { '@typescript-eslint': tsPlugin },
    rules: {
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_', varsIgnorePattern: '^_' }],
    },
  },
  // jest rules only apply to test files + the jest setup.
  {
    files: ['tests/**/*.{js,jsx}', '**/*.test.{js,jsx}', 'jest.setup.js'],
    ...jest.configs['flat/recommended'],
  },
];

export default config;

import js from '@eslint/js';
import { FlatCompat } from '@eslint/eslintrc';
import jest from 'eslint-plugin-jest';

const compat = new FlatCompat({ baseDirectory: import.meta.dirname });

const config = [
  {
    ignores: [
      '.next/**',
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
  // jest rules only apply to test files + the jest setup.
  {
    files: ['tests/**/*.{js,jsx}', '**/*.test.{js,jsx}', 'jest.setup.js'],
    ...jest.configs['flat/recommended'],
  },
];

export default config;

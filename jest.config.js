module.exports = {
  // Jest 27 changed the default test environment to "node"; React Testing
  // Library needs a DOM, so restore jsdom explicitly.
  testEnvironment: 'jsdom',
  verbose: true,
  collectCoverageFrom: [
    'libs/haptik/src/lib/**/*.{js,jsx,ts,tsx}',
    '!libs/haptik/src/lib/**/styles.{js,jsx,ts,tsx}',
    // Co-located specs are test code, not sources to measure.
    '!libs/haptik/src/lib/**/*.test.{js,jsx,ts,tsx}',
  ],
  setupFilesAfterEnv: ['./jest.setup.js'],
  // .babelrc was removed so Next can use SWC; give Jest its own babel transform.
  // sourceType:'unambiguous' lets babel detect + rewrite the bare ESM `import`s
  // in the node_modules deps we un-ignore below (they ship ESM from a CJS entry).
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': ['babel-jest', { presets: ['next/babel'], sourceType: 'unambiguous' }],
  },
  // @ant-design/icons 6.3.x (and its @ant-design/fast-color dep) ship bare ESM
  // `import` statements from their CJS entry, which the default "ignore all of
  // node_modules" rule leaves untransformed → "Cannot use import statement
  // outside a module" when any antd component mounts under Jest. Un-ignore just
  // those two (pnpm nests real files under .pnpm/<pkg>@<ver>/) so babel-jest
  // transpiles their ESM to CJS.
  transformIgnorePatterns: [
    '/node_modules/\\.pnpm/(?!@ant-design\\+)',
  ],
  moduleNameMapper: {
    // antd injects .less/.css requires Jest can't parse; stub them.
    '\\.(less|css|scss|sass)$': '<rootDir>/jest/styleMock.js',
    // Path aliases (previously babel-plugin-module-resolver, now jsconfig paths).
    // Nx libs use a scoped alias; keep this in sync with jsconfig.json.
    '^@my-portfolio/weather-app$': '<rootDir>/libs/weather-app/src/index.ts',
    '^@my-portfolio/valory$': '<rootDir>/libs/valory/src/index.ts',
    '^@my-portfolio/qiibee$': '<rootDir>/libs/qiibee/src/index.ts',
    '^@my-portfolio/timer$': '<rootDir>/libs/timer/src/index.ts',
    '^@my-portfolio/solid-principles$': '<rootDir>/libs/solid-principles/src/index.ts',
    '^@my-portfolio/dashboard$': '<rootDir>/libs/dashboard/src/index.ts',
    '^@my-portfolio/cogsy$': '<rootDir>/libs/cogsy/src/index.ts',
    '^@my-portfolio/taikai$': '<rootDir>/libs/taikai/src/index.ts',
    '^@my-portfolio/fynd$': '<rootDir>/libs/fynd/src/index.ts',
    '^@my-portfolio/haptik$': '<rootDir>/libs/haptik/src/index.ts',
    '^@my-portfolio/plaza$': '<rootDir>/libs/plaza/src/index.ts',
    '^@my-portfolio/appbase$': '<rootDir>/libs/appbase/src/index.ts',
    '^@my-portfolio/ui-theme$': '<rootDir>/libs/ui-theme/src/index.ts',
    '^components/(.*)$': '<rootDir>/components/$1',
    '^images/(.*)$': '<rootDir>/public/images/$1',
  },
};

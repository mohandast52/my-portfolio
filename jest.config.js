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
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': ['babel-jest', { presets: ['next/babel'] }],
  },
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

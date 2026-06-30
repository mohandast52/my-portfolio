module.exports = {
  // Jest 27 changed the default test environment to "node"; React Testing
  // Library needs a DOM, so restore jsdom explicitly.
  testEnvironment: 'jsdom',
  verbose: true,
  collectCoverageFrom: [
    'components/Assignments/Haptik/**/*.{js,jsx}',
    '!components/Assignments/Haptik/**/styles.{js,jsx}',
  ],
  setupFilesAfterEnv: ['./jest.setup.js'],
  // .babelrc was removed so Next can use SWC; give Jest its own babel transform.
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': ['babel-jest', { presets: ['next/babel'] }],
  },
  moduleNameMapper: {
    // antd injects .less/.css requires Jest can't parse; stub them.
    '\\.(less|css|scss|sass)$': '<rootDir>/tests/__mocks__/styleMock.js',
    // Path aliases (previously babel-plugin-module-resolver, now jsconfig paths).
    // Nx libs use a scoped alias; keep this in sync with jsconfig.json.
    '^@my-portfolio/weather-app$': '<rootDir>/libs/weather-app/src/index.ts',
    '^@my-portfolio/valory$': '<rootDir>/libs/valory/src/index.ts',
    '^@my-portfolio/qiibee$': '<rootDir>/libs/qiibee/src/index.js',
    '^@my-portfolio/timer$': '<rootDir>/libs/timer/src/index.ts',
    '^@my-portfolio/solid-principles$': '<rootDir>/libs/solid-principles/src/index.ts',
    '^components/(.*)$': '<rootDir>/components/$1',
    '^util/(.*)$': '<rootDir>/util/$1',
    '^store$': '<rootDir>/store',
    '^store/(.*)$': '<rootDir>/store/$1',
    '^images/(.*)$': '<rootDir>/public/images/$1',
  },
};

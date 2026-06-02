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
    '^.+\\.(js|jsx)$': ['babel-jest', { presets: ['next/babel'] }],
  },
  moduleNameMapper: {
    // antd injects .less/.css requires Jest can't parse; stub them.
    '\\.(less|css|scss|sass)$': '<rootDir>/tests/__mocks__/styleMock.js',
    // Path aliases (previously babel-plugin-module-resolver, now jsconfig paths).
    '^components/(.*)$': '<rootDir>/components/$1',
    '^util/(.*)$': '<rootDir>/util/$1',
    '^store$': '<rootDir>/store',
    '^store/(.*)$': '<rootDir>/store/$1',
    '^images/(.*)$': '<rootDir>/public/images/$1',
  },
};

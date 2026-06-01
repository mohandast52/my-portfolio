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
  // antd + babel-plugin-import inject .less/.css requires that Jest can't parse;
  // stub them since tests assert behavior, not styles.
  moduleNameMapper: {
    '\\.(less|css|scss|sass)$': '<rootDir>/tests/__mocks__/styleMock.js',
  },
};

module.exports = {
  verbose: true,
  collectCoverageFrom: [
    'components/FriendList/*.{js,jsx}',
    '!components/FriendList/**/styles.{js,jsx}',
  ],
  setupFilesAfterEnv: ['./jest.setup.js'],
};

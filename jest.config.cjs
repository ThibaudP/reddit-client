// jest.config.cjs
module.exports = {
  testEnvironment: 'node', // Use 'jsdom' if testing frontend code
  transform: {
    '^.+\\.js$': 'babel-jest', // Use Babel for JavaScript files
  },
  setupFilesAfterEnv: ['jest-fetch-mock'], // Automatically enable fetch mocks
};
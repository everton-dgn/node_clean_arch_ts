const { resolve } = require('path')
const root = resolve(__dirname, '../..')
const rootConfig = require(`${root}/jest.config.js`)

module.exports = {
  ...rootConfig,
  ...{
    rootDir: root,
    displayName: 'unit-tests',
    setupFilesAfterEnv: ['<rootDir>/tests/setup.ts'],
    testMatch: ['<rootDir>/src/**/*.test.ts']
  }
}

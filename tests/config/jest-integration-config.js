const { resolve } = require('path')
const root = resolve(__dirname, '../..')
const rootConfig = require(`${root}/jest.config.js`)

module.exports = {
  ...rootConfig,
  ...{
    rootDir: root,
    displayName: 'integration-tests',
    setupFilesAfterEnv: ['<rootDir>/tests/setup.ts'],
    testMatch: ['<rootDir>/tests/**/*.spec.ts']
  }
}

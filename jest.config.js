const { resolve } = require('path')
const root = resolve(__dirname)

module.exports = {
  rootDir: root,
  clearMocks: true,
  displayName: 'root-tests',
  collectCoverage: true,
  testPathIgnorePatterns: ['/node_modules'],
  coverageReporters: ['json', 'lcov', 'text', 'clover', 'text-summary'],
  moduleDirectories: ['node_modules', '<rootDir>/'],
  setupFilesAfterEnv: ['<rootDir>/tests/setup.ts'],
  modulePaths: ['<rootDir>/src/', '<rootDir>/tests'],
  moduleNameMapper: {
    '@src/(.*)': '<rootDir>/src/$1',
    '@tests/(.*)': '<rootDir>/tests/$1'
  },
  // coveragePathIgnorePatterns: ['src/example'],
  collectCoverageFrom: ['src/**/*.ts'],
  moduleFileExtensions: ['ts', 'js', 'json', 'node'],
  testMatch: ['<rootDir>/src/**/*.test.ts', '<rootDir>/tests/**/*.spec.ts'],
  preset: 'ts-jest',
  transform: {
    '^.+\\.ts$': 'ts-jest'
  }
}

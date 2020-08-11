
module.exports = {
    transform: {
        '^.+\\.ts$': 'ts-jest'
    },
    moduleFileExtensions: ['ts', 'js'],
    testMatch: [
        '**/tests/**/*.test.(ts|js)'
    ],
    testEnvironment: 'node'
}
module.exports = {
    preset: 'ts-jest',
    // globalSetup: './src/tests/prepare.ts',
    testEnvironment: 'node',
    roots: ['<rootDir>/tests'],
    transform: {
        '^.+\\.tsx?$': 'ts-jest',
    }
};

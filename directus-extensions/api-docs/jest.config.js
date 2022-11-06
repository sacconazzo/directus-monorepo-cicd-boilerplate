const esModules = ['@directus/extensions-sdk', 'ngx-bootstrap'].join('|');

module.exports = {
    preset: 'ts-jest',
    // globalSetup: './src/tests/prepare.ts',
    testEnvironment: 'node',
    roots: ['<rootDir>/tests'],
    transform: {
        '^.+\\.(ts|tsx)?$': 'ts-jest',
        '^.+\\.(js|jsx)$': 'babel-jest',
    },
    transformIgnorePatterns: [`<rootDir>/node_modules/(?!${esModules})`],
    // moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, { prefix: '<rootDir>' }),
};

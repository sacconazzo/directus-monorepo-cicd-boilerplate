const { execSync } = require('child_process');
const fs = require('fs-extra');
const root = require('find-root')();

const fSource = `${root}/extensions`;
const fTemp = `${root}/_extensions`;

const disableExt = () => {
    fs.copySync(fSource, fTemp);
    fs.rmSync(fSource, { recursive: true, force: true });
};

const enableExt = () => {
    fs.copySync(fTemp, fSource);
    fs.rmSync(fTemp, { recursive: true, force: true });
};

try {
    disableExt();

    console.log('Preparing DB Directus');
    execSync('pnpm directus bootstrap', { stdio: 'inherit' });

    console.log('\nApply last Snapshot');
    execSync('pnpm run snapshot:apply', { stdio: 'inherit' });
} catch {
    enableExt();
    process.exit(1);
} finally {
    enableExt();
}

console.log('\nApply last Custom Migrations');
execSync('pnpm directus database migrate:latest', { stdio: 'inherit' });

console.log('\nDB ready!\n');

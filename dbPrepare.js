const { execSync } = require('child_process')
const fs = require('fs-extra')
const root = require('find-root')()

const fSource = `${root}/extensions/migrations`
const fTemp = `${root}/extensions/skippedMigrations`

fs.copySync(fSource, fTemp)
fs.rmSync(fSource, { recursive: true, force: true })

console.log('Preparing DB Directus')
execSync('pnpm directus bootstrap', { stdio: 'inherit' })

console.log('\nApply last Snapshot')
execSync('pnpm snapshot:apply', { stdio: 'inherit' })

fs.copySync(fTemp, fSource)
fs.rmSync(fTemp, { recursive: true, force: true })

console.log('\nApply last Custom Migrations')
execSync('pnpm directus database migrate:latest', { stdio: 'inherit' })

console.log('\nDB ready!\n')

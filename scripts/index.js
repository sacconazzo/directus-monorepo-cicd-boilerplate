require('dotenv-safe').config()

const { Command } = require('commander')
const program = new Command()
const { signature } = require('./bidjs')
const { migrate } = require('./migrate')

program.name('string-util').description('Directus & bidjs utilities').version('0.1.0')

program
  .command('migrate')
  .description('Create migration for a specific entity (upsert mode)')
  .option('-r, --role <uuid>|public', 'migrate a role (with all related permissions)')
  .action(migrate)

program.parse()

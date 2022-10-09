# DeAngelis Directus BackOffice and API

## Initialize

- create a new db
- configure .env file like .env.example

## CI/CD

- `pnpm db:prepare`
- `pnpm start`

## Others

- `pnpm snapshot:create` Create e new snapshot
- `pnpm db:prepare:check` Print-out the planned changes (only from snapshot, not migrations)

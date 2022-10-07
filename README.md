# DeAngelis Directus BackOffice and API

## Initialize

- create a new db
- configure .env file like .env.example

## CI/CD

- `yarn db:prepare`
- `yarn start`

## Others

- `yarn snapshot:create` Create e new snapshot
- `yarn db:prepare:check` Print-out the planned changes (only from snapshot, not migrations)

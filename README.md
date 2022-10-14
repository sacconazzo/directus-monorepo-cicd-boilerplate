# Directus BackOffice

## Initialize

- create a new db
- configure .env file like .env.example

## Installation and CI

Preparing db with Directus setup, snapshot and migrations & running service:

    pnpm start

Running service (no installation):

    pnpm start:only

## Utils CLI

Utilities scripts (create automatic migrations, ...):

    pnpm utils --help

## Others

Some scripts:

- `pnpm snapshot:create` Create e new snapshot
- `pnpm snapshot:check` Print-out the planned changes (only from snapshot, not migrations)

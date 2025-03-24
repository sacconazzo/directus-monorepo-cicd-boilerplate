# Back-end server with web interface (byDirectus)

a directus monorepo boilerplate focused on ci

## Running locally

### Initialize environment

- create a new db
- configure `.env` file like `.env.local` in `/directus` folder

### Installation commands

Build all packages:

```
pnpm build
```

Preparing db with Directus setup, snapshot and migrations & running service:

```
pnpm db:prepare
```

## Development

![workspace](workspace.png)

Running service (no installation) in watch mode:

```
pnpm dev
```

### Directus utils CLI

**Workdir `/directus`**

Utilities scripts (create roles migrations, translations, ...):

```
pnpm directus-x --help
```

### Others

Some scripts:

- `pnpm snapshot:create` Create e new snapshot
- `pnpm snapshot:check` Print-out the planned changes (only from snapshot, not migrations)

### Frontend package

**Workdir `/frontend`**

### Common libraries or utils

**Workdir `/packages/*`**

### Project packages graph

```
pnpm graph
```

## Running on docker

- default env_file for docker compose is `/directus/.env.test`

```
# docker compose --env-file ../yourpath up -d
docker compose up -d
```

## Demo

`origin/main` deployed to:

- https://directus.giona.tech credentials: demo@directus.giona.tech / demo
- https://directus-fe.giona.tech

FROM node:16.17.0-alpine3.16

RUN apk add --update --no-cache netcat-openbsd mysql-client ssmtp tzdata

RUN npm install -g pnpm
RUN npm install -g serve

WORKDIR /workspace

# Create data directories
RUN mkdir -p \
    directus/extensions \
    directus/uploads

COPY package.json .
COPY pnpm-*.yaml ./

COPY directus/package.json ./directus/
COPY directus-extensions/api-docs/package.json ./directus-extensions/api-docs/
COPY directus-extensions/endpoints-bids/package.json ./directus-extensions/endpoints-bids/
COPY directus-extensions/hooks-bids/package.json ./directus-extensions/hooks-bids/
COPY packages/bidjs-proxy/package.json ./packages/bidjs-proxy/
COPY packages/utilities/package.json ./packages/utilities/
COPY frontend/package.json ./frontend/

RUN pnpm install --prod

COPY . ./

RUN pnpm --parallel build

EXPOSE 8055 8080

CMD pnpm start:all

FROM node:16.17.0-alpine3.16

RUN apk add --update --no-cache netcat-openbsd mysql-client ssmtp tzdata

RUN npm install -g pnpm

WORKDIR /mono

# Create data directories
RUN mkdir -p \
    directus/database \
    directus/extensions \
    directus/uploads

COPY package.json .
COPY pnpm-*.yaml .

RUN pnpm install --prod

COPY . .

CMD pnpm start

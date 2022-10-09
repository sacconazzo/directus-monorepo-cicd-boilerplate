FROM node:16.17.0-alpine3.16

RUN apk add --update --no-cache netcat-openbsd mysql-client ssmtp tzdata

RUN npm install -g pnpm

<<<<<<< HEAD
RUN npm ci
RUN yarn db:prepare
=======
WORKDIR /directus
>>>>>>> master

# Create data directories
RUN mkdir -p \
    database \
    extensions \
    uploads

COPY package.json .
COPY pnpm-*.yaml .

RUN pnpm install --prod

COPY . .

CMD pnpm db:prepare && pnpm start

FROM node:20.16.0-alpine

RUN <<EOF
  apk --no-cache add python3 build-base make g++ gcc py3-setuptools py3-pip
  ln -sf /usr/bin/python3 /usr/bin/python
EOF

RUN npm install -g pnpm
RUN npm install -g serve

WORKDIR /workspace

RUN mkdir -p \
  directus/extensions \
  directus/uploads

COPY package.json .
COPY pnpm-*.yaml ./

COPY directus/package.json ./directus/
COPY directus/extensions/auctions/package.json ./directus/extensions/auctions/
COPY directus/extensions/auctions-hook/package.json ./directus/extensions/auctions-hook/
COPY packages/utilities/package.json ./packages/utilities/
COPY frontend/package.json ./frontend/

# RUN pnpm install --prod
RUN pnpm install

COPY . ./

RUN pnpm --parallel build

EXPOSE 8055 5000

CMD pnpm db:prepare && pnpm start

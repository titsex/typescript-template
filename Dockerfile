FROM node:23-slim AS base

ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
ENV PATH="./node_modules/.bin:$PATH"

RUN corepack enable

WORKDIR /typescript-template

COPY pnpm-lock.yaml /typescript-template
COPY package.json /typescript-template

FROM base AS dependencies

RUN pnpm install

FROM base

COPY --from=dependencies /typescript-template/node_modules /typescript-template/node_modules
COPY . /typescript-template

CMD ["pnpm", "start"]

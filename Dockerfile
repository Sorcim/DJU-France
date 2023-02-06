ARG NODE_IMAGE=node:18

FROM $NODE_IMAGE AS base
WORKDIR /app

FROM base AS dependencies
COPY ./package*.json ./
RUN npm ci
COPY . .

FROM dependencies AS build
RUN node ace build --production

FROM base AS production
ENV NODE_ENV=production
ENV PORT=$PORT
ENV HOST=$HOST
COPY ./package*.json ./
RUN npm ci --production
RUN node ace migration:run --force
COPY --from=build /app/build .
EXPOSE $PORT
CMD [ "node", "server.js" ]

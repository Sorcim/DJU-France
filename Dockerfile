FROM node:lts-alpine
COPY ./build /app
COPY ./.env.develop /build/.env
WORKDIR /app
RUN npm ci --production
EXPOSE 80
CMD ["node", "server.js"]

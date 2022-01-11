FROM node:lts-alpine
COPY ./build /app
WORKDIR /app
RUN npm ci
EXPOSE 80
RUN node ace scheduler:run
CMD ["node", "server.js"]

FROM node:lts-alpine
COPY ./build /app
WORKDIR /app
RUN npm ci
EXPOSE 80
CMD ["node", "server.js"]

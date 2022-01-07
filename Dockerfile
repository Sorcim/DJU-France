FROM node:lts-alpine
COPY ./build /app
WORKDIR /app
RUN npm ci --production
EXPOSE 80
CMD ["node", "server.js"]

FROM node:lts-alpine
COPY . /app
WORKDIR /app
RUN npm i
EXPOSE 80
CMD ["npm", "start"]

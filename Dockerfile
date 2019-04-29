FROM node:8.16.0-alpine

COPY hello-express.js package.json package-lock.json /app-express/

WORKDIR /app-express

RUN npm install

CMD ["node", "hello-express.js"]

EXPOSE 9090/tcp

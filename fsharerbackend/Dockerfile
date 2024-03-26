FROM node:20.11-bookworm

WORKDIR /app

COPY ./server.js /app/server.js
COPY ./package.json /app/package.json
COPY ./package-lock.json /package-lock.json

RUN npm install

CMD ["npm", "start"]

FROM node:20.11-bookworm

WORKDIR /app

COPY ./fsharerbackend/server.js /app/server.js
COPY ./fsharerbackend/package.json /app/package.json
COPY ./fsharerbackend/package-lock.json /package-lock.json

RUN npm install

CMD ["npm", "start"]

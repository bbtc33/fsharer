FROM node:20.11-bookworm

WORKDIR /app

COPY ./public /app/public
COPY ./src /app/src
COPY ./package.json /app/package.json
COPY ./package-lock.json /app/package-lock.json

RUN npm install

RUN npm install -g serve

RUN npm run build

CMD ["serve", "-s", "build"]

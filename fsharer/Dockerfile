FROM node:20.11-bookworm

WORKDIR /app

COPY ./fsharer/public /app/public
COPY ./fsharer/src /app/src
COPY ./fsharer/package.json /app/package.json
COPY ./fsharer/package-lock.json /app/package-lock.json

RUN npm install

RUN npm install -g serve

RUN npm run build

CMD ["serve", "-s", "build"]

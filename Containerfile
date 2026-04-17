FROM docker.io/library/node:22-alpine AS builder

ARG REPO_URL=https://github.com/calzoneman/sync.git

RUN apk add --no-cache git python3 make g++

WORKDIR /synchtube

RUN git clone --no-tags --single-branch --branch 3.0 --depth 1 "$REPO_URL" .

COPY config.yaml /synchtube/config.yaml

RUN npm install

RUN sh ./postinstall.sh


FROM node:22-alpine AS runtime

ARG DB_HOST=synchdb
ENV DB_HOST=$DB_HOST

WORKDIR /synchtube

COPY --from=builder /synchtube .

EXPOSE 8080 1337

RUN npm install wait-on

CMD ["sh", "-c", "npm exec wait-on -- tcp:$DB_HOST:3306 && exec node index.js"]

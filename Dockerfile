FROM node:16-alpine as builder

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

RUN npm install -g yarn
COPY . .
RUN yarn install
RUN yarn build


FROM node:16-alpine

RUN apk update && apk add --upgrade apk-tools && apk upgrade --available
RUN apk --no-cache add curl

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY --from=builder /usr/src/app/dist ./dist
COPY --from=builder /usr/src/app/node_modules ./node_modules
COPY --from=builder /usr/src/app/.env ./.env

ENV LISTEN_PORT=3000
ENV LISTEN_PORT_METRICS=8081
EXPOSE $LISTEN_PORT
EXPOSE $LISTEN_PORT_METRICS

ENV NODE_ENV=production

CMD [ "node", "dist/main" ]
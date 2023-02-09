FROM node:lts-alpine

WORKDIR /app

COPY . .

RUN yarn install --frozen-lockfile
RUN yarn build

CMD yarn serve -p $PORT
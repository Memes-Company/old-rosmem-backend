FROM node:14.2.0-alpine

WORKDIR /home/node/app
COPY package.json .
COPY yarn.lock .


RUN yarn install --production

COPY . .

RUN yarn build
CMD [ "yarn", "start:prod" ]
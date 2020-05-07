FROM node:14.2.0-alpine

COPY package.json /home/node/app/
COPY yarn.lock /home/node/app/

WORKDIR /home/node/app

RUN yarn

COPY . /home/node/app

RUN yarn build
CMD [ "yarn", "start:prod" ]
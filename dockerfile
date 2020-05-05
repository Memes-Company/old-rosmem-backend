#TODO: split on Builder and Api images
#TODO: run on latest NodeJS ?
FROM node:13-alpine

COPY package.json /home/node/app/
COPY yarn.lock /home/node/app/

WORKDIR /home/node/app

RUN yarn

COPY . /home/node/app

RUN yarn build
CMD [ "yarn", "start:prod" ]
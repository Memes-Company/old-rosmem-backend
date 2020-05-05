FROM node:alpine

COPY package.json /home/node/app/
COPY yarn.lock /home/node/app/

WORKDIR /home/node/app

RUN yarn

COPY . /home/node/app

RUN yarn build

CMD [ "node", "dist/main" ]
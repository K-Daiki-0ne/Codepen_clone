FROM node:latest
WORKDIR /usr/src/app
COPY package.json .
RUN yarn install
COPY . .
ENTRYPOINT [ "yarn", "start" ]
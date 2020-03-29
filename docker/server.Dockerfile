FROM node:12

RUN npm i -g nodemon
USER node
RUN mkdir /home/node/code
WORKDIR /home/node/code
COPY --chown=node:node package*.json ./

RUN npm ci
COPY --chown=node:node .. .
RUN npm run build

CMD ["nodemon", "server.js"]
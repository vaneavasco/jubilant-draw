FROM node:12

USER node
RUN mkdir /home/node/code
WORKDIR /home/node/code
COPY --chown=node:node package*.json ./

RUN npm ci
COPY --chown=node:node .. .

CMD ["npm", "run", "start:dev"]
FROM node:16
LABEL maintainer="Rohan Rustagi"
WORKDIR /node

COPY package*.json ./
COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 1234
CMD [ "npm", "run", "dev" ]
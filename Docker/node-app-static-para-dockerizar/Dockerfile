FROM node:latest

WORKDIR /mi-carpetita

COPY package*.json ./

RUN npm install

COPY . .

CMD ["node", "index.js"]

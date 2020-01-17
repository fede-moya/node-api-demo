FROM node:10-alpine

WORKDIR /node_app

COPY package.json .

RUN npm install

COPY . .

EXPOSE 3000

CMD ["node", "app.js"]

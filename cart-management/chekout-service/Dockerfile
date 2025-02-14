FROM node:18 AS build

WORKDIR /app

COPY package*.json ./

RUN npm install --only=production

COPY . .

EXPOSE 8087

CMD ["node", "src/server.js"]


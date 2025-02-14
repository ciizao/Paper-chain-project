FROM node:18

WORKDIR /app

COPY package*.json ./

RUN npm install --only=production

COPY . .

EXPOSE 5002

CMD ["node", "src/server.js"]


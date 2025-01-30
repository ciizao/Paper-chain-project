# Usar una imagen de Node.js como base
FROM node:18

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

ARG PORT=4000
ENV PORT=$PORT
EXPOSE $PORT

CMD ["node", "src/app.js"]

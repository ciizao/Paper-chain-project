FROM node:22

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install --omit=dev

COPY . .

EXPOSE ${PORT}

CMD ["npm", "run", "start"]

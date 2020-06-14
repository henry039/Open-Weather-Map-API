From node:10

RUN mkdir -p /app
WORKDIR /app

COPY package.json /app
COPY package-lock.json /app
RUN npm install

COPY . /app
RUN npm run build

# start the app
CMD ["npm", "start"]
EXPOSE 3000
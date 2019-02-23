
FROM node:10.15.0



# COPY package.json .

# RUN npm install

COPY . /

EXPOSE 3002

CMD [ "npm", "start" ]

FROM node:10.15.0

COPY . /

EXPOSE 3002

CMD [ "npm", "start" ]

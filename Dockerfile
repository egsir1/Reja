FROM node:16.9.0

COPY . /reja
WORKDIR /reja
CMD npm install && node server.js




# DOCKERFILE => DOCKER IMAGE => direct docker: CONTAINER
# DOCKERFILE => DOCKER IMAGE => docker-compose: CONTAINER
FROM node:carbon

WORKDIR /app

COPY . ./

RUN npm install sails@beta -g
RUN npm install

RUN apt-get update
RUN apt-get install -y vim

CMD ["/bin/bash","init.sh"]

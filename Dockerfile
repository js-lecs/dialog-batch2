FROM node:alpine
MAINTAINER nilesh.j@platformer.com

RUN npm install -g @angular/cli

RUN mkdir -p /var/www/dialog

WORKDIR /var/www/dialog

COPY . .

RUN rm -Rf node_modules

RUN npm install

RUN npm rebuild node-sass --force

EXPOSE 4200

CMD ["ng", "serve", "--host=\"0.0.0.0\""]
# node configuration
FROM node:18 as build

COPY ./yarn.lock /app/
COPY ./package.json /app/
COPY ./vite.config.js /app/
COPY ./src /app/src

WORKDIR /app
RUN yarn install
RUN yarn build

FROM nginx:latest

COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 8080

CMD ["nginx", "-g", "daemon off;"]

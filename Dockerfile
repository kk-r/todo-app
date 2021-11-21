# build stage
FROM node:lts-alpine as build-stage
ARG VUE_APP_API_BASE_URL
ENV VUE_APP_API_BASE_URL $VUE_APP_API_BASE_URL
ARG VUE_APP_NODE_ENV
ENV VUE_APP_NODE_ENV $VUE_APP_NODE_ENV
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build 

# production stage
FROM nginx:stable-alpine as production-stage
COPY --from=build-stage /app/dist /usr/share/nginx/html
EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"]
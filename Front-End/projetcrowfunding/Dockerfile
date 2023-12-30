# Stage 1: Build Angular App
FROM node:18.14.0 AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Stage 2: Set up Nginx to serve the built Angular app
FROM nginx:1.21.4-alpine
COPY --from=builder /app/dist/projetcrowfunding /usr/share/nginx/html
EXPOSE 8003
CMD ["nginx", "-g", "daemon off;"]

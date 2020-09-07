# FROM node:alpine AS builder
# COPY . ./git_test
#vWORKDIR /git_test
# RUN npm i
# RUN $(npm bin)/ng build --prod

# FROM nginx:latest
# COPY --from=builder /git_test/dist/my-first-project/ /usr/share/nginx/html


# stage 1

FROM node:alpine AS my-app-build
WORKDIR /app
COPY . .
# RUN npm install && npm run build
RUN npm i
RUN $(npm bin)/ng build --prod

# stage 2

FROM nginx:latest
COPY --from=my-app-build /app/dist/* /usr/share/nginx/html
EXPOSE 80

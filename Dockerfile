FROM 791532114280.dkr.ecr.us-east-1.amazonaws.com/node:18 AS queryGenerator

COPY ./package.json /queryGenerator/package.json
COPY ./package-lock.json /queryGenerator/package-lock.json
WORKDIR /queryGenerator
RUN npm i --legacy-peer-deps
COPY . /queryGenerator
WORKDIR /queryGenerator
RUN npm run prod_build


FROM nginx:alpine
#
COPY --from=queryGenerator /queryGenerator/build /usr/share/nginx/html/queryGenerator


COPY nginx.conf /etc/nginx/conf.d/default.conf
# Util installation : Temporary (Only used to install other softwares, needs to be cleaned up at the end)

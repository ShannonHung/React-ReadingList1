# pull official base image
FROM node:13.12.0-alpine

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install app dependencies
COPY package.json ./
RUN yarn install --silent
RUN yarn global add react-scripts@1.1.4

# add app
COPY . ./

# 開放對外的PORT
# EXPOSE 3000

# start app
CMD ["yarn", "start"]
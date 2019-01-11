FROM node:8.10.0
RUN npm install --global gatsby-cli
RUN npm install --global yarn
COPY . /app
WORKDIR /app
RUN yarn install

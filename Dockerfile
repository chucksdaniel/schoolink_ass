# Use alpine to keep things lightweight
FROM node:14-alpine

WORKDIR /app

COPY package*.json ./ yarn.lock ./

RUN yarn install

RUN yarn build

RUN ls -a

# Copy Only dist folder
# COPY ./dist ./dist

EXPOSE 5001

ENV PORT=5001

# Run the web service on container startup.
CMD [ "yarn", "start:prod" ]

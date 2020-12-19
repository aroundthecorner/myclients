FROM node:12

WORKDIR /var/www

# We need to copy the package.json over because at this point
# the binding of valumes has not taken place yet (this will)
# happen when the container is fully built.
COPY ./client/package*.json ./

RUN npm install

# When the container is fully built and run (and only then) this command will run
CMD ["npm", "run", "serve"]
FROM node:14

WORKDIR /var/www

# We need to copy the package.json over because at this point
# the binding of valumes has not taken place yet (this will)
# happen when the container is fully built.
COPY ./websocket/package*.json ./

RUN npm install pm2@4.5.1 -g

RUN npm install

# When the container is fully built and run (and only then) this command will run
# Run in foreground with pm2-runtime, otherwise container with exit as there is
# nothing more to do.
CMD ["pm2-runtime", "app.js"]
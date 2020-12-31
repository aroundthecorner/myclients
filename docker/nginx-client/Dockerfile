FROM nginx:1.19-alpine

# COPY nginx config
COPY ./docker/nginx-client/etc/nginx/conf.d/default.conf /etc/nginx/conf.d/default.conf

# Set working directory
WORKDIR /var/www

# COPY all client side files
COPY ./client/dist .
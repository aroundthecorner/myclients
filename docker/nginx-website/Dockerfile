FROM nginx:1.19-alpine

# COPY nginx config
COPY ./docker/nginx-website/etc/nginx/conf.d/default.conf /etc/nginx/conf.d/default.conf

# Set working directory
WORKDIR /var/www

# COPY all website files
COPY ./website .
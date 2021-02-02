FROM php:7.4-fpm

# Set working directory
WORKDIR /var/www

# Install dependencies
RUN apt-get update && apt-get install -y \
    cron \
    build-essential \
    libpng-dev \
    libjpeg62-turbo-dev \
    libfreetype6-dev \
    locales \
    libzip-dev \
    libmcrypt-dev \
    libonig-dev \
    zlib1g-dev \
    zip \
    jpegoptim optipng pngquant gifsicle \
    vim \
    unzip \
    git \
    graphviz \
    curl \
    supervisor

# Install Imagick
RUN apt-get update && \
    apt-get install -y libmagickwand-dev --no-install-recommends && \
    pecl install imagick && \
    docker-php-ext-enable imagick

# Clear cache
RUN apt-get clean && rm -rf /var/lib/apt/lists/*

# Install extensions
RUN docker-php-ext-install pdo_mysql zip exif pcntl
RUN docker-php-ext-configure gd --with-freetype --with-jpeg
RUN docker-php-ext-install gd
RUN docker-php-ext-install bcmath

# Permissions for Laravel
RUN chown -R www-data:www-data /var/www
RUN chmod -R 777 /var/www

# Install composer
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

# Cron
RUN echo "* * * * * root php /var/www/artisan schedule:run >> /var/log/cron.log 2>&1" >> /etc/crontab
RUN touch /var/log/cron.log

# Expose port 9000 and start php-fpm server
EXPOSE 9000

CMD bash -c "composer install && chmod -R 777 /var/www && php artisan storage:link && php artisan telescope:install && php artisan migrate --seed && service supervisor start && supervisorctl reread && supervisorctl update && supervisorctl start laravel-queue-worker:* && cron && php-fpm"
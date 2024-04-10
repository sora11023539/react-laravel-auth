FROM php:8.3.3-fpm

RUN --mount=type=cache,target=/var/cache/apt,sharing=locked \
    --mount=type=cache,target=/var/lib/apt,sharing=locked \
    apt-get update && apt-get install -y --no-install-recommends \
    libpng-dev \
    libonig-dev \
    libxml2-dev \
    zip \
    unzip \
    libfreetype6-dev \
    libjpeg62-turbo-dev \
    libzip-dev \
    libpq-dev \
    && docker-php-ext-install mbstring exif pcntl bcmath gd pgsql pdo_pgsql \
    && pecl install xdebug \
    && docker-php-ext-enable xdebug

COPY --from=composer:latest /usr/bin/composer /usr/bin/composer
WORKDIR /var/www
COPY . /var/www/

ENV COMPOSER_ALLOW_SUPERUSER=1

# RUN composer install
RUN chown -R www-data:www-data /var/www

CMD ["php-fpm"]

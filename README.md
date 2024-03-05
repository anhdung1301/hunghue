## step setup

composer require laravel/ui:^2.4

php artisan ui vue

php artisan ui react

npm install

npm run dev


php artisan migrate

php artisan serve

## add column avatar to user table (upload image) 
php artisan make:migration create_add_avatar_users --create=users

php artisan migrate

## crate controller 
php artisan make:controller Api/UsersController --resource





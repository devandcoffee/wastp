<?php

$factory->define(App\User::class, function (Faker\Generator $faker) {
    static $password;

    $username = $faker->userName;

    return [
        'username' => $username,
        'slug' => str_slug($username),
        'avatar' => 'https://gravatar.com/avatar/?s=200&d=retro',
        'email' => $faker->unique()->safeEmail,
        'password' => $password ?: $password = bcrypt('secret'),
        'remember_token' => str_random(10),
    ];
});

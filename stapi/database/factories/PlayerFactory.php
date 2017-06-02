<?php

$factory->define(App\Player::class, function (Faker\Generator $faker) {
    static $password;

    return [
        'name' => $faker->firstName,
        'lastname' => $faker->lastName,
        'birthdate' => $faker->date('Y-m-d', 'now'),
        'avatar' => 'https://gravatar.com/avatar/?s=200&d=retro',
        'gender' => $faker->boolean ? 'male' : 'female',
        'location' => $faker->city,
        'about' => $faker->paragraph(3),
        'identity_id' => $faker->randomNumber(10),
    ];
});

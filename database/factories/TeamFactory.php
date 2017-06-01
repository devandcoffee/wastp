<?php

$factory->define(App\Team::class, function (Faker\Generator $faker) {
    static $password;

    return [
        'name' => $faker->country,
        'amount_players' => $faker->numberBetween(5, 22),
        'logo_url' => 'https://gravatar.com/avatar/?s=200&d=retro',
    ];
});

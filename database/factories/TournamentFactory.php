<?php

$factory->define(App\Tournament::class, function (Faker\Generator $faker) {
    static $password;

    return [
        'name' => $faker->company,
        'start_date' => $faker->date('Y-m-d'),
        'amount_teams' => $faker->valid(function($digit){
            return $digit % 2 === 0;
        })->numberBetween(8, 20),
        'description' => $faker->paragraph(2),
    ];
});

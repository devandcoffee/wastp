<?php

use Illuminate\Database\Seeder;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(App\User::class, 20)
            ->create()
            ->each(function($user) {
                $tournaments = factory(App\Tournament::class, 5)->make();
                $user->tournaments()->saveMany($tournaments);
            });
    }
}

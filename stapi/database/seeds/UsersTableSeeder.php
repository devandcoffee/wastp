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
                $tournamentType = DB::table('tournaments_types')->inRandomOrder()->first();
                $tournaments = factory(App\Tournament::class, 2)
                    ->make(['tournament_type_id' => $tournamentType->id]);
                $teams = factory(App\Team::class, 10)->make();
                $user->tournaments()->saveMany($tournaments);
                $user->teams()->saveMany($teams);
            });
    }
}

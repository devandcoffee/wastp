<?php

use Illuminate\Database\Seeder;
use App\Tournament;
use App\Team;

class TeamTournamentTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $tournaments = Tournament::all();
        foreach ($tournaments as $tournament) {
            $amount_teams = $tournament->amount_teams;
            $teams = Team::inRandomOrder()->take($amount_teams)->get();
            $tournament->teams()->saveMany($teams);
        }
    }
}

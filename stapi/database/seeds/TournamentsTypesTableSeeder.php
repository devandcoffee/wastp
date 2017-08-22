<?php

use Illuminate\Database\Seeder;
use App\TournamentType;

class TournamentsTypesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $data = [
            ['name' => 'league'],
            ['name' => 'cup']
        ];

        foreach ($data as $tournamentType) {
            TournamentType::create($tournamentType);
        }
    }
}

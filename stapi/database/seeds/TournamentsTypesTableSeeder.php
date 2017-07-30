<?php

use Illuminate\Database\Seeder;

class TournamentsTypesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('tournaments_types')->insert([
            ['type' => 'league'],
            ['type' => 'cup'],
        ]);
    }
}

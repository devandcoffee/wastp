<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Eloquent::unguard();
        Schema::disableForeignKeyConstraints();

        $this->call('UsersTableSeeder');
        $this->call('TeamTournamentTableSeeder');

        Schema::enableForeignKeyConstraints();
        Eloquent::reguard();
    }
}

<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateTournamentsTeamsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('tournaments_teams', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('tournament_id');
            $table->integer('team_id');
            $table->integer('points')->default(0);
            $table->integer('played')->default(0);
            $table->integer('won')->default(0);
            $table->integer('drawn')->default(0);
            $table->integer('lost')->default(0);
            $table->integer('gf')->default(0);
            $table->integer('ga')->default(0);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('tournaments_teams');
    }
}

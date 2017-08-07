<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class TournamentType extends Model
{
    protected $table = 'tournaments_types';

    protected $fillable = ['type'];

    public function tournaments()
    {
        $this->hasMany('App\Tournament');
    }
}

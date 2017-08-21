<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class TournamentType extends Model
{
    protected $table = 'tournaments_types';

    protected $fillable = ['name'];

    public function tournaments()
    {
        return $this->hasMany('App\Tournament');
    }
}

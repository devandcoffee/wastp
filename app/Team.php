<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Team extends Model
{
    protected $fillable = [
        'name',
        'amount_players',
        'logo_url',
        'user_id'
    ];

    public function players()
    {
        return $this->belongsToMany('App\Player');
    }

    public function tournament()
    {
        return $this->belongsToMany('App\Tournament');
    }

    public function visitorGames()
    {
        return $this->hasMany('App\Games', 'visitor_id');
    }

    public function localGames()
    {
        return $this->hasMany('App\Games', 'local_id');
    }

    public function games()
    {
        return $this->visitorGames()->union($this->localGames());
    }
}

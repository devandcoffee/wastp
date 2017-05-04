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
        return $this->belongsToMany('App\Player')
    }
}

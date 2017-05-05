<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Game extends Model
{
    protected $fillable = [
        'fixture_id',
        'local_team_id',
        'visitor_team_id',
        'date',
        'local_score',
        'visitor_score',
        'status'
    ];

    public function local()
    {
        return $this->hasOne('App\Team', 'local_team_id');
    }

    public function visitor()
    {
        return $this->hasOne('App\Team', 'visitor_team_id');
    }

    public function fixture()
    {
        return $this->belongsTo('App\Fixture');
    }
}

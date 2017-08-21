<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Tournament extends Model
{

    use SoftDeletes;

    public $with = ['user', 'teams', 'tournament_type'];

    protected $fillable = [
        'user_id',
        'name',
        'tournament_type_id',
        'start_date',
        'amount_teams',
        'description'
    ];

    protected $dates = ['deleted_at'];

    public function user()
    {
        return $this->belongsTo('App\User');
    }

    public function teams()
    {
        return $this->belongsToMany('App\Team');
    }

    public function tournament_type()
    {
        return $this->belongsTo('App\TournamentType');
    }
}

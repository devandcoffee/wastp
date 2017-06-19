<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Tournament extends Model
{
    public $with = ['user', 'teams'];

    protected $fillable = [
        'user_id',
        'name',
        'start_date',
        'amount_teams',
        'description'
    ];

    public function user()
    {
        return $this->belongsTo('App\User');
    }

    public function teams()
    {
        return $this->belongsToMany('App\Team');
    }
}

<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Player extends Model
{
    protected $fillable = [
        'name',
        'lastname',
        'birthdate',
        'slug',
        'avatar',
        'gender',
        'location',
        'about',
        'identity_id'
    ];

    public function teams()
    {
        return $this->belongsToMany('App\Team')
    }
}

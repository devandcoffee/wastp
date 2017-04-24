<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Player extends Model
{
    protected $fillable = [
        "name",
        "lastname",
        "birthdate",
        "identity_id"
    ];

    public function teams()
    {
        return $this->belongsToMany("App\Team")
    }
}

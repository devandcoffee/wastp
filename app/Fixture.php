<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Fixture extends Model
{
    protected $fillable = [
        'tourmanent_id',
        'start_date',
        'end_date'
    ];

    public function tournament()
    {
        return $this->belongsTo('App\Tournament');
    }
}

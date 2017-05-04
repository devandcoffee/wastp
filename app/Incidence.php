<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Incidence extends Model
{
    protected $fillable = [
        'incidence_type_id',
        'game_id',
        'player_id',
        'description'
    ];

    public function incidences_type()
    {
        return $this->belongsTo('app\IncidencesType');
    }

    public function game()
    {
        return $this->belongsTo('app\Game');
    }

    public function player()
    {
        return $this->belongsTo('app\Player');
    }
}

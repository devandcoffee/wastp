<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class IncidencesType extends Model
{
    protected $fillable = ['name'];

    public function incidences()
    {
        return $this->hasMany('app\Incidence');
    }
}

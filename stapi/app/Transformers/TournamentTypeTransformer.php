<?php

namespace App\Transformers;

use League\Fractal\TransformerAbstract;

class TournamentTypeTransformer extends TransformerAbstract
{
    /**
     * A Fractal transformer.
     *
     * @return array
     */
    public function transform($tournamentType)
    {
        return [
            'id' => $tournamentType->id,
            'name' => $tournamentType->name,
        ];
    }
}

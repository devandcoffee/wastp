<?php

namespace App\Transformers;

use League\Fractal\TransformerAbstract;

class TeamTransformer extends TransformerAbstract
{
    /**
     * A Fractal transformer.
     *
     * @return array
     */
    public function transform($team)
    {
        return [
            'id' => $team->id,
            'name' => $team->name,
            'amount_players' => $team->amount_players,
            'logo_url' => $team->logo_url,
            'created_at' => $team->created_at->format('d/m/Y'),
            'updated_at' => $team->updated_at->format('d/m/Y')
        ];
    }
}

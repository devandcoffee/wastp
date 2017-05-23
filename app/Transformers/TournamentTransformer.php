<?php

namespace App\Transformers;

use League\Fractal\TransformerAbstract;

class TournamentTransformer extends TransformerAbstract
{
    /**
     * A Fractal transformer.
     *
     * @return array
     */
    public function transform($tournament)
    {
        return [
            'id' => $tournament->id,
            'name' => $tournament->name,
            'description' => $tournament->description,
            'start_date' => $tournament->start_date,
            'amount_teams' => $tournament->amount_teams,
            'created_at' => $tournament->created_at->format('d/m/Y')
        ];
    }
}

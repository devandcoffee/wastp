<?php

namespace App\Transformers;

use App\TournamentType;
use League\Fractal\TransformerAbstract;

class TournamentTypeTransformer extends TransformerAbstract
{

    /**
     * List of resources to automatically include
     *
     * @var array
     */
    protected $availableIncludes = [
        'tournaments',
    ];

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
            'created_at' => $tournamentType->created_at->format('d/m/Y'),
            'updated_at' => $tournamentType->updated_at->format('d/m/Y'),
        ];
    }

    /**
     * Include Tournaments
     *
     * @param  $tournament
     * @return \League\Fractal\Resource\Item
     */
    public function includeTournaments(TournamentType $tournamentType)
    {
        $tournaments = $tournamentType->tournaments;

        return $this->collection($tournaments, new TournamentTransformer, 'Tournaments');
    }
}

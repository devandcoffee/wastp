<?php

namespace App\Transformers;

use App\Tournament;
use League\Fractal\TransformerAbstract;
use App\Transformers\UserTransformer;

class TournamentTransformer extends TransformerAbstract
{

    /**
     * List of resources to automatically include
     *
     * @var array
     */
    protected $availableIncludes = [
        'user'
    ];

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

    /**
     * Include User
     *
     * @param  $tournament
     * @return \League\Fractal\Resource\Item
     */
    public function includeUser(Tournament $tournament)
    {
        $user = $tournament->user;

        return $this->item($user, new UserTransformer, 'User');
    }
}

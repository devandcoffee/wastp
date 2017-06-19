<?php

namespace App\Transformers;

use League\Fractal\TransformerAbstract;

class UserTransformer extends TransformerAbstract
{
    /**
     * A Fractal transformer.
     *
     * @return array
     */
    public function transform($user)
    {
        return [
            'id' => $user->id,
            'username' => $user->username,
            'slug' => $user->slug,
            'avatar' => $user->avatar,
            'email' => $user->email,
            'created_at' => $user->created_at->format('d/m/Y'),
            'updated_at' => $user->updated_at->format('d/m/Y')
        ];
    }
}

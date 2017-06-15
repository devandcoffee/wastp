<?php

namespace App\Http\Controllers;

use App\Tournament;
use Illuminate\Http\Request;
use League\Fractal\Pagination\IlluminatePaginatorAdapter;
use Spatie\Fractalistic\Fractal;
use App\Transformers\TournamentTransformer;

class TournamentController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $perPage = ($request->perPage) ? $request->perPage : 15;
        $tournaments = Tournament::orderBy('start_date', 'desc')->paginate($perPage);
        return fractal()
            ->collection($tournaments->getCollection(), null, 'Tournaments')
            ->parseIncludes(['user'])
            ->transformWith(new TournamentTransformer())
            ->paginateWith(new IlluminatePaginatorAdapter($tournaments))
            ->respond()
        ;
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Tournament  $tournament
     * @return \Illuminate\Http\Response
     */
    public function show(Tournament $tournament)
    {
        $tournaments = collect([$tournament]);
        return fractal()
            ->collection($tournaments, null, 'Tournaments')
            ->parseIncludes(['user'])
            ->transformWith(new TournamentTransformer())
            ->respond()
        ;
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Tournament  $tournament
     * @return \Illuminate\Http\Response
     */
    public function edit(Tournament $tournament)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Tournament  $tournament
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Tournament $tournament)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Tournament  $tournament
     * @return \Illuminate\Http\Response
     */
    public function destroy(Tournament $tournament)
    {
        //
    }

}

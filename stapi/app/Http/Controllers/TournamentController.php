<?php

namespace App\Http\Controllers;

use App\Tournament;
use Illuminate\Http\Request;
use App\Http\Requests\StoreTournament;
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
    public function store(StoreTournament $request)
    {
        $tournament = Tournament::create($request->all());
        $tournaments = collect([$tournament]);
        return fractal()
            ->collection($tournaments, null, 'Tournaments')
            ->transformWith(new TournamentTransformer())
            ->respond();
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Tournament  $tournament
     * @return \Illuminate\Http\Response
     */
    public function show(Tournament $tournament, Request $request)
    {
        $includes = explode(',', $request->include);
        $parseIncludes =  $includes ? $includes : [];

        $tournaments = collect([$tournament]);
        return fractal()
            ->collection($tournaments, null, 'Tournaments')
            ->parseIncludes($parseIncludes)
            ->transformWith(new TournamentTransformer())
            ->respond()
        ;
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Tournament  $tournament
     * @return \Illuminate\Http\Response
     */
    public function update(StoreTournament $request, Tournament $tournament)
    {
        $tournament->update($request->all());
        $tournaments = collect([$tournament]);
        return fractal()
            ->collection($tournaments, null, 'Tournaments')
            ->transformWith(new TournamentTransformer())
            ->respond();
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Tournament  $tournament
     * @return \Illuminate\Http\Response
     */
    public function destroy(Tournament $tournament)
    {
        $tournament->delete();
        return response()->json(['message' => 'Tournament deleted successfully.']);
    }

}

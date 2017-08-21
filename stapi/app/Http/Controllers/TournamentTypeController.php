<?php

namespace App\Http\Controllers;

use App\TournamentType;
use Illuminate\Http\Request;
use App\Transformers\TournamentTypeTransformer;
use League\Fractal\Pagination\IlluminatePaginatorAdapter;

class TournamentTypeController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $perPage = ($request->perPage) ? $request->perPage : 15;
        $tournamentsTypes = TournamentType::paginate($perPage);
        return fractal()
            ->collection($tournamentsTypes->getCollection(), null, 'Tournaments Types')
            ->transformWith(new TournamentTypeTransformer())
            ->paginateWith(new IlluminatePaginatorAdapter($tournamentsTypes))
            ->respond();
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
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
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(Request $request, TournamentType $tournamentsType)
    {
        $includes = explode(',', $request->include);
        $parseIncludes =  $includes ? $includes : [];

        $tournamentsTypes = collect([$tournamentsType]);
        return fractal()
            ->collection($tournamentsTypes, null, 'Tournament Type')
            ->parseIncludes($parseIncludes)
            ->transformWith(new TournamentTypeTransformer())
            ->respond();
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit()
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}

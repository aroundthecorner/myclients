<?php

namespace App\Http\Controllers;

use App\Models\OrganizationType;
use Illuminate\Http\Request;

class OrganizationTypesController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return OrganizationType::all();
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
     * @param  \App\Models\OrganizationType  $organizationType
     * @return \Illuminate\Http\Response
     */
    public function show(OrganizationType $organizationType)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\OrganizationType  $organizationType
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, OrganizationType $organizationType)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\OrganizationType  $organizationType
     * @return \Illuminate\Http\Response
     */
    public function destroy(OrganizationType $organizationType)
    {
        //
    }
}

<?php

namespace App\Http\Controllers;

use Carbon\Carbon;

class ProjectAgeController extends Controller
{
    /**
     * Return the project age SVG
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $projectStartDate = new Carbon("2020-11-25");
        $projectAge =  $projectStartDate->diffInDays(now());

        return view('project-age', compact('projectAge'));
    }
}

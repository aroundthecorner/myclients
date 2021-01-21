<?php

namespace App\Http\Controllers;

use App\Models\User;

class UserActiveController extends Controller
{
    /**
     * Instantiate a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth:sanctum');
    }

    /**
     * Record the last online activity for user
     *
     * @return \Illuminate\Http\Response
     */
    public function store()
    {
        User::find(auth()->id())->update([
            'last_click' => date('Y-m-d H:i:s'),
        ]);
    }
}

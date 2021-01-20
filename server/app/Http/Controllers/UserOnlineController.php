<?php

namespace App\Http\Controllers;

use App\Models\User;

class UserOnlineController extends Controller
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
            'last_ping' => date('Y-m-d H:i:s'),
        ]);
    }
}

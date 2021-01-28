<?php

namespace App\Http\Controllers;

use App\Models\User;

class UserProfileSettingsController extends Controller
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
     * Update user's profile settings
     */
    public function update()
    {
        //
    }
}
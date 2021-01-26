<?php

namespace App\Http\Controllers;

use Illuminate\Support\Str;

class UserProfilePictureController extends Controller
{
    /**
     * Upload and save user's profile picture
     */
    public function store()
    {
        request()->validate(['file' => 'required|image']);

        $path = request()->file('file')->store('app/public/img/uploads');

        return $path;
    }
}
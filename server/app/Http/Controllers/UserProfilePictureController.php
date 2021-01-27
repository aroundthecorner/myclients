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

        $extension = request()->file('file')->extension();
        $filename = Str::random(30) . ".$extension";
        
        $path = request()->file('file')->storeAs('public/img/uploads', $filename);

        return $filename;
    }
}
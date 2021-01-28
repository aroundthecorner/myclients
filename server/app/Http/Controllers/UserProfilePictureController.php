<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Support\Str;

class UserProfilePictureController extends Controller
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
     * Upload and save user's profile picture
     */
    public function store()
    {
        request()->validate(['file' => 'required|image']);

        $filename = $this->uploadFile();
        $this->updateUserProfilePicture($filename);

        return response()->json(['filename' => $filename]);
    }

    /**
     * Upload the user's profile picture
     */
    public function uploadFile()
    {
        $extension = request()->file('file')->extension();
        $filename = Str::random(30) . ".$extension";
        
        request()->file('file')->storeAs('public/img/uploads', $filename);

        return $filename;
    }

    /**
     * Update the user's profile picture
     *
     * @param  string  $filename
     */
    public function updateUserProfilePicture($filename)
    {
        User::find(auth()->id())->update([ 'profile_picture' => $filename ]);
    }
}
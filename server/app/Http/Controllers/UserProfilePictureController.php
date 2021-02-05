<?php

namespace App\Http\Controllers;

use Imagick;
use Exception;
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
        try {
            request()->validate(['file' => 'required|image|max:5000']);
    
            $filename = $this->uploadFile();
            $this->updateUserProfilePicture($filename);
    
            return response()->json(['filename' => $filename]);
        } catch (Exception $exception) {
            return response()->json(['message' => 'Must be an image less than 5 MB'], 422);
        }
    }

    /**
     * Upload the user's profile picture
     */
    private function uploadFile()
    {
        $extension = request()->file('file')->extension();
        $filename = Str::random(30) . ".$extension";
        
        $path = request()->file('file')->storeAs('public/img/uploads', $filename);
        $this->cropImage($filename);

        return "storage/img/uploads/$filename";
    }

    /**
     * Update the user's profile picture
     *
     * @param  string  $filename
     */
    private function updateUserProfilePicture($filename)
    {
        User::find(auth()->id())->update([ 'profile_picture' => $filename ]);
    }

    /**
     * Crop the uploaded image
     *
     * @param  string  $filename
     */
    private function cropImage($filename)
    {
        $path = storage_path("app/public/img/uploads/$filename");

        $image = new Imagick($path);
	    $image->cropThumbnailImage(225, 225);
	    $image->setImagePage(0, 0, 0, 0);

	    file_put_contents($path, $image->getImageBlob());
    }
}
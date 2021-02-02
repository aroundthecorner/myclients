<?php

namespace App\Http\Controllers;

use App\Models\User;

class UserProfileController extends Controller
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
        $profileData = $this->filterEmpty(request()->only([
            'name', 'email', 'password', 'theme', 'language'
        ]));

        if (isset($profileData['password'])) {
            $profileData['password'] = bcrypt($profileData['password']);
        }

        User::find(auth()->id())->update($profileData);

        return response()->json($this->getUser());
    }

    /**
     * Filter empty values
     */
    public function filterEmpty($array)
    {
        return array_filter($array, fn($value) => !is_null($value) && $value !== '');
    }

    /**
     * Get current user
     */
    public function getUser()
    {
        return User::whereId(auth()->id())
                   ->with('organization:id,description,organization_type_id')
                   ->first();
    }
}
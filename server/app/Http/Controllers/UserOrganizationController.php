<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Models\Organization;

class UserOrganizationController extends Controller
{
    /**
     * Instantiate a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth:sanctum');
        $this->middleware('sanitize');
    }

    /**
     * Update user's organization settings
     */
    public function update()
    {
        $request = request()->only(['organizationName', 'organizationType']);

        $organization = Organization::find(auth()->user()->organization_id);

        $organization->update([
            'description' => $request['organizationName'],
            'organization_type_id' => $request['organizationType']['id'],
        ]);

        return response()->json($this->getUser());
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
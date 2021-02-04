<?php

namespace App\Http\Controllers;

use App\Models\Organization;
use App\Http\Requests\OrganizationUsersRequest;

class OrganizationUsersController extends Controller
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
     * Return the users of an organization
     */
    public function index(OrganizationUsersRequest $request, Organization $organization)
    {
        return $organization->users;
    }
}
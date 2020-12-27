<?php

namespace App\Http\Controllers;

use App\Models\OrganizationType;
use Illuminate\Http\Request;

class OrganizationTypesController extends Controller
{
    /**
     * Return a listing of all organization types
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return cache()->remember('organization_types.all', now()->addMonth(), function() {
            return OrganizationType::all();
        });
    }
}

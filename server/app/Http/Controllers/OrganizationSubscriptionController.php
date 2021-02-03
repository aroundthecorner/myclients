<?php

namespace App\Http\Controllers;

use App\Models\Subscription;
use App\Http\Requests\ShowOrganizationSubscriptionRequest;

class OrganizationSubscriptionController extends Controller
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
     * Return the subscription of an organization
     */
    public function show(ShowOrganizationSubscriptionRequest $request)
    {
        $organizationId = auth()->user()->organization_id;

        $subscription = Subscription::find($organizationId);

        return $subscription;
    }

    /**
     * Update organization's subscription plan
     */
    public function update(ShowOrganizationSubscriptionRequest $request)
    {
        $request = request()->only(['id', 'plan']);

        Subscription::find($request['id'])->update($request);
    }
}
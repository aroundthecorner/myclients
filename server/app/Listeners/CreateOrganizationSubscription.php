<?php

namespace App\Listeners;

use App\Models\Subscription;
use App\Events\OrganizationCreated;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;

class CreateOrganizationSubscription
{
    /**
     * Create the event listener.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    /**
     * Handle the event.
     *
     * @param  OrganizationCreated  $event
     * @return void
     */
    public function handle(OrganizationCreated $event)
    {
        Subscription::create([
            'organization_id' => $event->organization->id,
            'plan' => 'monthly',
            'plan_price' => 15.00,
            'status' => 1,
            'trial_ends_at' => now()->addMonth(),
            'ends_at' => now()->addMonths(2),
        ]);
    }
}

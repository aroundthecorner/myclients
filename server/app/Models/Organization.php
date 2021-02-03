<?php

namespace App\Models;

use App\Models\OrganizationType;
use App\Events\OrganizationCreated;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Organization extends Model
{
    protected $guarded  = [];
    protected $with     = ['organizationType'];

    /**
     * The event map for the model.
     *
     * @var array
     */
    protected $dispatchesEvents = [
        'created' => OrganizationCreated::class,
    ];
    
    use HasFactory;

    /**
     * Get the organization's type
     */
    public function organizationType()
    {
        return $this->belongsTo(OrganizationType::class, 'organization_type_id');
    }
}

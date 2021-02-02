<?php

namespace App\Models;

use App\Models\OrganizationType;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Organization extends Model
{
    protected $guarded  = [];
    protected $with     = ['organizationType'];
    
    use HasFactory;

    /**
     * Get the organization's type
     */
    public function organizationType()
    {
        return $this->belongsTo(OrganizationType::class, 'organization_type_id');
    }
}

<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\OrganizationType;

class OrganizationTypeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $organizationTypes = [
            'Agriculture & Forestry', 'Business & Information', 'Education',
            'Finance & Insurance', 'Food & Hospitality', 'Health Services',
            'Motor Vehicles', 'Natural Resources / Environment', 'Personal Services',
            'Real Estate & Housing', 'Legal', 'Transportation', 'Other',
        ];

        foreach ($organizationTypes as $organizationType) {
            OrganizationType::factory()->create([
                'description' => $organizationType
            ]);
        }
    }
}

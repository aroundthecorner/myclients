<?php

namespace Database\Seeders;

use App\Models\Organization;
use App\Models\User;
use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        User::factory()->create([
            'name' => 'Mārtiņš Zeltiņš',
            'email' => 'admin@myclients.org',
            'role' => 'root',
            'organization_id' => Organization::factory()->create()->id,
            'profile_picture' => 'img/martins_profile_picture.png',
        ]);

        User::factory()->create([
            'organization_id' => Organization::factory()->create()->id,
        ]);
    }
}

<?php

namespace Database\Seeders;

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
            'profile_picture' => 'img/martins_profile_picture.png',
        ]);

        User::factory()->create();
    }
}

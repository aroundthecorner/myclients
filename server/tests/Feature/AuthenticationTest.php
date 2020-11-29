<?php

namespace Tests\Feature;

use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class AuthenticationTest extends TestCase
{
    use RefreshDatabase;
    
    /**
     * A basic test example.
     *
     * @return void
     */
    public function testCheckUserExists()
    {
        User::factory()->create([
            'username' => 'testUser'
        ]);

        $response = $this->postJson('/auth/check-user-exists', [
            'username' => 'testUser'
        ])->json();

        $this->assertTrue($response['user_exists']);
    }
}

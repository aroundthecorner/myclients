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
            'email' => 'testUser'
        ]);

        $response = $this->postJson('/auth/check-user-exists', [
            'email' => 'testUser'
        ])->json();

        $this->assertTrue($response['user_exists']);
    }
}

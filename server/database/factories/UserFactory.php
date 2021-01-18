<?php

namespace Database\Factories;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

class UserFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = User::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'name' => $this->faker->name,
            'email' => $this->faker->unique()->safeEmail,
            'role' => 'user',
            'email_verified_at' => now(),
            'profile_picture' => 'img/default_profile_picture.png',
            'password' => '$2y$10$3M27qP3R0wFpy3Sgk2Qy6eY1dfUWDW5GH0b3Tm9hx4YVrfMAf5qKq', // password
            'remember_token' => Str::random(10),
        ];
    }
}

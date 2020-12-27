<?php

namespace Database\Factories;

use App\Models\LanguageString;
use Illuminate\Database\Eloquent\Factories\Factory;

class LanguageStringFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = LanguageString::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'lang_string' => $this->faker->title,
        ];
    }
}

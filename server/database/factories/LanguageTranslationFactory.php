<?php

namespace Database\Factories;

use App\Models\LanguageTranslation;
use Illuminate\Database\Eloquent\Factories\Factory;

class LanguageTranslationFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = LanguageTranslation::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'lang_string_id' => 1,
            'lang_id' => 1,
            'lang_translation' => 'translation',
        ];
    }
}

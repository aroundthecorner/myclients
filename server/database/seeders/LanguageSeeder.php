<?php

namespace Database\Seeders;

use App\Models\Language;
use App\Models\LanguageString;
use Illuminate\Database\Seeder;
use App\Models\LanguageTranslation;
use Facades\App\Repository\LanguageRepository;

class LanguageSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        [$language_strings, $languages] = LanguageRepository::get();

        // Insert language strings
        foreach($language_strings as $language_string) {
            LanguageString::factory()->create([
                'lang_string' => $language_string,
            ]);
        }

        // Insert languages and translations
        $language_index = 1;

        foreach($languages as $language) {
            Language::factory()->create([
                'lang_short' => $language['lang_short'],
                'lang_long' => $language['lang_long'],
            ]);

            foreach($language['translations'] as $index => $translation) {
                LanguageTranslation::factory()->create([
                    'lang_string_id' => $index + 1,
                    'lang_id' => $language_index,
                    'lang_translation' => $translation,
                ]);
            }

            $language_index++;
        }
    }
}

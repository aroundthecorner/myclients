<?php

namespace App\Http\Controllers;

use App\Models\LanguageTranslation;

class LanguagesController extends Controller
{
    /**
     * Return a listing of all languages
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return cache()->remember('languages', now()->addMonth(), function() {
            $language_translations = $this->getLanguageTranslations();
        
            foreach($language_translations as $index => $language_translation) {
                foreach($language_translation as $translation) {
                    $translations["{$translation['lang_string']}"] = $translation['lang_translation'];
                }
        
                $languages["$index"] = [
                    'lang_short' => $index,
                    'lang_long' => $language_translation[0]['lang_long'],
                    'translations' => $translations,
                ];
            }

            return response()->json($languages);
        });
    }

    /**
     * Return a listing of all language translations
     *
     * @return \Illuminate\Http\Response
     */
    private function getLanguageTranslations()
    {
        return LanguageTranslation::join(
            'languages', 'languages.id', '=', 'language_translations.lang_id'
        )->join(
            'language_strings', 'language_strings.id', '=', 'language_translations.lang_string_id'
        )->get()->groupBy('lang_short');
    }
}

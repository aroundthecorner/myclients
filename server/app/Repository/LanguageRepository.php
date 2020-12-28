<?php

namespace App\Repository;

class LanguageRepository
{
    public function get()
    {
        $language_strings = [
            'Login',
            'Welcome Back',
            'Please login with your personal email and password',
            'Email',
            'Password',
            'Forgot Password?',
            'Login Now',
            'Create Account',
            'Online Apointment Scheduling App',
            'Dashboard',
        ];

        $languages = [

            /**
             * English language
             */
            'en' => [
                'lang_short' => 'en',
                'lang_long' => 'english',

                'translations' => [
                    'Login',
                    'Welcome Back',
                    'Please login with your personal email and password',
                    'Email',
                    'Password',
                    'Forgot Password?',
                    'Login Now',
                    'Create Account',
                    'Online Apointment Scheduling App',
                    'Dashboard',
                ]
            ],


            /**
             * Latvian language
             */
            'lv' => [
                'lang_short' => 'lv',
                'lang_long' => 'latviešu',

                'translations' => [
                    'Ienākt',
                    'Laipni lūgti',
                    'Lūdzu ienāciet ar savu e-pastu un paroli',
                    'E-pasts',
                    'Parole',
                    'Aizmirsāt paroli?',
                    'Ienākt',
                    'Reģistrēties',
                    'Tiešsaites plānošanas aplikācija',
                    'Panelis',
                ]
            ],

        ];

        return [$language_strings, $languages];
    }
}

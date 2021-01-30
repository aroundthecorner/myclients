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
            'Add appointment',
            'Filters',
            'Day',
            'Week',
            'Month',
            'Location',
            'Provider',
            'Services',
            'Clients',
            'Users',
            'Name',
            'Role',
            'User since',
            'root',
            'admin',
            'user',
            'New user',
            'Chat',
            'Screen',
            'Clients & Users',
            'Send Message',
            'Profile Settings',
            'Organization Settings',
            'Plan & Billing',
            'Status code',
            'Client API',
            'URL',
            'My profile',
            'Settings',
            'Log out',
            'Calendar',
            'Locations',
            'Service providers',
            'Admin panel',
            'Weak password',
            'Password must contain symbols, numbers and lowercase and uppercase letters.',
            'User already exists',
            'This user already exists.',
            'Organization exists',
            'This organization already exists.',
            'All fields required',
            'All fileds are required to be filled.',
            'Wrong email or token',
            'The email or token is incorrect or expired.',
            'Wrong username or password',
            'The username or password you entered is not correct.',
            'Incorrect data',
            'The data you provided was incorrect. Please try again!',
            'IP address banned',
            'Your IP address has been banned. Too many failed login attempts.',
            'Error occured',
            'An error has occured, please try again later!',
            'Organization',
            'Send',
            'Send message',
            'Send to all',
            'Organization name',
            'Organization type',
            'Save settings',
            'Your Subscription Plan',
            'Monthly',
            'Change subscription plan',
            'Yearly',
            'Forever',
            'Theme',
            'Language',
            'Profile picture',
            'Upload...',
            'Users settings',
            'Quick stats',
            'Revenue',
            'Upcoming appointments',
            'Approved',
            'Bookings',
            'Log out from all',
            'en',
            'lv',
            'Uploaded file invalid',
            'The file must be an image less than 5 MB',
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
                    'Add appointment',
                    'Filters',
                    'Day',
                    'Week',
                    'Month',
                    'Location',
                    'Provider',
                    'Services',
                    'Clients',
                    'Users',
                    'Name',
                    'Role',
                    'User since',
                    'Root',
                    'Admin',
                    'User',
                    'New user',
                    'Chat',
                    'Screen',
                    'Clients & Users',
                    'Send Message',
                    'Profile Settings',
                    'Organization Settings',
                    'Plan & Billing',
                    'Status code',
                    'Client API',
                    'URL',
                    'My profile',
                    'Settings',
                    'Log out',
                    'Calendar',
                    'Locations',
                    'Service providers',
                    'Admin panel',
                    'Weak password',
                    'Password must contain symbols, numbers and lowercase and uppercase letters.',
                    'User already exists',
                    'This user already exists.',
                    'Organization exists',
                    'This organization already exists.',
                    'All fields required',
                    'All fileds are required to be filled.',
                    'Wrong email or token',
                    'The email or token is incorrect or expired.',
                    'Wrong username or password',
                    'The username or password you entered is not correct.',
                    'Incorrect data',
                    'The data you provided was incorrect. Please try again!',
                    'IP address banned',
                    'Your IP address has been banned. Too many failed login attempts.',
                    'Error occured',
                    'An error has occured, please try again later!',
                    'Organization',
                    'Send',
                    'Send message',
                    'Send to all',
                    'Organization name',
                    'Organization type',
                    'Save settings',
                    'Your Subscription Plan',
                    'Monthly',
                    'Change subscription plan',
                    'Yearly',
                    'Forever',
                    'Theme',
                    'Language',
                    'Profile picture',
                    'Upload...',
                    'Users settings',
                    'Quick stats',
                    'Revenue',
                    'Upcoming appointments',
                    'Approved',
                    'Bookings',
                    'Log out from all',
                    'English',
                    'Latviešu',
                    'Uploaded file invalid',
                    'The file must be an image less than 5 MB',
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
                    'Jauns pieraksts',
                    'Filtri',
                    'Diena',
                    'Nedēļa',
                    'Mēnesis',
                    'Atrašanās vieta',
                    'Pakalpojuma sniedzējs',
                    'Pakalpojumi',
                    'Klienti',
                    'Lietotāji',
                    'Vārds',
                    'Tiesības',
                    'Lietotājs kopš',
                    'Root',
                    'Administrators',
                    'Lietotājs',
                    'Jauns lietotājs',
                    'Čats',
                    'Ekrāns',
                    'Klienti & lietotāji',
                    'Nosūtīt ziņu',
                    'Profils',
                    'Organizācijas iestatījumi',
                    'Rēķini & apmaksa',
                    'Statusa kods',
                    'Klienta API',
                    'URL',
                    'Mans profils',
                    'Iestatījumi',
                    'Iziet',
                    'Kalendārs',
                    'Filiāles',
                    'Pakalpojuma sniedzēji',
                    'Admin panelis',
                    'Vāja parole',
                    'Parolei vajag saturēt simbolus, ciparus un lielos un mazos burtus.',
                    'Lietotājs jau ir reģistrēts',
                    'Šāds lietotājs jau ir reģistrēts.',
                    'Organizācija jau ir reģistrēta',
                    'Šāda organizācija jau ir reģistrēta.',
                    'Nav aizpildīti visi lauki',
                    'Visiem laukiem ir jābūt aizpildītiem.',
                    'Nepareizs e-pasts vai atslēga',
                    'Ievadītais e-pasts vai atslēga nav pareiza vai ir beigusies.',
                    'Nepareizs lietotājs vai parole',
                    'Ievadītais lietotājvārds vai parole nav pareiza.',
                    'Nepareizi ievadīta informācija',
                    'Informācija, kas tika ievadīta nav pareiza. Lūdzu mēģiniet vēlreiz!',
                    'IP adrese bloķēta',
                    'Jūsu IP adrese ir bloķēta, parāk daudz nevaiksmīgi mēģinājumi.',
                    'Kļūda',
                    'Ir notikusi kļūda, lūdzu mēģiniet vēlreiz!',
                    'Organizācija',
                    'Sūtīt',
                    'Sūtīt ziņu',
                    'Nosūtīt visiem',
                    'Organizācijas nosaukums',
                    'Organizācijas veids',
                    'Saglabāt iestatījumus',
                    'Jūsu abonaments',
                    'Mēnesis',
                    'Mainīt abonamenta plānu',
                    'Gads',
                    'Uz visu laiku',
                    'Tēma',
                    'Valoda',
                    'Profila attēls',
                    'Augšuplādēt...',
                    'Lietotāju iestatījumi',
                    'Pārskats',
                    'Peļņa',
                    'Tuvākie pieraksti',
                    'Apstiprināts',
                    'Pieraksti',
                    'Iziet visur',
                    'English',
                    'Latviešu',
                    'Fails nav pareizs',
                    'Failam ir jābūt attēlam ne lielākam par 5 MB',
                ]
            ],
        ];

        return [$language_strings, $languages];
    }
}

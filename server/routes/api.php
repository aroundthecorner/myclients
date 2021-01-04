<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\LanguagesController;
use App\Http\Controllers\ProjectAgeController;
use App\Http\Controllers\OrganizationTypesController;

/**
 * Authentication
 */
Route::post('login',                        [AuthController::class, 'login']);
Route::post('register',                     [AuthController::class, 'register']);
Route::post('check-user-exists',            [AuthController::class, 'checkUserExists']);
Route::post('forgot-password',              [AuthController::class, 'forgotPassword']);
Route::get('reset-password/{token}',        function ($token) {})->name('password.reset');
Route::post('reset-password',               [AuthController::class, 'resetPassword']);


/**
 * Organization types
 */
Route::get('organization-types',            [OrganizationTypesController::class, 'index']);
Route::get('languages',                     [LanguagesController::class, 'index']);


/**
 * Project age
 */
Route::get('project-age.svg',               [ProjectAgeController::class, 'index']);


/**
 * Area 51
 */
Route::get('area51', function() {
    // 
});
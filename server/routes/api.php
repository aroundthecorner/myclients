<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\LanguagesController;
use App\Http\Controllers\ProjectAgeController;
use App\Http\Controllers\UserOnlineController;
use App\Http\Controllers\UserActiveController;
use App\Http\Controllers\OrganizationTypesController;

/**
 * Authentication
 */
Route::post('login',                            [AuthController::class, 'login']);
Route::post('logout/{type}',                    [AuthController::class, 'logout']);
Route::post('register',                         [AuthController::class, 'register']);
Route::post('check-user-exists',                [AuthController::class, 'checkUserExists']);
Route::post('check-organization-exists',        [AuthController::class, 'checkOrganizationExists']);
Route::post('forgot-password',                  [AuthController::class, 'forgotPassword']);
Route::get('reset-password/{token}',            function ($token) {})->name('password.reset');
Route::post('reset-password',                   [AuthController::class, 'resetPassword']);


/**
 * Organization types
 */
Route::get('organization-types',                [OrganizationTypesController::class, 'index']);
Route::get('languages',                         [LanguagesController::class, 'index']);


/**
 * User online
 */
Route::post('user-online',                      [UserOnlineController::class, 'store']);


/**
 * Use active
 */
Route::post('user-is-active',                   [UserActiveController::class, 'store']);


/**
 * Project age
 */
Route::get('project-age.svg',                   [ProjectAgeController::class, 'index']);


/**
 * User profile picture
 */
Route::post('user-settings/profile-picture',    [UserProfilePictureController::class, 'store']);


/**
 * User settings
 */
Route::patch('user-settings',                   [UserProfilePictureController::class, 'update']);


/**
 * Area 51
 */
Route::get('area51', function() {
    // return request()->user();
    // return request()->user()->currentAccessToken();
    // return request()->user()->currentAccessToken()->delete();
});
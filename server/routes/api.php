<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
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
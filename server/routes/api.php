<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\OrganizationTypesController;

/**
 * Authentication
 */
Route::post('login',                        [AuthController::class, 'login']);
Route::post('register',                     [AuthController::class, 'register']);
Route::post('auth/check-user-exists',       [AuthController::class, 'checkUserExists']);

/**
 * Organization types
 */
Route::get('organization-types',            [OrganizationTypesController::class, 'index']);
<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;

/**
 * Authentication
 */
Route::post('login',        [AuthController::class, 'login']);
Route::post('register',     [AuthController::class, 'register']);

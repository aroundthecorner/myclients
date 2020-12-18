<?php

namespace App\Http\Controllers;

use Exception;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    /**
     * Log in a user
     */
    public function login(Request $request)
    {
        $user = User::where('email', $request->email)->first();

        try {
            $credentials = request(['email', 'password']);

            if (!Auth::attempt($credentials))
            {
                return response()->json([
                    'status_code' => 500,
                    'message' => 'Unauthorized',
                ]);
            }

            if (!Hash::check($request->password, $user->password, [])) {
                throw new Exception('Error occured while loggin in.');
            }

            $token = $user->createToken('authToken')->plainTextToken;

            return response()->json([
                'status_code' => 200,
                'message' => 'Success',
                'access_token' => $token,
                'token_type' => 'Bearer',
                'user' => $user,
            ]);
        } catch (Exception $error) {
            return response()->json([
                'status_code' => 500,
                'message' => 'Error occured while loggin in.',
                'error' => $error,
            ]);
        }
    }

    /**
     * Register a user
     */
    public function register()
    {
        $user = new User;
        $user->email = request('email');
        $user->name = request('name');
        $user->profile_picture = 'img/default_profile_picture.png';
        $user->password = bcrypt(request('password'));
        $user->email_verified_at = now();

        $user->save();
    }

    /**
     * Check if a email exists
     */
    public function checkUserExists()
    {
        $email = request('email');

        $user = User::whereEmail($email)->first();

        return response()->json([
            'user_exists' => ($user) ? true : false
        ]);
    }
}
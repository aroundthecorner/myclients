<?php

namespace App\Http\Controllers;

use Exception;
use App\Models\User;
use App\Models\Organization;
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
        $validated = request()->validate([
            'email' => 'email|unique:users',
            'name' => 'required',
            'organizationTypeId' => 'required',
            'organizationName' => 'required',
            'password' => 'required',
        ]);

        $organization = Organization::create([
            'description' => request('organizationName'),
            'organization_type_id' => request('organizationTypeId'),
        ]);

        $user = new User;
        $user->email = request('email');
        $user->name = request('name');
        $user->organization_id = $organization->id;
        $user->password = bcrypt(request('password'));
        $user->profile_picture = 'img/default_profile_picture.png';
        $user->email_verified_at = now();

        $user->save();

        return response()->json(['success' => true]);
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
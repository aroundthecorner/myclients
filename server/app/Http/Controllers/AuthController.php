<?php

namespace App\Http\Controllers;

use Exception;
use App\Models\User;
use Illuminate\Support\Str;
use App\Models\Organization;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Password;
use Illuminate\Auth\Events\PasswordReset;
use App\Http\Requests\RegisterUserRequest;
use Illuminate\Support\Facades\RateLimiter;

class AuthController extends Controller
{
    /**
     * Instantiate a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('sanitize')->only(['register']);
        $this->middleware('auth:sanctum')->only(['logout']);
    }

    /**
     * Log in a user
     */
    public function login(Request $request)
    {
        $this->checkTooManyFailedAttempts();

        $user = User::with('organization:id,description,organization_type_id')
                    ->where('email', $request->email)
                    ->first();

        try {
            $credentials = request(['email', 'password']);

            if (!Auth::attempt($credentials))
            {
                RateLimiter::hit($this->throttleKey(), $seconds = 3600);

                return response()->json([
                    'status_code' => 401,
                    'message' => 'Unauthorized',
                ]);
            }

            if (!Hash::check($request->password, $user->password, [])) {
                throw new Exception('Error occured while loggin in.');
            }

            $token = $user->createToken('authToken')->plainTextToken;

            RateLimiter::clear($this->throttleKey());

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
     * Logout a user
     */
    public function logout($type)
    {
        if ($type == 'logout') {
            auth()->user()->currentAccessToken()->delete();
        } else {
            auth()->user()->tokens()->delete();
        }
    }

    /**
     * Register a user
     */
    public function register(RegisterUserRequest $request)
    {
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

    /**
     * Check if an organization exists
     */
    public function checkOrganizationExists()
    {
        $organizationName = request('organizationName');

        $organization = Organization::whereDescription($organizationName)->first();

        return response()->json([
            'organization_exists' => ($organization) ? true : false
        ]);
    }

    /**
     * User requested a password reset link
     */
    public function forgotPassword()
    {
        request()->validate(['email' => 'required|email|exists:users,email']);

        $status = Password::sendResetLink(request()->only('email'));

        return $status === Password::RESET_LINK_SENT
                ? response()->json(['status' => 'success'])
                : response()->json(['email' => 'error']);
    }

    /**
     * Reset user password
     */
    public function resetPassword()
    {
        request()->validate([
            'token' => 'required',
            'email' => 'required|email',
            'password' => 'required',
        ]);

        $status = Password::reset(
            request()->only('email', 'password', 'password', 'token'),
            
            function ($user, $password) {
                $user->forceFill([
                    'password' => Hash::make($password)
                ])->save();
    
                $user->setRememberToken(Str::random(60));
    
                event(new PasswordReset($user));
            }
        );
    
        return $status == Password::PASSWORD_RESET
                    ? response()->json(['status' => 'success'])
                    : response()->json(['status' => 'error']);
    }

    /**
     * Get the rate limiting throttle key for the request.
     *
     * @return string
     */
    private function throttleKey()
    {
        return Str::lower(request('email')) . '|' . request()->ip();
    }

    /**
     * Ensure the login request is not rate limited.
     *
     * @return void
     */
    private function checkTooManyFailedAttempts()
    {
        if (! RateLimiter::tooManyAttempts($this->throttleKey(), 10)) {
            return;
        }

        throw new Exception('IP address banned. Too many login attempts.');
    }
}
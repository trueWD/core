<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use App\Models\User;

class AuthController extends Controller
{
    /*
     * --------------------------------------------------------------
     * Regsister
     * --------------------------------------------------------------
     */
    public function register(Request $request)
    {
        $registerUserData = $request->validate([
            'name' => 'required|string',
            'email' => 'required|string|email|unique:users',
            'password' => 'required|min:8'
        ]);
        $user = User::create([
            'name' => $registerUserData['name'],
            'email' => $registerUserData['email'],
            'password' => Hash::make($registerUserData['password']),
        ]);
        return response()->json([
            'message' => 'User Created ',
            'type' => 'success ',
        ]);
    }

    /*
    * --------------------------------------------------------------
    * Login
    * --------------------------------------------------------------
    */
    public function login(Request $request)
    {
        $request->validate([
            'email' => 'required|email',
            'password' => 'required',
        ]);

        if (!auth()->attempt($request->only('email', 'password'))) {
            return response([
                'type' => 'error',
                'message' => 'Kayıt bulunmadı, Girdiğiniz bilgileri kontrol edin.'
            ], 401);
        }

        $user = auth()->user();
        $token = $user->createToken('token')->plainTextToken;

        return response([
            'message' => 'Giriş Başarılı',
            'type' => 'success',
            'user' => $user,
            'token' => $token
        ]);
    }

    /*
    * --------------------------------------------------------------
    * Logout
    * --------------------------------------------------------------
    */
    public function logout()
    {
        auth()->user()->tokens()->delete();

        return response()->json([
            "message" => "logged out",
            'type' => 'success ',
        ]);
    }
}

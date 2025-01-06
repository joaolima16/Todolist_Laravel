<?php

namespace App\Http\Controllers\Api\User;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\LoginRequest;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
class UserControlller extends Controller
{
    public function loginUser(LoginRequest $request)
    {
        $credentials = $request->only('email', 'password');
        if (Auth::attempt($credentials)) {
            $user = Auth::user();
            return response()->json([
                'status' => true,
                'msg' => 'Usuário logado',
                'token' => $user->createToken($user->email)->plainTextToken
            ], 200);
        } else {
            return response()->json([
                'status' => false,
                'msg' => 'Email ou senha incorretos!'
            ], 401);
        }
    }
    public function registerUser(Request $request)
    {
        $response = [];
        $userData = $request->only('name', 'email', 'password');
        try {
            $user = User::create([
                'name' => $userData['name'],
                'email' => $userData['email'],
                'password' => Hash::make($userData['password']),
                'email_verified_at' => now()
            ]);
            return response()->json([
                'status' => true,
                'msg' => 'Usuário criado',
                'data' => $user
            ], 201);
        } catch (\Exception $ex) {
            return response()->json([
                'status' => false,
                'msg' => $ex->getMessage()
            ], 400);
        }
    }
    // Falta implementar 

    // public function logoutUser(Request $request){
    //     // $user = User::find($id);
    //     return [
    //         $request->user()->currentAccessToken()
    //     ];
    // }
}

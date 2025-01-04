<?php

namespace App\Http\Controllers\Api\User;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\LoginRequest;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
class UserControlller extends Controller
{
    public function loginUser(LoginRequest $request)
    {
        $credentials = $request->all();
        if (Auth::attempt($credentials)) {
            return "usuário correto";
        } else {
            return 'usuário incorreto';
        }
    }
    public function registerUser(Request $request)
    {
        $response = [];
        $userData = $request->only('name','email', 'password');
        try {
            $user = User::create($userData);
            $response = [
                'status' => true,
                'msg' => 'Usuário criado',
                'data' => $user
            ];
        } catch (\Exception $ex) {
            $response = [
                'status' => false,
                'msg' => $ex->getMessage()
            ];
        }
        return $response;
    }
}

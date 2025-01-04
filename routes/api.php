<?php

use App\Http\Controllers\Api\Task\TaskController;
use App\Http\Controllers\Api\User\UserControlller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;




Route::middleware(['auth:sanctum'])->get('/user', function (Request $request) {
    return $request->user();
});
Route::middleware('auth:sanctum')->group(function() {
    Route::prefix('/task')->group(function () {
        Route::get('/{id}', [TaskController::class, 'getTasks']);
    });
});
Route::prefix('/user')->group(function(){
    Route::post('/login', [UserControlller::class, 'loginUser']);
    Route::post('/register', [UserControlller::class, 'registerUser']);
}); 
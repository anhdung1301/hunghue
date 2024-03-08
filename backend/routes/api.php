<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\UsersController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('/users/login', [UsersController::class, 'onLogin'])->name('user.login');
Route::post('/users', [UsersController::class, 'onRegister'])->name('user.register');
Route::post('/users/logout', [UsersController::class, 'logout'])->name('user.logout')->middleware('auth:sanctum');

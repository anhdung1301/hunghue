<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\UsersController;
use App\Http\Controllers\Api\CustomerController;

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

Route::post('/login', [UsersController::class, 'onLogin']);
Route::post('/users', [UsersController::class, 'onRegister'])->name('user.register');
Route::post('/users/logout', [UsersController::class, 'logout'])->name('user.logout')->middleware('auth:sanctum');
Route::middleware('auth:sanctum')->group(function () {
    Route::get('customer', [CustomerController::class, "index"]);
    Route::post("customer",[CustomerController::class,"saveCustomer"]);
    Route::get('/customer/{id}', [CustomerController::class, 'show']);
    Route::delete('/customer/{id}', [ResourceController::class, 'destroy']);
});



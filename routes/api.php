<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Auth\AuthController;
use App\Http\Controllers\Admin\UserController;
use App\Http\Controllers\Admin\RoleController;





Route::prefix('v1')->group(function () {

    Route::controller(AuthController::class)->group(function () {
        Route::post('/register', 'register');
        Route::post('/login', 'login');
    });


    Route::middleware(['auth:sanctum'])->group(function () {

        Route::controller(AuthController::class)->group(function () {
            Route::post('/logout', 'logout');
        });

        Route::get('/user', function (Request $request) {
            $user = $request->user();
            $user->getFirstMedia();
            $user->impersonated_by = session()->get('impersonated_by');
            return $user;
        });

        Route::prefix('admin')->group(function () {


            Route::controller(UserController::class)->group(function () {
                Route::get('/users/list', 'index');
                Route::get('/users/{id}', 'edit');
                Route::post('/users', 'store');
                Route::post('/users/update', 'update');
                Route::post('/users/user_roles', 'user_roles');
                Route::post('/users/login_as', 'login_as');
                Route::post('/users/leave_user', 'leave_user');
            });

            Route::controller(RoleController::class)->group(function () {
                Route::post('/roles', 'store');
                Route::get('/roles/list', 'index');
                Route::post('/roles/show', 'show');
                Route::post('/roles/updatePermissionsStatus', 'updatePermissionStatus');
                Route::post('/roles/users', 'users');
                Route::post('/roles/add_or_remove', 'add_or_remove');
                Route::post('/roles/destroy', 'destroy');

            });

        });









    });

});






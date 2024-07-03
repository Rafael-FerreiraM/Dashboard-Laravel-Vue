<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Http\Request;
use App\Http\Controllers\ApiDash\HomeController;

Route::prefix('api')->group(function () {
    Route::get('/home', [HomeController::class, 'index']);
   
});

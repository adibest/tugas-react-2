<?php

namespace App\Http\Controllers;

class CategoryController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function index()
    {
        $categories = app('db')->table('category')->get();

        return response()->json($categories);
    }
}
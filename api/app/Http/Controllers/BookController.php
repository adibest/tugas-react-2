<?php

namespace App\Http\Controllers;

class BookController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function index()
    {
        $books = app('db')->table('book')->get();

        return response()->json($books);
    }
}
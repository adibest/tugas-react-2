<?php

namespace App\Http\Controllers;

use Illuminate\App\Request;

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

    public function create(Request $request)
    {
        $data = [
            'name' => $request->name
        ];

        app('db')->table('category')->insert($data);
    }

    public function delete($id)
    {
        app('db')->table('category')->where('id', $id)->delete();
    }
}
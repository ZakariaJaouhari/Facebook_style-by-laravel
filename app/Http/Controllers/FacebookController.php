<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Newuser;

class FacebookController extends Controller
{
    //
    public function Ajouter(Request $request)
{
    dd($request->all());

    $validatedData = $request->validate([
        'nameP'   => 'required|string',
        'surname' => 'required|string',
        'mobile'  => 'required|string',
        'password'=> 'required|string',
        'date'    => 'required|date',  
        'gender'  => 'required|in:male,female', 
    ]);

    Newuser::create([
        'Firstname'=> $validatedData['nameP'],
        'Surname'=> $validatedData['surname'],
        'email'=> $validatedData['mobile'],
        'password'=> $validatedData['password'],
        'date_birth'=> $validatedData['date'],  
        'gender'=> $validatedData['gender'], 
    ]);

    return redirect()->back()->with('success', 'Inscription réussie!');
}
}

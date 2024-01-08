<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Newuser;

class FacebookController extends Controller
{
    //
    public function Ajouter(Request $request)
    {

        $validatedData = $request->validate([
            'nameP' => 'required|string',
            'surname' => 'required|string',
            'mobile' => 'required|string',
            'password' => 'required|string',
            'day' => 'required|numeric',
            'month' => 'required|numeric',
            'year' => 'required|numeric',



        ]);

        $dateOfBirth = $validatedData['year'] . '-' . $validatedData['month'] . '-' . $validatedData['day'];

        Newuser::create([
            'Firstname' => $validatedData['nameP'],
            'Surname' => $validatedData['surname'],
            'email' => $validatedData['mobile'],
            'password' => $validatedData['password'],
            'date_birth' => $dateOfBirth,


        ]);

        return redirect()->back()->with('success', 'Inscription réussie!');
    }
}

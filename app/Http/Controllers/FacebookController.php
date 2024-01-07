<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Newuser;

class FacebookController extends Controller
{
    //
    public function Ajouter(Request $request)
{
    // Validate the form data
    $validatedData = $request->validate([
        'nameP'   => 'required|string',
        'surname' => 'required|string',
        'mobile'  => 'required|string',
        'password'=> 'required|string',
        'date'    => 'required|date',  // Add validation rule for date
        'gender'  => 'required|in:male,female',  // Add validation rule for gender
    ]);

    // Create a new user in the database
    Newuser::create([
        'Firstname'           => $validatedData['nameP'],
        'Surname'        => $validatedData['surname'],
        'email'        => $validatedData['mobile'],
        'password'      => $validatedData['password'],
        'date_birth'=> $validatedData['date'],  // Adjust column name if needed
        'gender'        => $validatedData['gender'], // Adjust column name if needed
    ]);

    // Redirect or perform other actions after registration
    return redirect()->back()->with('success', 'Inscription réussie!');
}
}

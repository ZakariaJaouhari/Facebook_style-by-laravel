<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Newuser extends Model
{
    use HasFactory;
    protected $table = 'utilisateurs';

    protected $fillable = [
        'Firstname',
        'Surname',
        'email',
        'password',
        'date_birth',

    ];
}

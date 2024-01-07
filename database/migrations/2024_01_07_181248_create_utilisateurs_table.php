<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{

    public function up(): void
    {
        Schema::create('utilisateurs', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->string('Firstname');
            $table->string('Surname');
            $table->string('email')->unique();
            $table->string('password');
            $table->date('date_birth');
            $table->string('gender');
        });
    }


    public function down(): void
    {
        Schema::dropIfExists('utilisateurs');
    }
};

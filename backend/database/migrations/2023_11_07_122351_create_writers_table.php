<?php

use App\Models\Writer;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('writers', function (Blueprint $table) {
            $table->string('nev');
            $table->date('szul');
            $table->timestamps();
        });

        Writer::create(['nev' => 'Béla', 'szul' => '2020-02-20']);
        Writer::create(['nev' => 'Viktor', 'szul' => '2020-02-20']);
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('writers');
    }
};

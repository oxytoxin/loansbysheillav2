<?php

    use Illuminate\Database\Migrations\Migration;
    use Illuminate\Database\Schema\Blueprint;
    use Illuminate\Support\Facades\Schema;

    return new class extends Migration {
        public function up(): void
        {
            Schema::create('reviews', function (Blueprint $table) {
                $table->id();
                $table->string('source');
                $table->string('author');
                $table->string('img_url');
                $table->integer('rating');
                $table->text('content');
                $table->string('date');
                $table->timestamps();
            });
        }
    };

<?php

    use Illuminate\Database\Migrations\Migration;

    return new class extends Migration {
        public function up(): void
        {
            if (DB::connection()->getDriverName() === 'pgsql') {
                DB::statement("SELECT setval(pg_get_serial_sequence('users', 'id'), 7, false);");
            }
        }
    };

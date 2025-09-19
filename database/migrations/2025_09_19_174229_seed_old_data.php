<?php

    use Database\Seeders\DatabaseSeeder;
    use Database\Seeders\MigrationsTableSeeder;
    use Database\Seeders\ReviewsTableSeeder;
    use Database\Seeders\UsersTableSeeder;
    use Illuminate\Database\Migrations\Migration;

    return new class extends Migration {
        public function up(): void
        {
            $seeder = app(DatabaseSeeder::class);
            $seeder->call(ReviewsTableSeeder::class);
            $seeder->call(UsersTableSeeder::class);
            $seeder->call(MigrationsTableSeeder::class);
        }
    };

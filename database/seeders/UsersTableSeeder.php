<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class UsersTableSeeder extends Seeder
{

    /**
     * Auto generated seed file
     *
     * @return void
     */
    public function run()
    {
        

        \DB::table('users')->delete();
        
        \DB::table('users')->insert(array (
            0 => 
            array (
                'id' => 1,
                'name' => 'Mark Casero',
                'email' => 'mark@loansbysheilla.com',
                'email_verified_at' => NULL,
                'password' => '$2y$12$Va1bkkhXqBD/.XcCmh2c2.bGfKNZH5bMOD8Wsi8fNnlxobA4d1AzK',
                'remember_token' => NULL,
                'created_at' => '2025-08-22 15:00:14',
                'updated_at' => '2025-08-22 15:00:14',
                'super' => 1,
                'avatar' => NULL,
                'preferences' => NULL,
                'last_login' => NULL,
            ),
            1 => 
            array (
                'id' => 3,
                'name' => 'Karen Tungal',
                'email' => 'karen@loansbysheilla.com',
                'email_verified_at' => NULL,
                'password' => '$2y$12$y8QfnxteT40AcJWtvajyVOK3MOttUsoKJbTWli1OyWl9id11lHcTu',
                'remember_token' => NULL,
                'created_at' => '2025-08-22 15:20:27',
                'updated_at' => '2025-08-22 15:20:27',
                'super' => 1,
                'avatar' => NULL,
                'preferences' => NULL,
                'last_login' => NULL,
            ),
        ));
        
        
    }
}
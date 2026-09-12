<?php

use App\Models\User;
use Database\Seeders\AdminUserSeeder;
use Illuminate\Support\Facades\Hash;

test('admin user seeder creates the login account and can be run repeatedly', function () {
    $this->seed(AdminUserSeeder::class);
    $this->seed(AdminUserSeeder::class);

    $admin = User::query()->where('email', 'justin@gmail.com')->sole();

    expect($admin->name)->toBe('Justin')
        ->and($admin->role)->toBe('admin')
        ->and(Hash::check('justin123', $admin->password))->toBeTrue()
        ->and(User::query()->where('email', 'justin@gmail.com')->count())->toBe(1);
});

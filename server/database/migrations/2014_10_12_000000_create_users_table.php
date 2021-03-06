<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->string('name')->nullable();
            $table->string('email')->unique()->nullable();
            $table->enum('role', ['root', 'admin', 'user'])->default('user');
            $table->integer('role_order');
            $table->string('profile_picture')->nullable();
            $table->enum('language', ['en', 'lv'])->default('en');
            $table->string('theme')->default('Aconite');
            $table->integer('organization_id');
            $table->dateTime('last_click', $precision = 0)->nullable();
            $table->dateTime('last_ping', $precision = 0)->nullable();
            $table->timestamp('email_verified_at')->nullable();
            $table->string('password');
            $table->rememberToken();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('users');
    }
}

<?php

    namespace App\Models;

    use Illuminate\Database\Eloquent\Casts\Attribute;
    use Illuminate\Database\Eloquent\Model;

    class Review extends Model
    {
        protected $appends = ['excerpt'];

        protected function excerpt(): Attribute
        {
            return Attribute::make(
                get: fn($value, array $attributes) => str($this->content)->words(40)->toString(),
            );
        }
    }

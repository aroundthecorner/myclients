<?php

namespace App\Filters;

class UserFilters extends Filters
{
    protected $filters = ['search', 'name', 'email', 'role', 'created_at'];

    public function search($query)
    {
        return $this->builder->where('name', 'like', "%$query%");
    }

    public function name()
    {
        return $this->builder;
    }

    public function email()
    {
        return $this->builder;
    }

    public function role()
    {
        return $this->builder;
    }

    public function created_at()
    {
        return $this->builder;
    }
}
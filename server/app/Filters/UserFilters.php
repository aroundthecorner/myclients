<?php

namespace App\Filters;

class UserFilters extends Filters
{
    protected $filters = ['search', 'name', 'email', 'role', 'created_at'];

    public function search($keyword)
    {
        return $this->builder->where(function ($query) use ($keyword) {
               $query->where('name', 'like', "%$keyword%")
                     ->orWhere('email', 'like', "%$keyword%");
        });
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
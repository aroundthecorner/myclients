<?php

namespace App\Filters;

abstract class Filters
{
    protected $builder;

    public function apply($builder)
    {
        $this->builder = $builder;

        foreach ($this->filters as $filter) {
            if ($this->hasFilter($filter)) {
                $this->$filter(request($filter));
            }
        }

        return $this->builder;
    }

    public function hasFilter($filter)
    {
        return request()->has($filter) && request($filter) !== '';
    }
}
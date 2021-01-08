<template>
    <div class="page-navigation">
        <router-link to="/settings/profile" class="page-navigation__item page-navigation__item--active">
            Profile Settings
        </router-link>

        <router-link to="/settings/organization" class="page-navigation__item">
            Organization Settings
        </router-link>

        <router-link to="/settings/users" class="page-navigation__item">
            Users
        </router-link>

        <router-link to="/settings/plan-billing" class="page-navigation__item">
            Plan & Billing
        </router-link>
    </div>
</template>
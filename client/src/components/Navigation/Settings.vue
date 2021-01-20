<template>
    <div class="page-navigation">
        <router-link to="/settings/profile" class="page-navigation__item page-navigation__item--active">
            {{ lang('Profile Settings') }}
        </router-link>

        <router-link to="/settings/organization" class="page-navigation__item">
            {{ lang('Organization Settings') }}
        </router-link>

        <router-link to="/settings/users" class="page-navigation__item">
            {{ lang('Users') }}
        </router-link>

        <router-link to="/settings/plan-billing" class="page-navigation__item">
            {{ lang('Plan & Billing') }}
        </router-link>
    </div>
</template>

<script setup>
    import useLanguage from '../../features/useLanguage.js'
    
    const { lang } = useLanguage()
</script>
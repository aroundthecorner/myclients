<template>
    <div class="page-navigation">
        <router-link to="/admin-panel/chat" class="page-navigation__item">
            {{ lang('Chat') }}
        </router-link>

        <router-link to="/admin-panel/screen" class="page-navigation__item">
            {{ lang('Screen') }}
        </router-link>

        <router-link
            to="/admin-panel/clients-users/clients"
            class="page-navigation__item"
            :class="{ 'router-link-exact-active': isClientsUsersPage }">

            {{ lang('Clients & Users') }}
        </router-link>

        <router-link to="/admin-panel/send-message" class="page-navigation__item">
            {{ lang('Send Message') }}
        </router-link>
    </div>
</template>

<script setup>
    import { computed } from 'vue'
    import router from '../../routes.js'
    import useLanguage from '../../features/useLanguage.js'

    const { lang } = useLanguage()

    const isClientsUsersPage = computed(() => {
        return router.currentRoute.value.path.includes('/admin-panel/clients-users')
    })
</script>
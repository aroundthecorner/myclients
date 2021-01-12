<template>
    <div class="page-navigation">
        <router-link to="/admin-panel/chat" class="page-navigation__item">
            Chat
        </router-link>

        <router-link to="/admin-panel/screen" class="page-navigation__item">
            Screen
        </router-link>

        <router-link
            to="/admin-panel/clients-users/clients"
            class="page-navigation__item"
            :class="{ 'router-link-exact-active': isClientsUsersPage }">

            Clients & Users
        </router-link>
    </div>
</template>

<script setup>
    import { computed } from 'vue'
    import router from '../../routes.js'

    const isClientsUsersPage = computed(() => {
        return router.currentRoute.value.path.includes('/admin-panel/clients-users')
    })
</script>
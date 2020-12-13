<template>
    <div class="sidebar">
        <div class="sidebar__profile">
            <img
                class="sidebar__profile-pic"
                :src="`${env('VITE_SERVER_URL')}/storage/img/${user.profile_picture}`"
            />

            <div class="sidebar__name">
                {{ user.name }}
            </div>
        </div>

        <router-link to="/" class="sidebar__item">
            <i class="sidebar__icon lab la-buffer"></i>
            <span class="sidebar__item-text">Dashboard</span>
        </router-link>

         <router-link to="/calendar" class="sidebar__item">
            <i class="sidebar__icon las la-calendar"></i>
            <span class="sidebar__item-text">Calendar</span>
        </router-link>

        <div class="sidebar__item">
            <i class="sidebar__icon lab la-elementor"></i>
            <span class="sidebar__item-text">Services</span>
        </div>

        <div class="sidebar__item">
            <i class="sidebar__icon las la-map-marker"></i>
            <span class="sidebar__item-text">Locations</span>
        </div>

        <div class="sidebar__item">
            <i class="sidebar__icon las la-user-friends"></i>
            <span class="sidebar__item-text">Service providers</span>
        </div>

        <div class="spacer"></div>

        <div class="sidebar__item">
            <i class="sidebar__icon las la-cog"></i>
            <span class="sidebar__item-text">Settings</span>
        </div>
    </div>
</template>

<script setup>
    import { computed } from 'vue'
    import { useStore } from 'vuex'
    import useEnv from '../features/useEnv.js'

    const { env } = useEnv()
    const store = useStore()

    const user = computed(() => store.state.user)
</script>
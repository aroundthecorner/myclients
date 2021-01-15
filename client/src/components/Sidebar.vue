<template>
    <div class="sidebar">
        <div class="sidebar-content">
            <dropdown-menu
                placement="right"
                offsetY="10"
                offsetX="-10"
                v-model="showProfileMenu">

                <div
                    @click="showProfileMenu = !showProfileMenu"
                    class="sidebar__profile">

                    <img
                        class="sidebar__profile-pic"
                        :src="`${env('VITE_SERVER_URL')}/${user.profile_picture}`"
                    />

                    <div class="sidebar__name">
                        {{ user.name }}
                    </div>

                    <div class="sidebar__organization">
                        {{ user.organization.description }}
                    </div>
                </div>

                <template #dropdown>
                    <div class="dropdown-menu">
                        <router-link
                            to="/settings/profile"
                            class="dropdown-menu__item p-0">

                            <div
                                class="dropdown-menu__item-content"
                                @click="showProfileMenu = false">
                                My profile
                            </div>
                        </router-link>

                        <router-link
                            to="/settings/profile"
                            class="dropdown-menu__item p-0">
                            
                            <div
                                class="dropdown-menu__item-content"
                                @click="showProfileMenu = false">
                                Settings
                            </div>
                        </router-link>

                        <div
                            @click="showProfileMenu = false; logout()"
                            class="dropdown-menu__item">
                            Logout
                        </div>
                    </div>
                </template>
            </dropdown-menu>

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

            <router-link
                to="/admin-panel/chat"
                class="sidebar__item"
                :class="{ 'router-link-exact-active': isActiveAdminPanel }">

                <i class="sidebar__icon las la-cog"></i>
                <span class="sidebar__item-text">Admin panel</span>
            </router-link>

            <router-link
                to="/settings/profile"
                class="sidebar__item"
                :class="{ 'router-link-exact-active': isActiveSettings }">

                <i class="sidebar__icon las la-cog"></i>
                <span class="sidebar__item-text">Settings</span>
            </router-link>
        </div>
    </div>
</template>

<script setup>
    import { useStore } from 'vuex'
    import router from '../routes.js'
    import { computed, ref } from 'vue'
    import useEnv from '../features/useEnv.js'
    import useAuth from '../features/useAuth.js'
    import DropdownMenu from './DropdownMenu.vue'

    const { env } = useEnv()
    const store = useStore()
    const { logout } = useAuth()

    const showProfileMenu = ref(false)
    const user = computed(() => store.state.user)

    const isActiveSettings = computed(() => {
        return router.currentRoute.value.path.startsWith('/settings')
    })

    const isActiveAdminPanel = computed(() => {
        return router.currentRoute.value.path.startsWith('/admin-panel')
    })
</script>
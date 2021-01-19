<template>
    <teleport to="head">
        <title>Message - myclients</title>
    </teleport>

    <div class="page">
        <div class="page-container">
            <navigation-admin-panel />

            <div class="page-container__content">
                <div class="admin-users">
                    <div class="admin-users__left">
                        <dropdown-menu
                            placement="bottom"
                            offsetY="10px"
                            activatorFullWidth
                            v-model="showOrganizationsMenu">

                            <button-app
                                @click="showOrganizationsMenu = !showOrganizationsMenu"
                                class="button--flat inline w-full dropdown-arrows">
                                Organization
                            </button-app>

                            <template #dropdown>
                                <div class="dropdown-menu">
                                    <div class="dropdown-menu__item">
                                        Language 1
                                    </div>

                                    <div class="dropdown-menu__item">
                                        Language 2
                                    </div>
                                </div>
                            </template>
                        </dropdown-menu>

                        <div class="admin-users__users-label">
                            <div class="admin-users__users-title">Users</div>
                            <div class="admin-users__users-count">99</div>
                        </div>

                        <div class="admin-users__users">
                            <div v-for="n in 5" :key="n" class="admin-users__user">
                                <div class="admin-users_user-pic">
                                    <img
                                        class="admin-users__user-img"
                                        src="http://localhost:41166/img/martins_profile_picture.png"
                                    />

                                    <div class="admin-users__user-online"></div>
                                </div>

                                <div class="admin-users__username">
                                    <div class="admin-users__user-name">Henry Boyd</div>
                                    <div class="admin-users__user-organization">Organization</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="admin-users__right">
                        <div class="admin-users__messages overflow-hidden">
                            <textarea class="admin-users__textarea">Content that can contain HTML so be careful!</textarea>
                        </div>

                        <div class="admin-users__action-container">
                            <button-app
                                class="button--primary">
                                Send
                            </button-app>

                            <button-app
                                class="button--primary">
                                Send to all
                            </button-app>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    import { ref } from 'vue';
    import ButtonApp from '../../components/Button.vue'
    import DropdownMenu from '../../components/DropdownMenu.vue'
    import NavigationAdminPanel from '../../components/Navigation/AdminPanel.vue'
    
    const showOrganizationsMenu = ref(false)
</script>
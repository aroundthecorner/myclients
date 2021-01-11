<template>
    <teleport to="head">
        <title>Users settings - myclients</title>
    </teleport>

    <div class="page">
        <div class="page-container">
            <admin-panel-navigation />

            <div class="page-container__content">
                <div class="chat">
                    <div class="chat__left">
                        <dropdown-menu
                            placement="bottom"
                            offsetY="10px"
                            activatorFullWidth
                            v-model="showOrganizationsMenu">

                            <app-button
                                @click="showOrganizationsMenu = !showOrganizationsMenu"
                                class="button--flat inline w-full dropdown-arrows">
                                Organization
                            </app-button>

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

                        <div class="chat__users-label">
                            <div class="chat__users-title">Users</div>
                            <div class="chat__users-count">99</div>
                        </div>

                        <div class="chat__users">
                            <div v-for="n in 5" class="chat__user">
                                <div class="chat_user-pic">
                                    <img
                                        class="chat__user-img"
                                        src="http://localhost:41166/img/martins_profile_picture.png"
                                    />

                                    <div class="chat__user-online"></div>
                                </div>

                                <div class="chat__username">
                                    <div class="chat__user-name">Henry Boyd</div>
                                    <div class="chat__user-organization">Organization</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="chat__right">
                        <div class="chat__messages">
                            <div class="chat__message">
                                <div class="chat__message-pic">
                                    <img
                                        class="chat__message-img"
                                        src="http://localhost:41166/img/martins_profile_picture.png"
                                    />
                                </div>

                                <div class="chat__message-msg">
                                    <div class="chat__message-text">Text</div>
                                    <div class="chat__message-ago">9h ago</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    import { onBeforeRouteLeave } from 'vue-router';
    import { onMounted, inject, ref } from 'vue';
    import AppButton from '../../components/Button.vue'
    import DropdownMenu from '../../components/DropdownMenu.vue'
    import AdminPanelNavigation from '../../components/Navigation/AdminPanel.vue'
    
    const progressBar = inject('progressBar')
    const showOrganizationsMenu = ref(false)

    /**
     * Page navigation progress bar
     */
    onBeforeRouteLeave(() => {
        progressBar.start()
    })

    onMounted(() => {
        progressBar.finish()
    })
</script>
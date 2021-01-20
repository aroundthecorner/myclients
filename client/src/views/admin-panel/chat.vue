<template>
    <teleport to="head">
        <title>{{ lang('Chat') }} - myclients</title>
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
                                {{ lang('Organization') }}
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
                            <div class="admin-users__users-title">{{ lang('Users') }}</div>
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
                        <div class="admin-users__messages">
                            <div v-for="n in 10" :key="n" class="admin-users__message">
                                <div class="admin-users__message-pic">
                                    <img
                                        class="admin-users__message-img"
                                        src="http://localhost:41166/img/martins_profile_picture.png"
                                    />
                                </div>

                                <div class="admin-users__message-msg">
                                    <div class="admin-users__message-text">Hi, my name is Bill Gates!</div>
                                    <div class="admin-users__message-ago">9h ago</div>
                                </div>
                            </div>

                            <div class="admin-users__message row-reverse">
                                <div class="admin-users__message-pic">
                                    <img
                                        class="admin-users__message-img"
                                        src="http://localhost:41166/img/martins_profile_picture.png"
                                    />
                                </div>

                                <div class="admin-users__message-msg">
                                    <div class="admin-users__message-text">Hi, my name is Bill Gates!</div>
                                    <div class="admin-users__message-ago text-right">9h ago</div>
                                </div>
                            </div>

                            <div class="admin-users__message row-reverse">
                                <div class="admin-users__message-pic">
                                    <img
                                        class="admin-users__message-img"
                                        src="http://localhost:41166/img/martins_profile_picture.png"
                                    />
                                </div>

                                <div class="admin-users__message-msg">
                                    <div class="admin-users__message-text">Hi, my name is Bill Gates!</div>
                                    <div class="admin-users__message-ago text-right">9h ago</div>
                                </div>
                            </div>
                        </div>

                        <div class="admin-users__send-box">
                            <input
                                class="admin-users__send-input"
                                type="text"
                                placeholder="Your message"
                            />

                            <button-app
                                class="button--primary">
                                {{ lang('Send') }}
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
    import useLanguage from '../../features/useLanguage.js'
    import DropdownMenu from '../../components/DropdownMenu.vue'
    import NavigationAdminPanel from '../../components/Navigation/AdminPanel.vue'
    
    const { lang } = useLanguage()
    const showOrganizationsMenu = ref(false)
</script>
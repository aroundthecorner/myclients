<template>
    <teleport to="head">
        <title>Profile settings - myclients</title>
    </teleport>

    <div class="page">
        <div class="page-container">
            <navigation-settings />

            <div class="page-container__content">
                <div class="settings-items">
                    <div class="settings-item">
                        <div class="settings-item__left">
                            <div class="settings-item__title">
                                Name
                            </div>
                        </div>

                        <div class="settings-item__right">
                            <input
                                type="text"
                                class="app-input w-250"
                                v-model="user.name"
                            />
                        </div>
                    </div>

                    <div class="settings-item">
                        <div class="settings-item__left">
                            <div class="settings-item__title">
                                Email
                            </div>
                        </div>

                        <div class="settings-item__right">
                            <input
                                type="text"
                                class="app-input w-250"
                                v-model="user.email"
                            />
                        </div>
                    </div>

                    <div class="settings-item">
                        <div class="settings-item__left">
                            <div class="settings-item__title">
                                Password
                            </div>
                        </div>

                        <div class="settings-item__right">
                            <input
                                class="app-input w-250"
                                type="password"
                                v-model="password"
                            />
                        </div>
                    </div>

                    <div class="settings-item">
                        <div class="settings-item__left">
                            <div class="settings-item__title">
                                Theme
                            </div>
                        </div>

                        <div class="settings-item__right">
                            <dropdown-menu
                                placement="bottom"
                                v-model="showThemesMenu">

                                <button-app
                                    @click="showThemesMenu = !showThemesMenu"
                                    class="button--flat inline w-250 dropdown-arrows">
                                    Selected theme!
                                </button-app>

                                <template #dropdown>
                                    <div class="dropdown-menu dropdown-menu--theme">
                                        <div class="theme-picker__item theme-picker__item--aconite theme-picker__item--aconite-selected">
                                            <div class="theme-picker__title">Theme</div>
                                            <div class="theme-picker__description">Aconite</div>
                                        </div>

                                        <div class="theme-picker__item theme-picker__item--centaurs">
                                            <div class="theme-picker__title">Theme</div>
                                            <div class="theme-picker__description">Centaurs</div>
                                        </div>

                                        <div class="theme-picker__item theme-picker__item--azkaban">
                                            <div class="theme-picker__title">Theme</div>
                                            <div class="theme-picker__description theme-picker__description--dark">Azkaban</div>
                                        </div>

                                        <div class="theme-picker__item theme-picker__item--dark-forest">
                                            <div class="theme-picker__title">Theme</div>
                                            <div class="theme-picker__description theme-picker__description--dark">Black Forest</div>
                                        </div>
                                    </div>
                                </template>
                            </dropdown-menu>
                        </div>
                    </div>

                    <div class="settings-item">
                        <div class="settings-item__left">
                            <div class="settings-item__title">
                                Language
                            </div>
                        </div>

                        <div class="settings-item__right">
                            <dropdown-menu
                                placement="bottom"
                                v-model="showLanguageMenu">

                                <button-app
                                    @click="showLanguageMenu = !showLanguageMenu"
                                    class="button--flat inline w-250 dropdown-arrows">
                                    Selected language
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
                        </div>
                    </div>

                    <div class="settings-item">
                        <div class="settings-item__left">
                            <div class="settings-item__title">
                                Profile picture
                            </div>
                        </div>

                        <div class="settings-item__right">
                            <button-app class="button--flat inline w-250 text-center">
                                Upload...
                            </button-app>
                        </div>
                    </div>
                </div>

                <button-app class="button--primary inline mt-40">
                    Save settings
                </button-app>
            </div>
        </div>
    </div>
</template>

<script setup>
    import { useStore } from 'vuex'
    import { computed, ref } from 'vue';
    import ButtonApp from '../../components/Button.vue'
    import DropdownMenu from '../../components/DropdownMenu.vue'
    import NavigationSettings from '../../components/Navigation/Settings.vue'
    
    const store = useStore()
    const password = ref('')
    const showThemesMenu = ref(false)
    const showLanguageMenu = ref(false)
    const user = computed(() => store.state.user)
</script>
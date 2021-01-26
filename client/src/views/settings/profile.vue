<template>
    <teleport to="head">
        <title>{{ lang('Profile Settings') }} - myclients</title>
    </teleport>

    <div class="page">
        <div class="page-container">
            <navigation-settings />

            <div class="page-container__content">
                <div class="settings-items">
                    <div class="settings-item">
                        <div class="settings-item__left">
                            <div class="settings-item__title">
                                {{ lang('Name') }}
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
                                {{ lang('Email') }}
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
                                {{ lang('Password') }}
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
                                {{ lang('Theme') }}
                            </div>
                        </div>

                        <div class="settings-item__right">
                            <dropdown-menu
                                placement="bottom"
                                v-model="showThemesMenu">

                                <button-app
                                    @click="showThemesMenu = !showThemesMenu"
                                    class="button--flat inline w-250 dropdown-arrows">
                                    {{ theme ? theme : user.theme }}
                                </button-app>

                                <template #dropdown>
                                    <div class="dropdown-menu dropdown-menu--theme">
                                        <div
                                            @click="selectTheme('Aconite')"
                                            class="theme-picker__item theme-picker__item--aconite"
                                            :class="{ 'theme-picker__item--aconite-selected': theme == 'Aconite' }">

                                            <div class="theme-picker__title">{{ lang('Theme') }}</div>
                                            <div class="theme-picker__description">Aconite</div>
                                        </div>

                                        <div
                                            @click="selectTheme('Centaurs')"
                                            class="theme-picker__item theme-picker__item--centaurs"
                                            :class="{ 'theme-picker__item--centaurs-selected': theme == 'Centaurs' }">

                                            <div class="theme-picker__title">{{ lang('Theme') }}</div>
                                            <div class="theme-picker__description">Centaurs</div>
                                        </div>

                                        <div
                                            @click="selectTheme('Azkaban')"
                                            class="theme-picker__item theme-picker__item--azkaban"
                                            :class="{ 'theme-picker__item--azkaban-selected': theme == 'Azkaban' }">

                                            <div class="theme-picker__title">{{ lang('Theme') }}</div>
                                            <div class="theme-picker__description theme-picker__description--dark">Azkaban</div>
                                        </div>

                                        <div
                                            @click="selectTheme('Black Forest')"
                                            class="theme-picker__item theme-picker__item--dark-forest"
                                            :class="{ 'theme-picker__item--black-forest-selected': theme == 'Black Forest' }">

                                            <div class="theme-picker__title">{{ lang('Theme') }}</div>
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
                                {{ lang('Language') }}
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
                                {{ lang('Profile picture') }}
                            </div>
                        </div>

                        <div class="settings-item__right">
                            <button-app class="button--flat inline w-250 text-center">
                                {{ lang('Upload...') }}
                            </button-app>
                        </div>
                    </div>
                </div>

                <button-app class="button--primary inline mt-40">
                    {{ lang('Save settings') }}
                </button-app>
            </div>
        </div>
    </div>
</template>

<script setup>
    import { useStore } from 'vuex'
    import { computed, ref } from 'vue';
    import ButtonApp from '../../components/Button.vue'
    import useLanguage from '../../features/useLanguage.js'
    import DropdownMenu from '../../components/DropdownMenu.vue'
    import NavigationSettings from '../../components/Navigation/Settings.vue'
    
    const store = useStore()
    const { lang } = useLanguage()

    const user = computed(() => store.state.user)

    // Profile fields
    const name = ref('')
    const email = ref('')
    const password = ref('')
    const theme = ref('')
    const language = ref('')
    const profilePicture = ref('')

    // Theme select
    theme.value = user.value.theme

    function selectTheme(selectedTheme) {
        theme.value = selectedTheme
        showThemesMenu.value = false
    }

    const showThemesMenu = ref(false)
    const showLanguageMenu = ref(false)
</script>
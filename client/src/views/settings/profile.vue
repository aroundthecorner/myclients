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
                                v-model="name"
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
                                v-model="email"
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
                                    {{ language ? lang(language) : user.language }}
                                </button-app>

                                <template #dropdown>
                                    <div class="dropdown-menu">
                                        <div
                                            @click="selectLanguage('en')"
                                            class="dropdown-menu__item">
                                            English
                                        </div>

                                        <div
                                            @click="selectLanguage('lv')"
                                            class="dropdown-menu__item">
                                            Latviešu
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
                            <button-app
                                :is-loading="isUploading"
                                loading-color="#929292"
                                @click="chooseProfilePicture"
                                class="button--flat inline w-250 text-center">

                                {{ lang('Upload...') }}

                                <input
                                    @change="changeProfilePicture"
                                    ref="profilePictureUpload"
                                    class="settings-item__input-upload"
                                    type="file"
                                    accept="image/*"
                                />
                            </button-app>

                            <img
                                class="settings-item__uploaded-profile-picture"
                                :src="profilePicture"
                            />
                        </div>
                    </div>
                </div>

                <button-app
                    @click="save"
                    :is-loading="isSaving"
                    loading-color="#fff"
                    class="button--primary inline mt-40">

                    {{ lang('Save settings') }}
                </button-app>
            </div>
        </div>
    </div>
</template>

<script setup>
    import { useStore } from 'vuex'
    import { computed, ref } from 'vue';

    import useEnv from '/@/features/useEnv.js'
    import ButtonApp from '/@/components/Button.vue'
    import UserProfile from '/@/api/user_profile.js'
    import useLanguage from '/@/features/useLanguage.js'
    import DropdownMenu from '/@/components/DropdownMenu.vue'
    import NavigationSettings from '/@/components/Navigation/Settings.vue'
    
    const store = useStore()
    const { lang } = useLanguage()
    const { env } = useEnv()

    const user = computed(() => store.state.user)

    const name = ref('')
    const email = ref('')
    const password = ref('')
    const theme = ref('')
    const language = ref('')
    const isSaving = ref(false)
    const profilePicture = ref('')
    const isUploading = ref(false)
    const showThemesMenu = ref(false)
    const showLanguageMenu = ref(false)
    const profilePictureUpload = ref('')

    name.value = user.value.name
    email.value = user.value.email
    theme.value = user.value.theme
    language.value = user.value.language
    profilePicture.value = `${env('VITE_SERVER_URL')}/${user.value.profile_picture}`

    function selectTheme(selectedTheme) {
        theme.value = selectedTheme
        showThemesMenu.value = false
    }

    function selectLanguage(selectedLanguage) {
        language.value = selectedLanguage
        showLanguageMenu.value = false
    }

    function chooseProfilePicture() {
        profilePictureUpload.value.click()
    }

    async function changeProfilePicture(event) {
        isUploading.value = true

        let formData = new FormData()
        let file = event.target.files[0]
        let filename = event.target.files[0].name

        formData.append('file', file)
        formData.append('filename', filename)

        try {
            const result = await UserProfile.uploadProfilePicture(formData)
            profilePicture.value = `${env('VITE_SERVER_URL')}/${result.filename}`
        } catch (error) {}
        
        isUploading.value = false
    }

    async function save() {
        isSaving.value = true

        validatePasswordStrength()

        const user = await UserProfile.update({
            name: name.value,
            email: email.value,
            password: password.value,
            theme: theme.value,
            language: language.value,
        })

        refreshUserStore(user)

        isSaving.value = false
    }

    function validatePasswordStrength() {
        if (password.value == '') return

        let strongPassword = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})")

        try {
            if (!strongPassword.test(password.value)) {
                isSaving.value = false
                throw "Weak password"
            }
        } catch (error) {
            showWeakPasswordMessage()
        }
    }

    function showWeakPasswordMessage() {
        store.dispatch('app/showNotificationMessage', {
            icon: 'img/warning.png',
            title: lang('Weak password'),
            body: lang('Password must contain symbols, numbers and lowercase and uppercase letters.'),
            hideDelay: 5,
        })
    }

    async function refreshUserStore(user) {
        store.dispatch('user/setUser', {
            ...user,
            token: store.state.user.token,
        })
    }
</script>
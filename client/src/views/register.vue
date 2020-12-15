<template>
    <teleport to="head">
        <title>Create an Account - myclients</title>
    </teleport>

    <div class="registration-page">
        <div class="page__logo-container">
            <img
                class="page__logo"
                src="/img/full_logo400.png"
                alt="Logo"
            />
        </div>

        <div class="auth-page__main auth-page__main--center mt-50">
            <div class="auth-page__registration-form auth-page__login-form--block">
                <div class="auth-page__title">Create Account</div>

                <div class="auth-page__form-container w-full">
                    <div class="flex">
                        <div class="flex-1 mr-60">
                            <div class="auth-page__subtitle mt-30">
                                Create a new user
                            </div>

                            <div class="auth-page__form mt-20">
                                <!-- Email -->
                                <div class="auth-page__field auth-page__field--email">
                                    <div class="auth-page__field-icon">
                                        <svg-user />
                                    </div>

                                    <div class="auth-page__field-container">
                                        <div class="auth-page__field-label">
                                            Email
                                        </div>

                                        <input
                                            v-focus
                                            class="auth-page__field-input"
                                            type="text"
                                        />
                                    </div>
                                </div>

                                <!-- Name -->
                                <div class="auth-page__field auth-page__field--border">
                                    <div class="auth-page__field-icon">
                                        <svg-user />
                                    </div>

                                    <div class="auth-page__field-container">
                                        <div class="auth-page__field-label">
                                            Full name
                                        </div>

                                        <input
                                            class="auth-page__field-input"
                                            type="text"
                                        />
                                    </div>
                                </div>

                                <!-- Password -->
                                <div class="auth-page__field">
                                    <div class="auth-page__field-icon">
                                        <svg-lock />
                                    </div>

                                    <div class="auth-page__field-container">
                                        <div class="auth-page__field-label">
                                            Password
                                        </div>

                                        <input
                                            class="auth-page__field-input"
                                            type="password"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="flex-1">
                            <div class="auth-page__subtitle mt-30">
                                Create your organization
                            </div>

                            <div class="auth-page__form mt-20">
                                <!-- Organization name -->
                                <div class="auth-page__field auth-page__field--border">
                                    <div class="auth-page__field-icon">
                                        <div class="auth-page__field-icon-svg">
                                            <svg-office-building />
                                        </div>
                                    </div>

                                    <div class="auth-page__field-container">
                                        <div class="auth-page__field-label">
                                            Organization name
                                        </div>

                                        <input
                                            class="auth-page__field-input"
                                            type="text"
                                        />
                                    </div>
                                </div>

                                <!-- Organization type -->
                                <div class="auth-page__field">
                                    <div class="auth-page__field-icon">
                                        <div class="auth-page__field-icon-svg">
                                            <svg-office-building />
                                        </div>
                                    </div>

                                    <div class="auth-page__field-container">
                                        <div class="auth-page__field-label">
                                            Organization type
                                        </div>

                                        <dropdown-menu
                                            placement="bottom"
                                            offsetY="10"
                                            offsetX="-10"
                                            maxHeight="250px"
                                            v-model="showOrganizationTypeMenu">

                                            <input
                                                @focus="showOrganizationTypeMenu = true"
                                                @click="showOrganizationTypeMenu = true"
                                                class="auth-page__field-input"
                                                type="text"
                                            />

                                            <template #dropdown>
                                                <div class="dropdown-menu">
                                                    <div class="dropdown-menu__item">Agriculture & Forestry</div>
                                                    <div class="dropdown-menu__item">Business & Information</div>
                                                    <div class="dropdown-menu__item">Construction / Utilities</div>
                                                    <div class="dropdown-menu__item">Education</div>
                                                    <div class="dropdown-menu__item">Finance & Insurance</div>
                                                    <div class="dropdown-menu__item">Food & Hospitality</div>
                                                    <div class="dropdown-menu__item">Health Services</div>
                                                    <div class="dropdown-menu__item">Motor Vehicle</div>
                                                    <div class="dropdown-menu__item">Natural Resources / Environment</div>
                                                    <div class="dropdown-menu__item">Personal Services</div>
                                                    <div class="dropdown-menu__item">Real Estate & Housing</div>
                                                    <div class="dropdown-menu__item">Legal</div>
                                                    <div class="dropdown-menu__item">Transportation</div>
                                                    <div class="dropdown-menu__item">Other</div>
                                                </div>
                                            </template>
                                        </dropdown-menu>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div class="auth-page__buttons items-center">
                        <app-button
                            class="button--primary"
                            loading-color="#fff">
                            Create Account
                        </app-button>

                        <router-link
                            to="/login"
                            class="auth-page__forgot-link">

                            or Log in
                        </router-link>
                    </div>

                    <div class="v-spacer-50"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    import { ref } from 'vue'
    import router from '../routes.js'
    import useAuth from '../features/useAuth.js'
    import SvgLock from '../components/Svg/Lock.vue'
    import AppButton from '../components/Button.vue'
    import SvgUser from '../components/Svg/User.vue'
    import DropdownMenu from '../components/DropdownMenu.vue'
    import SvgOfficeBuilding from '../components/Svg/OfficeBuilding.vue'

    const { userLoggedIn } = useAuth()
    const showOrganizationTypeMenu = ref(false)

    if (userLoggedIn()) {
        router.push({ name: "dashboard" })
    }
</script>
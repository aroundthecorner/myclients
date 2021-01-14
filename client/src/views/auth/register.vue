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

        <div class="auth-page__main auth-page__main--center mt-50 height-auto">
            <div class="auth-page__registration-form auth-page__login-form--block">
                <div class="auth-page__title">Create Account</div>

                <div class="auth-page__form-container w-full">
                    <div class="auth-page__register-columns">
                        <div class="auth-page__register-left">
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
                                            v-model="email"
                                            class="auth-page__field-input"
                                            type="email"
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
                                            v-model="name"
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
                                            v-model="password"
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
                                            v-model="organizationName"
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
                                                v-model="organizationType"
                                                @focus="showOrganizationTypeMenu = true"
                                                @click="showOrganizationTypeMenu = true"
                                                class="auth-page__field-input"
                                                type="text"
                                            />

                                            <template #dropdown>
                                                <div class="dropdown-menu">
                                                    <div
                                                        v-for="organizationType in organizationTypes"
                                                        @click="selectOrganizationType(organizationType)"
                                                        class="dropdown-menu__item">
                                                        {{ organizationType.description }}
                                                    </div>
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
                            @click="register"
                            class="button--primary"
                            :is-loading="isLoading"
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
    import router from '../../routes.js'
    import { ref } from 'vue'
    import useAuth from '../../features/useAuth.js'
    import SvgLock from '../../components/Svg/Lock.vue'
    import AppButton from '../../components/Button.vue'
    import SvgUser from '../../components/Svg/User.vue'
    import DropdownMenu from '../../components/DropdownMenu.vue'
    import OrganizationTypes from '../../api/organization_types.js'
    import SvgOfficeBuilding from '../../components/Svg/OfficeBuilding.vue'

    const { email, name, password, isLoading, organizationName,
            selectedOrganizationType, organizationType, register,
            userLoggedIn } = useAuth()
            
    const organizationTypes = ref([])
    const showOrganizationTypeMenu = ref(false)

    /**
     * Get organization types
     */
    async function getOrganizationTypes() {
        const result = await OrganizationTypes.get()
        organizationTypes.value = result
    }

    getOrganizationTypes()

    /**
     * Select organization type
     */
    function selectOrganizationType(type) {
        showOrganizationTypeMenu.value = false
        selectedOrganizationType.value = type
        organizationType.value = type.description
    }

    if (userLoggedIn()) {
        router.push({ name: "dashboard" })
    }
</script>
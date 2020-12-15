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

        <div class="auth-page__main auth-page__main--center">
            <div class="auth-page__login-form auth-page__login-form--block">
                <div class="auth-page__title">Create Account</div>

                <div class="auth-page__subtitle">
                    Create an account on our platform
                </div>

                <div class="auth-page__form-container">
                    <div class="auth-page__form">
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
                                <svg-lock />
                            </div>

                            <div class="auth-page__field-container">
                                <div class="auth-page__field-label">
                                    Full name
                                </div>

                                <input
                                    class="auth-page__field-input"
                                    type="password"
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
    import router from '../routes.js'
    import useAuth from '../features/useAuth.js'
    import SvgLock from '../components/Svg/Lock.vue'
    import AppButton from '../components/Button.vue'
    import SvgUser from '../components/Svg/User.vue'

    const { userLoggedIn } = useAuth()

    if (userLoggedIn()) {
        router.push({ name: "dashboard" })
    }
</script>
<template>
    <teleport to="head">
        <title>Create an Account - myclients</title>
    </teleport>

    <div class="login-page">
        <div class="login-page__logo-container">
            <img
                class="login-page__logo"
                src="/img/full_logo400.png"
                alt="Logo"
            />
        </div>

        <div class="login-page__main">
            <div class="login-page__illustration">
                <img
                    class="login-page__illustration-img"
                    src="/img/login_illustration.png"
                    alt="Illustration"
                />
            </div>

            <div class="login-page__login-form">
                <div class="login-page__title">Create an Account</div>

                <div class="login-page__subtitle">
                    Please login with your personal email and password
                </div>

                <div class="login-page__form-container">
                    <div class="login-page__form">
                        <!-- Email -->
                        <div class="login-page__field login-page__field--email">
                            <div class="login-page__field-icon">
                                <svg-user />
                            </div>

                            <div class="login-page__field-container">
                                <div class="login-page__field-label">
                                    Email
                                </div>

                                <input
                                    @keyup.enter="login"
                                    v-model="email"
                                    @blur="checkUserExists"
                                    v-focus
                                    class="login-page__field-input"
                                    type="text"
                                />
                            </div>

                            <div class="login-page__login-check-container">
                                <div v-if="userExists" class="login-page__login-check">
                                    <svg-check />
                                </div>
                            </div>
                        </div>

                        <!-- Password -->
                        <div class="login-page__field">
                            <div class="login-page__field-icon">
                                <svg-lock />
                            </div>

                            <div class="login-page__field-container">
                                <div class="login-page__field-label">
                                    Password
                                </div>

                                <input
                                    @keyup.enter="login"
                                    v-model="password"
                                    class="login-page__field-input"
                                    type="password"
                                />
                            </div>

                            <div class="login-page__login-check-container"></div>
                        </div>
                    </div>

                    <div class="login-page__forgot-password">
                        <a class="login-page__forgot-link" href="#">
                            Forgot Password?
                        </a>
                    </div>

                    <div class="login-page__buttons">
                        <app-button
                            @click="login"
                            class="button--primary"
                            :is-loading="isLoading"
                            loading-color="#fff">
                            Login Now
                        </app-button>

                        <app-button>
                            Create Account
                        </app-button>
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
    import SvgUser from '../components/Svg/User.vue'
    import SvgCheck from '../components/Svg/Check.vue'
    import SvgLock from '../components/Svg/Lock.vue'
    import AppButton from '../components/Button.vue'

    const { login, email, password, isLoading, userLoggedIn,
            checkUserExists, userExists } = useAuth()

    if (userLoggedIn()) {
        router.push({ name: "dashboard" })
    }
</script>
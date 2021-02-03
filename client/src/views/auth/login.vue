<template>
    <teleport to="head">
        <title>Login - myclients</title>
    </teleport>

    <div class="login-page">
        <div class="page__logo-container">
            <img
                class="page__logo"
                src="/img/full_logo400.png"
                alt="Logo"
            />
        </div>

        <div class="auth-page__main">
            <div class="login-page__illustration">
                <img
                    class="login-page__illustration-img"
                    src="/img/login_illustration.png"
                    alt="Illustration"
                />
            </div>

            <div class="auth-page__login-form">
                <div class="auth-page__title">Welcome Back</div>

                <div class="auth-page__subtitle">
                    Please login with your personal email and password
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
                                    @keyup.enter="login"
                                    v-model="email"
                                    @blur="checkUserExists"
                                    v-focus
                                    class="auth-page__field-input"
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
                        <div class="auth-page__field">
                            <div class="auth-page__field-icon">
                                <svg-lock />
                            </div>

                            <div class="auth-page__field-container">
                                <div class="auth-page__field-label">
                                    Password
                                </div>

                                <input
                                    @keyup.enter="login"
                                    v-model="password"
                                    class="auth-page__field-input"
                                    type="password"
                                />
                            </div>

                            <div class="login-page__login-check-container"></div>
                        </div>
                    </div>

                    <div class="login-page__forgot-password">
                        <router-link to="/forgot-password" class="auth-page__forgot-link">
                            Forgot Password?
                        </router-link>
                    </div>

                    <div class="auth-page__buttons">
                        <button-app
                            @click="login"
                            class="button--primary"
                            :is-loading="isLoading"
                            loading-color="#fff">
                            Login Now
                        </button-app>

                        <router-link to="/register">
                            <button-app>
                                Create Account
                            </button-app>
                        </router-link>
                    </div>

                    <div class="v-spacer-50"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    import router from '/@/routes.js'
    import useAuth from '/@/features/useAuth.js'
    import SvgUser from '/@/components/Svg/User.vue'
    import SvgCheck from '/@/components/Svg/Check.vue'
    import SvgLock from '/@/components/Svg/Lock.vue'
    import ButtonApp from '/@/components/Button.vue'

    const { login, email, password, isLoading, userLoggedIn,
            checkUserExists, userExists } = useAuth()

    if (userLoggedIn()) {
        router.push({ name: "dashboard" })
    }

    if (window.location.host == 'localhost:47344') {
        email.value = 'admin@myclients.org'
        password.value = 'password'
    }
</script>
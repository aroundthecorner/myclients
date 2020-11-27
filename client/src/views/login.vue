<template>
    <teleport to="head">
        <title>Login - myclients</title>
    </teleport>

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
            <div class="login-page__title">Welcome Back</div>

            <div class="login-page__subtitle">
                Please login with your personal username and password
            </div>

            <div class="login-page__form-container">
                <div class="login-page__form">
                    <!-- Username -->
                    <div class="login-page__field login-page__field--username">
                        <div class="login-page__field-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-user"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                        </div>

                        <div class="login-page__field-container">
                            <div class="login-page__field-label">
                                Username
                            </div>

                            <input
                                class="login-page__field-input"
                                type="text"
                            />
                        </div>

                        <div class="login-page__login-check-container">
                            <div class="login-page__login-check">
                                <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" xml:space="preserve"><g><g><path d="M378.305,173.859c-5.857-5.856-15.355-5.856-21.212,0.001L224.634,306.319l-69.727-69.727c-5.857-5.857-15.355-5.857-21.213,0c-5.858,5.857-5.858,15.355,0,21.213l80.333,80.333c2.929,2.929,6.768,4.393,10.606,4.393c3.838,0,7.678-1.465,10.606-4.393l143.066-143.066C384.163,189.215,384.163,179.717,378.305,173.859z"></path></g></g><g></g><g></g></svg>
                            </div>
                        </div>
                    </div>

                    <!-- Password -->
                    <div class="login-page__field">
                        <div class="login-page__field-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-lock"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                        </div>

                        <div class="login-page__field-container">
                            <div class="login-page__field-label">
                                Password
                            </div>

                            <input
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
                    <div class="button button--primary">
                        Login Now
                    </div>

                    <div class="button">
                        Create Account
                    </div>
                </div>
            </div>

        </div>
    </div>

        <!-- <div class="login-box__label">Username</div>

        <input
            @keyup.enter="login"
            v-model="username"
            v-focus
            class="login-box__input"
        />

        <div class="login-box__label">Password</div>

        <input
            @keyup.enter="login"
            v-model="password"
            class="login-box__input"
            type="password"
        />

        <div
            @click="login"
            class="app-button app-button--login"
            :class="{ 'app-button--loading': isLoading }">

            Log in
        </div> -->
</template>

<script setup>
    import router from '../routes.js'
    import useAuth from '../features/useAuth.js'

    const { login, username, password, isLoading, userLoggedIn } = useAuth()

    if (userLoggedIn()) {
        router.push({ name: "home" })
    }
</script>
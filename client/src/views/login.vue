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
            Login form
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
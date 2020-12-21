<template>
    <teleport to="head">
        <title>Reset password - myclients</title>
    </teleport>

    <div class="registration-page">
        <div class="page__logo-container">
            <img
                class="page__logo"
                src="/img/full_logo400.png"
                alt="Logo"
            />
        </div>

        <div class="auth-page__main auth-page__main--center mt-100">
            <div class="auth-page__registration-form auth-page__login-form--block">
                <div class="auth-page__title text-center">Reset Password</div>

                <div class="auth-page__form-container w-full center flex-column">
                    <div class="flex w-400 center">
                        <div class="w-full">
                            <div
                                class="auth-page__subtitle mt-30 text-center"
                                :class="{ 'hidden': isResetLinkSent }">
                                A reset link will be sent to your email
                            </div>

                            <div
                                v-if="isResetLinkSent"
                                class="auth-page__notification">
                                Please check your email for a link to reset your password.
                            </div>

                            <div class="auth-page__form mt-20">
                                <!-- Email -->
                                <div class="auth-page__field">
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
                            </div>
                        </div>
                    </div>

                    <div class="auth-page__buttons items-center">
                        <app-button
                            @click="sendResetPasswordLink"
                            class="button--primary"
                            :is-loading="isLoading"
                            loading-color="#fff">
                            Send password reset link
                        </app-button>
                    </div>

                    <div class="v-spacer-50"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    import router from '../../routes.js'
    import { ref, inject, onMounted } from 'vue'
    import { onBeforeRouteLeave } from 'vue-router'
    import useAuth from '../../features/useAuth.js'
    import AppButton from '../../components/Button.vue'
    import SvgUser from '../../components/Svg/User.vue'

    const progressBar = inject('progressBar')

    const { email, isLoading, userLoggedIn, sendResetPasswordLink,
            isResetLinkSent } = useAuth()

    onBeforeRouteLeave(() => {
        progressBar.start()
    })

    onMounted(() => {
        progressBar.finish()
    })

    if (userLoggedIn()) {
        router.push({ name: "dashboard" })
    }
</script>
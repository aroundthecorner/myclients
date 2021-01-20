<template>
    <div :data-theme="app.theme" class="app-wrapper">
        <router-view></router-view>
        <vue-progress-bar />
        <notification-error />
        <notification-message />
    </div>
</template>

<script setup>
    import { computed, inject } from 'vue'
    import { useStore } from 'vuex'
    import router from './routes.js'
    import useAuth from './features/useAuth.js'
    import NotificationError from './components/Notification/Error.vue'
    import NotificationMessage from './components/Notification/Message.vue'

    const store = useStore()
    const { restoreSession } = useAuth()
    const progressBar = inject('progressBar')

    /*
     * Start the progress bar on page navigation
     */
    router.beforeEach((to, from, next) => {
        progressBar.start()
        return next();
    })

    router.afterEach((to, from) => {
        progressBar.finish()
    })

    /*
     * Load the languages
     */
    store.dispatch('app/fetchLanguages')

    const app = computed(() => store.state.app)

    /*
     * Restore the user session
     */
    restoreSession()
</script>
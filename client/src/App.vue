<template>
    <div :data-theme="app.theme" class="app-wrapper">
        <router-view></router-view>
        <vue-progress-bar />
        <notification-error />
        <notification-message />
    </div>
</template>

<script setup>
    import { useStore } from 'vuex'
    import router from './routes.js'
    import { computed, inject } from 'vue'
    import useAuth from './features/useAuth.js'
    import useOnline from './features/useOnline.js'
    import useWebsocket from './features/useWebsocket.js'
    import NotificationError from './components/Notification/Error.vue'
    import NotificationMessage from './components/Notification/Message.vue'

    const store = useStore()
    const { restoreSession } = useAuth()
    const progressBar = inject('progressBar')
    const { connect: connectWebsocket, send } = useWebsocket()
    const { sendUserOnlinePing, registerUserActiveListener } = useOnline()

    const app = computed(() => store.state.app)

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

    /*
     * Restore the user session
     */
    restoreSession()

    /*
     * Establish a websocket connection
     */
    connectWebsocket()

    /*
     * Send user online ping
     */
    sendUserOnlinePing()

    /*
     * Register user active listener
     */
    registerUserActiveListener()

    setInterval(() => {
        send('ping')
    }, 10000)
</script>
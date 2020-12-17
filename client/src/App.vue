<template>
    <div :data-theme="app.theme" class="app-wrapper">
        <router-view></router-view>
        <vue-progress-bar />
        <error-notification />
        <notification-message />
    </div>
</template>

<script setup>
    import { computed } from 'vue'
    import { useStore } from 'vuex'
    import useAuth from './features/useAuth.js'
    import ErrorNotification from './components/Notification/Error.vue'
    import NotificationMessage from './components/Notification/Message.vue'

    const store = useStore()
    const { restoreSession } = useAuth()

    const app = computed(() => store.state.app)

    restoreSession()
</script>
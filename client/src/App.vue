<template>
    <div :data-theme="app.theme" class="app-wrapper">
        <router-view></router-view>
    </div>
</template>

<script setup>
    import { computed } from 'vue'
    import { useStore } from 'vuex'
    import useAuth from './features/useAuth.js'

    const store = useStore()
    const { restoreSession } = useAuth()

    const app = computed(() => store.state.app)

    restoreSession()
</script>
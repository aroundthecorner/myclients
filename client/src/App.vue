<template>
    <div :data-theme="app.theme" class="app-wrapper">
        <router-view></router-view>
    </div>
</template>

<script>
    import { computed } from 'vue'
    import { useStore } from 'vuex'
    import useAuth from './composition/useAuth.js'

    export default {
        setup()
        {
            const { restoreSession } = useAuth()
            const store = useStore()

            const app = computed(() => store.state.app)

            restoreSession()

            return {
                app
            }
        },
    }
</script>
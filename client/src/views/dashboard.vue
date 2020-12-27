<template>
    <teleport to="head">
        <title>myclients - {{ lang('Login') }}</title>
    </teleport>

    <div>Dashboard</div>
</template>

<script setup>
    import { onMounted, inject } from 'vue';
    import { onBeforeRouteLeave } from 'vue-router';
    import useLanguage from '../features/useLanguage.js'
    
    const progressBar = inject('progressBar')
    const { lang } = useLanguage()

    onBeforeRouteLeave(() => {
        progressBar.start()
    })

    onMounted(() => {
        progressBar.finish()
    })
</script>
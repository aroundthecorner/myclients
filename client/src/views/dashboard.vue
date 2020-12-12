<template>
    <teleport to="head">
        <title>myclients - Online Apointment Scheduling App</title>
    </teleport>

    <div>Dashboard</div>
</template>

<script setup>
    import { onMounted, inject } from 'vue';
    import { onBeforeRouteLeave } from 'vue-router';
    
    const progressBar = inject('progressBar')

    onBeforeRouteLeave(() => {
        progressBar.start()
    })

    onMounted(() => {
        progressBar.finish()
    })
</script>
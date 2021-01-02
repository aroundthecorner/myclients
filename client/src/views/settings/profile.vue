<template>
    <teleport to="head">
        <title>Profile settings - myclients</title>
    </teleport>

    <div class="page">
        Profile settings
    </div>
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
<template>
    <teleport to="head">
        <title>myclients - Online Apointment Scheduling App</title>
    </teleport>

    <div>Dashboard</div>
</template>

<script setup>
    import { onMounted, inject } from 'vue';
    
    const progressBar = inject('progressBar')

    onMounted(() => {
        progressBar.finish()
    })
</script>
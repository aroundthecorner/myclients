<template>
    <div class="layout app-page">
        <app-sidebar />

        <div class="app-page__content">
            <router-view></router-view>
        </div>
    </div>
</template>

<script setup>
    import AppSidebar from '../../components/Sidebar.vue'
</script>
<template>
    <div class="layout app-layout">
        <app-sidebar />

        <div class="app-layout__content">
            <router-view></router-view>
        </div>
    </div>
</template>

<script setup>
    import AppSidebar from '../../components/Sidebar.vue'
</script>
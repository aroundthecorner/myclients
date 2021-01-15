<template>
    <div class="layout app-layout">
        <sidebar-app />

        <div class="app-layout__content">
            <router-view></router-view>
        </div>
    </div>
</template>

<script setup>
    import SidebarApp from '../../components/Sidebar.vue'
</script>
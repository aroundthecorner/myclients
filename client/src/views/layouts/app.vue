<template>
    <div class="layout app-layout">
        <sidebar-app />

        <div class="app-layout__content">
            <router-view></router-view>
        </div>

        <message-global />
    </div>
</template>

<script setup>
    import SidebarApp from '/@/components/Sidebar.vue'
    import MessageGlobal from '/@/components/Notification/MessageGlobal.vue'
</script>
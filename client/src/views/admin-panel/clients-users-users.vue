<template>
    <teleport to="head">
        <title>Users - myclients</title>
    </teleport>

    <div class="page">
        <div class="page-container">
            <admin-panel-navigation />

            <div class="page-container__content">
                <datatable-clients-users-users />
            </div>
        </div>
    </div>
</template>

<script setup>
    import { onBeforeRouteLeave } from 'vue-router';
    import { onMounted, inject } from 'vue';
    import AdminPanelNavigation from '../../components/Navigation/AdminPanel.vue'
    import DatatableClientsUsersUsers from '../../components/Datatable/DatatableClientsUsersUsers.vue'
    
    const progressBar = inject('progressBar')

    /**
     * Page navigation progress bar
     */
    onBeforeRouteLeave(() => {
        progressBar.start()
    })

    onMounted(() => {
        progressBar.finish()
    })
</script>
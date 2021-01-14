<template>
    <teleport to="head">
        <title>Clients - myclients</title>
    </teleport>

    <div class="page">
        <div class="page-container">
            <admin-panel-navigation />

            <div class="page-container__content">
                <datatable-clients-users-clients />
            </div>
        </div>
    </div>
</template>

<script setup>
    import AdminPanelNavigation from '../../components/Navigation/AdminPanel.vue'
    import DatatableClientsUsersClients from '../../components/Datatable/DatatableClientsUsersClients.vue'
</script>
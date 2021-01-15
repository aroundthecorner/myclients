<template>
    <teleport to="head">
        <title>Clients - myclients</title>
    </teleport>

    <div class="page">
        <div class="page-container">
            <navigation-admin-panel />

            <div class="page-container__content">
                <datatable-clients />
            </div>
        </div>
    </div>
</template>

<script setup>
    import NavigationAdminPanel from '../../components/Navigation/AdminPanel.vue'
    import DatatableClients from '../../components/Datatable/AdminPanel/ClientsUsersClients.vue'
</script>
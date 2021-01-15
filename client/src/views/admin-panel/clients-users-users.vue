<template>
    <teleport to="head">
        <title>Users - myclients</title>
    </teleport>

    <div class="page">
        <div class="page-container">
            <navigation-admin-panel />

            <div class="page-container__content">
                <datatable-users />
            </div>
        </div>
    </div>
</template>

<script setup>
    import NavigationAdminPanel from '../../components/Navigation/AdminPanel.vue'
    import DatatableUsers from '../../components/Datatable/AdminPanel/ClientsUsersUsers.vue'
</script>
<template>
    <teleport to="head">
        <title>Users settings - myclients</title>
    </teleport>

    <div class="page">
        <div class="page-container">
            <navigation-settings />

            <div class="page-container__content">
                <datatable-users />
            </div>
        </div>
    </div>
</template>

<script setup>
    import NavigationSettings from '../../components/Navigation/Settings.vue'
    import DatatableUsers from '../../components/Datatable/Settings/Users.vue'
</script>
<template>
    <teleport to="head">
        <title>Users settings - myclients</title>
    </teleport>

    <div class="page">
        <div class="page-container">
            <settings-navigation />

            <div class="page-container__content">
                <datatable-users />
            </div>
        </div>
    </div>
</template>

<script setup>
    import SettingsNavigation from '../../components/Navigation/SettingsNavigation.vue'
    import DatatableUsers from '../../components/Datatable/DatatableUsers.vue'
</script>
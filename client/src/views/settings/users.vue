<template>
    <teleport to="head">
        <title>{{ lang('Users settings') }} - myclients</title>
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
    import useLanguage from '../../features/useLanguage.js'
    import NavigationSettings from '../../components/Navigation/Settings.vue'
    import DatatableUsers from '../../components/Datatable/Settings/Users.vue'

    const { lang } = useLanguage()
</script>
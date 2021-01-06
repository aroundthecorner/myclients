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
    import { useStore } from 'vuex'
    import { onBeforeRouteLeave } from 'vue-router';
    import { onMounted, inject, computed, ref } from 'vue';
    import AppButton from '../../components/Button.vue'
    import DropdownMenu from '../../components/DropdownMenu.vue'
    import OrganizationTypes from '../../api/organization_types.js'
    import SettingsNavigation from '../../components/Navigation/SettingsNavigation.vue'
    import DatatableUsers from '../../components/Datatable/DatatableUsers.vue'
    
    const store = useStore()
    const organizationTypes = ref([])
    const showOrganizationTypeMenu = ref(false)
    const progressBar = inject('progressBar')

    /**
     * Get organization types
     */
    async function getOrganizationTypes() {
        const result = await OrganizationTypes.get()
        organizationTypes.value = result
    }

    getOrganizationTypes()

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
<template>
    <teleport to="head">
        <title>Organization settings - myclients</title>
    </teleport>

    <div class="page">
        <div class="page-container">
            <navigation-settings />

            <div class="page-container__content">
                <div class="settings-items">
                    <div class="settings-item">
                        <div class="settings-item__left">
                            <div class="settings-item__title">
                                Organization name
                            </div>
                        </div>

                        <div class="settings-item__right">
                            <input
                                type="text"
                                class="app-input w-250"
                            />
                        </div>
                    </div>

                    <div class="settings-item">
                        <div class="settings-item__left">
                            <div class="settings-item__title">
                                Organization type
                            </div>
                        </div>

                        <div class="settings-item__right">
                            <dropdown-menu
                                placement="bottom"
                                offsetY="8px"
                                maxHeight="350px"
                                v-model="showOrganizationTypeMenu">

                                <button-app
                                    @click="showOrganizationTypeMenu = !showOrganizationTypeMenu"
                                    class="button--flat inline w-250 dropdown-arrows">
                                    Selected organization type
                                </button-app>

                                <template #dropdown>
                                    <div class="dropdown-menu">
                                        <div
                                            v-for="organizationType in organizationTypes"
                                            :key="organizationType.id"
                                            @click="selectOrganizationType(organizationType)"
                                            class="dropdown-menu__item">
                                            {{ organizationType.description }}
                                        </div>
                                    </div>
                                </template>
                            </dropdown-menu>
                        </div>
                    </div>
                </div>

                <button-app class="button--primary inline mt-40">
                    Save settings
                </button-app>
            </div>
        </div>
    </div>
</template>

<script setup>
    import { useStore } from 'vuex'
    import { ref } from 'vue';
    import ButtonApp from '../../components/Button.vue'
    import DropdownMenu from '../../components/DropdownMenu.vue'
    import OrganizationTypes from '../../api/organization_types.js'
    import NavigationSettings from '../../components/Navigation/Settings.vue'
    
    const store = useStore()
    const organizationTypes = ref([])
    const showOrganizationTypeMenu = ref(false)

    /**
     * Get organization types
     */
    async function getOrganizationTypes() {
        const result = await OrganizationTypes.get()
        organizationTypes.value = result
    }

    getOrganizationTypes()
</script>
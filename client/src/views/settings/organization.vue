<template>
    <teleport to="head">
        <title>{{ lang('Organization Settings') }} - myclients</title>
    </teleport>

    <div class="page">
        <div class="page-container">
            <navigation-settings />

            <div class="page-container__content">
                <div class="settings-items">
                    <div class="settings-item">
                        <div class="settings-item__left">
                            <div class="settings-item__title">
                                {{ lang('Organization name') }}
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
                                {{ lang('Organization type') }}
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
                                    {{ selectedOrganizationType }}
                                </button-app>

                                <template #dropdown>
                                    <div class="dropdown-menu">
                                        <div
                                            v-for="organizationType in organizationTypes"
                                            :key="organizationType.id"
                                            @click="selectOrganizationType(organizationType.id)"
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
                    {{ lang('Save settings') }}
                </button-app>
            </div>
        </div>
    </div>
</template>

<script setup>
    import { useStore } from 'vuex'
    import { ref, reactive, computed } from 'vue';
    import ButtonApp from '../../components/Button.vue'
    import useLanguage from '../../features/useLanguage.js'
    import DropdownMenu from '../../components/DropdownMenu.vue'
    import OrganizationTypes from '../../api/organization_types.js'
    import NavigationSettings from '../../components/Navigation/Settings.vue'
    
    const store = useStore()
    const { lang } = useLanguage()

    const user = computed(() => store.state.user)

    const organizationTypes = ref([])
    const showOrganizationTypeMenu = ref(false)
    const organizationType = reactive({
        id: '',
        description: '',
    })

    const selectedOrganizationType = computed(() => {
        // if (organizationType.id) {
        //     return organizationType.description.limit(20)
        // } else {
        //     return user.value.organizationType.description.limit(20)
        // }
    })

    function selectOrganizationType(id) {
        console.log(id)
    }

    async function getOrganizationTypes() {
        const result = await OrganizationTypes.get()
        organizationTypes.value = result
    }

    getOrganizationTypes()


</script>
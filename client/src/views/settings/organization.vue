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
                                v-model="organizationName"
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
                                    {{ organizationType.description.limit(22) }}
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

                <button-app
                    @click="save"
                    :is-loading="isSaving"
                    loading-color="#fff"
                    class="button--primary inline mt-40">
                    {{ lang('Save settings') }}
                </button-app>
            </div>
        </div>
    </div>
</template>

<script setup>
    import { useStore } from 'vuex'
    import { ref, reactive, computed } from 'vue'
    import ButtonApp from '/@/components/Button.vue'
    import useLanguage from '/@/features/useLanguage.js'
    import DropdownMenu from '/@/components/DropdownMenu.vue'
    import UserOrganization from '/@/api/user_organization.js'
    import OrganizationTypes from '/@/api/organization_types.js'
    import NavigationSettings from '/@/components/Navigation/Settings.vue'
    
    const store = useStore()
    const { lang } = useLanguage()

    const user = computed(() => store.state.user)

    const isSaving = ref(false)
    const organizationName = ref('')
    const organizationTypes = ref([])
    const showOrganizationTypeMenu = ref(false)
    const organizationType = reactive({
        id: '',
        description: '',
    })

    organizationName.value = user.value.organization.description
    organizationType.id = user.value.organization.organization_type.id
    organizationType.description = user.value.organization.organization_type.description

    function selectOrganizationType(id) {
        const type = organizationTypes.value.find(item => {
            return item.id === id
        })

        organizationType.id = type.id
        organizationType.description = type.description
        showOrganizationTypeMenu.value = false
    }

    async function save() {
        isSaving.value = true

        const user = await UserOrganization.update({
            organizationName: organizationName.value,
            organizationType: organizationType,
        })

        refreshUserStore(user)

        isSaving.value = false
    }

    async function refreshUserStore(user) {
        store.dispatch('user/setUser', {
            ...user,
            token: store.state.user.token,
        })
    }

    async function getOrganizationTypes() {
        const result = await OrganizationTypes.get()
        organizationTypes.value = result
    }

    getOrganizationTypes()
</script>
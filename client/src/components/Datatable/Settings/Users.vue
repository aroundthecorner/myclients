<template>
    <div class="datatable-users__toolbar">
        <input
            @keyup="performSearch"
            type="text"
            placeholder="Search"
            v-model="search"
            class="app-input w-300"
        />

        <div class="spacer"></div>

        <div v-if="!search" class="datatable__total">
            {{ Number(total).toLocaleString() }} {{ lang('total') }}
        </div>

        <button-app
            class="button--secondary">
            {{ lang('Filters') }}
        </button-app>

        <button-app class="button--primary">
            {{ lang('New user') }}
        </button-app>
    </div>

    <div @scroll="onDatatableScroll" class="datatable-container">
        <table class="datatable">

            <!-- Loading... -->
            <div v-if="isLoading" class="datatable__loading">
                <loading-linear borderRadius="0 0 100px 100px" />
            </div>

            <thead>
                <tr class="datatable__header sticky">
                    <td class="datatable__cell w-25p" @click="orderBy('name')">{{ lang('Name') }}</td>
                    <td class="datatable__cell" @click="orderBy('role_order')">{{ lang('Role') }}</td>
                    <td class="datatable__cell" @click="orderBy('email')">{{ lang('Email') }}</td>
                    <td class="datatable__cell" @click="orderBy('created_at')">{{ lang('User since') }}</td>
                    <td class="datatable__cell w-10p"></td>
                </tr>
            </thead>

            <!-- Rows -->
            <tbody>
                <template v-if="rows !== undefined">
                    <tr
                        v-for="row in searchedRows"
                        :key="row.id"
                        class="datatable__row"
                        :class="{ 'datatable__loading-on': isLoading }">

                        <td class="datatable__cell">
                            <div class="datatable__user-name">
                                <div>
                                    <img
                                        class="datatable__user-name-img sidebar__profile-pic sidebar__profile-pic--no-border"
                                        :src="`${env('VITE_SERVER_URL')}/${row.profile_picture}`"
                                    />
                                </div>

                                <div class="datatable__user-text">
                                    <div class="datatable__user-title">{{ row.name }}</div>
                                    <div class="datatable__user-subtitle">{{ lang(row.role) }}</div>
                                </div>
                            </div>
                        </td>

                        <td class="datatable__cell">{{ lang(row.role) }}</td>
                        <td class="datatable__cell">{{ row.email }}</td>
                        <td class="datatable__cell">{{ datetime(row.created_at) }}</td>

                        <td class="datatable__cell text-right">
                            <i class="las la-ellipsis-h datatable__more"></i>
                        </td>
                    </tr>
                </template>
            </tbody>

            <tfoot
                class="datatable__footer"
                v-if="rows !== undefined && showFooter">

                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
            </tfoot>
        </table>
    </div>
</template>

<script setup>
    import { ref, computed, onMounted, onUnmounted } from 'vue'
    import { useStore } from 'vuex'
    import useEnv from '/@/features/useEnv.js'
    import ButtonApp from '/@/components/Button.vue'
    import useLanguage from '/@/features/useLanguage.js'
    import LoadingLinear from '/@/components/Loading/Linear.vue'
    import OrganizationUsers from '/@/api/organization_users.js'
    import { useDebounceFn } from '@vueuse/core'

    const { env } = useEnv()
    const store = useStore()
    const { lang } = useLanguage()

    const user = computed(() => store.state.user)

    const perPage = ref(25)
    const search = ref('')
    const rows = ref(null)
    const isLoading = ref(false)
    const showFooter = ref(false)
    const total = ref('')
    const sortBy = ref('role_order')
    const sortDirection = ref('asc')
    const datatableContainer = ref(null)

    fetchData()

    async function fetchData() {
        isLoading.value = true

        const result = await OrganizationUsers.get({
            organizationId: user.value.organization_id,
            perPage: perPage.value,
            search: search.value,
            orderBy: sortBy.value,
            sortDirection: sortDirection.value,
        })

        rows.value = result.data

        if (!search.value) {
            total.value = result.total 
        }

        isLoading.value = false
    }

    const searchedRows = computed(() => {
        if (!search.value) return rows.value

        return rows.value.filter(row => {
            return row.name.includes(search.value) || row.email.includes(search.value)
        })
    })
    
    function orderBy(field) {
        sortBy.value = field
        
        if (total.value > rows.value.length) {
            fetchData()
        } else {
            sortTable()
        }

        if (sortDirection.value == 'asc') {
            sortDirection.value = 'desc'
        } else {
            sortDirection.value = 'asc'
        }
    }

    function sortTable() {
        if (sortDirection.value == 'asc') {
            rows.value.sort((a,b) => (a[sortBy.value] > b[sortBy.value] ? 1 : -1))
        } else {
            rows.value.sort((a,b) => (a[sortBy.value] < b[sortBy.value] ? 1 : -1))
        }
    }

    const performSearch = useDebounceFn(() => {
        if (total.value > rows.value.length) {
            fetchData()
        }
    }, 250)

    function onDatatableScroll(event) {
        const target = event.target
        
        if (target.scrollTop + window.innerHeight >= target.scrollHeight) {
            if (!isLoading.value && total.value > perPage.value) {
                perPage.value += 25
                fetchData()
            }
        }
    }
</script>
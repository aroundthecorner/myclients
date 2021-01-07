<template>
    <div class="datatable-users__toolbar">
        <input
            type="text"
            placeholder="Search"
            class="app-input w-300"
        />

        <app-button class="button--primary">
            New user
        </app-button>
    </div>

    <div class="datatable-container">
        <table class="datatable">

            <!-- Loading... -->
            <div v-if="isLoading" class="datatable__loading">
                <loading-linear borderRadius="0 0 4px 4px" />
            </div>

            <thead>
                <!-- Filters -->
                <tr
                    v-if="showFilters"
                    class="datatable__filters"
                    :class="{ sticky: stickyHeader }">
                    
                    <td class="datatable__cell">
                        <button>Filter 1</button>
                    </td>

                    <td class="datatable__cell">
                        <button>Filter 3</button>
                    </td>

                    <td class="datatable__cell">
                        <button>Filter 4</button>
                    </td>

                    <td class="datatable__cell">
                        <input />
                    </td>

                    <td class="datatable__cell">
                        <button>Filter 5</button>
                    </td>

                    <td class="datatable__cell">
                        <button>Filter 6</button>
                    </td>

                    <td class="datatable__cell">
                        <input />
                    </td>

                    <td class="datatable__cell">
                        <input />
                    </td>

                    <td class="datatable__cell">
                        <button>Filter 7</button>
                    </td>

                    <td class="datatable__cell">
                        <button>Filter 8</button>
                    </td>

                    <td class="datatable__cell">
                        <button>Filter 9</button>
                    </td>
                </tr>

                <!-- Headings -->
                <tr class="datatable__header" :class="{ sticky: stickyHeader }">
                    <td class="datatable__cell w-25p" @click="sortBy('')">name</td>
                    <td class="datatable__cell" @click="sortBy('')">role</td>
                    <td class="datatable__cell" @click="sortBy('')">email</td>
                    <td class="datatable__cell" @click="sortBy('')">user since</td>
                    <td class="datatable__cell w-10p" @click="sortBy('')"></td>
                </tr>
            </thead>


            <!-- Rows -->
            <tbody>
                <template v-if="data.rows !== undefined">
                    <tr
                        v-for="n in 50"
                        :key="n"
                        class="datatable__row"
                        :class="{ 'datatable__loading-on': isLoading }">

                        <td class="datatable__cell">
                            <div class="datatable__user-name">
                                <div>
                                    <img
                                        class="datatable__user-name-img sidebar__profile-pic sidebar__profile-pic--no-border"
                                        :src="`${env('VITE_SERVER_URL')}/${user.profile_picture}`"
                                    />
                                </div>

                                <div class="datatable__user-text">
                                    <div class="datatable__user-title">Mārtiņš Zeltiņš</div>
                                    <div class="datatable__user-subtitle">root</div>
                                </div>
                            </div>
                        </td>

                        <td class="datatable__cell">root</td>
                        <td class="datatable__cell">admin@myclients.org</td>
                        <td class="datatable__cell">25.11.2020</td>

                        <td class="datatable__cell text-right">
                            <i class="las la-ellipsis-h datatable__more"></i>
                        </td>
                    </tr>
                </template>
            </tbody>

            <tfoot
                class="datatable__footer"
                v-if="data.rows !== undefined && showFooter">

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

    <!-- Pagination -->
    <div
        v-if="pagination.totalPages > 1 && showPagination"
        class="datatable__pagination">
        
        <ul class="datatable__pagination-items">
            <li :class="prevPageClass" @click="prevPage">
                <a>prev</a>
            </li>

            <li
                @click="goToPage(pagination.firstPage)"
                v-if="pagination.currentPage > pagination.firstPage">

                <a>{{ pagination.firstPage }}</a>
            </li>

            <li
                v-if="(pagination.currentPage - 1) > pagination.firstPage"
                @click="goToPage(pagination.prevPage)">

                <a>{{ pagination.prevPage }}</a>
            </li>

            <li class="datatable__pagination-active">
                <a>{{ pagination.currentPage }}</a>
            </li>

            <li
                v-if="(pagination.currentPage + 1) < pagination.totalPages"
                @click="goToPage(pagination.nextPage)">

                <a>{{ pagination.nextPage }}</a>
            </li>

            <li
                v-if="pagination.currentPage < pagination.totalPages"
                @click="goToPage(pagination.totalPages)">
                
                <a>{{ pagination.totalPages }}</a>
            </li>

            <li :class="nextPageClass" @click="nextPage">
                <a>next</a>
            </li>
        </ul>
    </div>
</template>

<script setup>
    import { useStore } from 'vuex'
    import { ref, computed } from 'vue'
    import AppButton from '../Button.vue'
    import useEnv from '../../features/useEnv.js'
    import LoadingLinear from '../Loading/Linear.vue'

    const { env } = useEnv()
    const store = useStore()
    const isLoading = ref(false)
    const showFooter = ref(false)
    const showFilters = ref(false)
    const stickyHeader = ref(true)
    const showCheckbox = ref(false)
    const showPagination = ref(false)

    const data = ref({
        rows: []
    })

    const pagination = ref({
        totalPages: 2,
        currentPage: 1,
        firstPage: 1,
        prevPage: 1,
    })

    const user = computed(() => store.state.user)

    const prevPageClass = computed(() => {
        return {
            'enabled': ((pagination.value.currentPage - 1) > 0) ? true : false,
            'disabled': ((pagination.value.currentPage - 1) <= 0) ? true : false,
        }
    })

    const nextPageClass = computed(() => {
        return {
            'enabled': (pagination.value.currentPage < pagination.value.totalPages) ? true : false,
            'disabled': (pagination.value.currentPage >= pagination.value.totalPages) ? true : false,
        }
    })
    
    function sortBy(field) {
        //
    }

    function prevPage() {
        //
    }

    function nextPage() {
        //
    }

    function goToPage(page) {
        //
    }
</script>
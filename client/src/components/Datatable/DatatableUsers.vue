<template>
    <div class="datatable-users__toolbar">
        <input value="Search">
        <button>New user</button>
    </div>

    <div class="datatable-container">
        <table class="datatable">

            <!-- Loading... -->
            <div class="datatable__loading">
                Loading...
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
                    <td class="datatable__cell" @click="sortBy('created_at')">date</td>
                    <td class="datatable__cell" @click="sortBy('employee_id')">cashier</td>
                    <td class="datatable__cell" @click="sortBy('employee_id')">food</td>
                    <td class="datatable__cell" @click="sortBy('order_sum')">sum</td>
                    <td class="datatable__cell" @click="sortBy('payment_method')">payment_method</td>
                    <td class="datatable__cell" @click="sortBy('is_paid')">paid</td>
                    <td class="datatable__cell" @click="sortBy('discount')">discount_sigma</td>
                    <td class="datatable__cell" @click="sortBy('applied_discount')">discount</td>
                    <td class="datatable__cell" @click="sortBy('applied_discount_type')">discount_type</td>
                    <td class="datatable__cell" @click="sortBy('is_deleted')">deleted</td>
                    <td class="datatable__cell" @click="sortBy('table')">table</td>
                </tr>
            </thead>


            <!-- Rows -->
            <tbody>
                <template v-if="data.rows !== undefined">
                    <tr
                        v-for="n in 100"
                        :key="n"
                        class="datatable__row"
                        :class="{ 'datatable__loading-on': isLoading }">

                        <td class="datatable__cell">created_at</td>
                        <td class="datatable__cell">fullname</td>
                        <td class="datatable__cell">Hello</td>
                        <td class="datatable__cell">order_sum</td>
                        <td class="datatable__cell">cash</td>
                        <td class="datatable__cell">yes</td>
                        <td class="datatable__cell">discount</td>
                        <td class="datatable__cell">applied_discount</td>
                        <td class="datatable__cell">applied_discount_type</td>
                        <td class="datatable__cell">yes</td>
                        <td class="datatable__cell">table</td>
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
                    <td></td>
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
        v-if="pagination.totalPages > 1"
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
    import { ref, computed } from 'vue'

    const isLoading = ref(false)
    const showFooter = ref(false)
    const showFilters = ref(false)
    const stickyHeader = ref(false)
    const showCheckbox = ref(false)

    const data = ref({
        rows: []
    })

    const pagination = ref({
        totalPages: 2,
        currentPage: 1,
        firstPage: 1,
        prevPage: 1,
    })

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
<template>
    <div class="calendar-toolbar">
        <div class="calendar-toolbar__row">
            <app-button
                class="button--primary"
                loading-color="#fff">
                Add appointment
            </app-button>

            <app-button @click="toggleFilters">
                Filters
            </app-button>

            <div class="calendar-toolbar__arrow">
                <svg-left-arrow />
            </div>

            <div class="calendar-toolbar__arrow">
                <svg-right-arrow />
            </div>

            <div class="calendar-toolbar__date">
                December 12, 2020
            </div>

            <app-button
                class="button--primary"
                loading-color="#fff">
                Day
            </app-button>

            <app-button>
                Week
            </app-button>

            <app-button>
                Month
            </app-button>
        </div>

        <div
            v-if="showFilters"
            class="calendar-toolbar__row">

            <dropdown-menu
                placement="bottom"
                offsetY="10"
                v-model="showLocationMenu">

                <app-button @click="showLocationMenu = !showLocationMenu">
                    <div class="button__select-content">
                        <span>Location</span>
                        
                        <div class="button__icon">
                            <svg-down-arrow />
                        </div>
                    </div>
                </app-button>

                <template #dropdown>
                    <div class="dropdown-menu">
                        <div class="dropdown-menu__item">E. Birznieka Upisa 99</div>
                        <div class="dropdown-menu__item">A. Grina bulvaris 11 - 2</div>
                        <div class="dropdown-menu__item">Aleksandra Caka iela 14</div>
                    </div>
                </template>
            </dropdown-menu>

            

            <app-button>
                <div class="button__select-content">
                    <span>Providers</span>
                    
                    <div class="button__icon">
                        <svg-down-arrow />
                    </div>
                </div>
            </app-button>

            <app-button>
                <div class="button__select-content">
                    <span>Services</span>
                    
                    <div class="button__icon">
                        <svg-down-arrow />
                    </div>
                </div>
            </app-button>
        </div>
    </div>
</template>

<script setup>
    import { ref } from 'vue'
    import AppButton from '../Button.vue'
    import SvgLeftArrow from '../Svg/LeftArrow.vue'
    import SvgDownArrow from '../Svg/DownArrow.vue'
    import DropdownMenu from './../DropdownMenu.vue'
    import SvgRightArrow from '../Svg/RightArrow.vue'

    const showFilters = ref(false)
    const showLocationMenu = ref(false)

    function toggleFilters()
    {
        showFilters.value = !showFilters.value
    }
</script>
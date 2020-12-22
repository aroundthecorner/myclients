<template>
    <div class="calendar-toolbar">
        <div class="calendar-toolbar__row">
            <app-button
                class="calendar-toolbar__button button--primary"
                loading-color="#fff">
                
                <div class="calendar-toolbar__add-appointment">
                    Add appointment
                </div>

                <div class="calendar-toolbar__add-appointment-small">
                    <i class="las la-plus-circle"></i>
                </div>
            </app-button>

            <app-button
                class="calendar-toolbar__button"
                @click="toggleFilters">
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
                class="calendar-toolbar__button button--primary"
                loading-color="#fff">
                Day
            </app-button>

            <app-button class="calendar-toolbar__button">
                Week
            </app-button>

            <app-button class="calendar-toolbar__button">
                Month
            </app-button>
        </div>

        <div
            v-if="showFilters"
            class="calendar-toolbar__row">

            <dropdown-menu
                placement="bottom"
                offsetY="10"
                max-height="300px"
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
                        <div class="dropdown-menu__item">E. Birznieka Upisa 99</div>
                        <div class="dropdown-menu__item">E. Birznieka Upisa 99</div>
                        <div class="dropdown-menu__item">E. Birznieka Zeltina iela 1</div>
                        <div class="dropdown-menu__item">E. Birznieka Upisa 55</div>
                        <div class="dropdown-menu__item">E. Birznieka Upisa 99</div>
                        <div class="dropdown-menu__item">E. Birznieka Upisa 99</div>
                        <div class="dropdown-menu__item">E. Birznieka Upisa 3</div>
                        <div class="dropdown-menu__item">E. Birznieka Upisa 99</div>
                        <div class="dropdown-menu__item">A. Grina bulvaris 11 - 2</div>
                        <div class="dropdown-menu__item">A. Grina bulvaris 11 - 2</div>
                        <div class="dropdown-menu__item">Aleksandra Caka iela 14</div>
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
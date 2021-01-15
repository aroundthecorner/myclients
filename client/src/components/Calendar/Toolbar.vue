<template>
    <div class="calendar-toolbar">
        <div class="calendar-toolbar__row">
            <button-app
                class="calendar-toolbar__button button--primary"
                loading-color="#fff">
                
                <div class="calendar-toolbar__add-appointment">
                    Add appointment
                </div>

                <div class="calendar-toolbar__add-appointment-small">
                    <i class="las la-plus-circle"></i>
                </div>
            </button-app>

            <button-app
                class="calendar-toolbar__button"
                @click="toggleFilters">
                Filters
            </button-app>

            <div class="calendar-toolbar__arrow">
                <svg-left-arrow />
            </div>

            <div class="calendar-toolbar__arrow">
                <svg-right-arrow />
            </div>

            <div class="calendar-toolbar__date">
                December 12, 2020
            </div>

            <button-app
                class="calendar-toolbar__button button--primary"
                loading-color="#fff">
                Day
            </button-app>

            <button-app class="calendar-toolbar__button">
                Week
            </button-app>

            <button-app class="calendar-toolbar__button">
                Month
            </button-app>
        </div>

        <div
            v-if="showFilters"
            class="calendar-toolbar__row">

            <dropdown-menu
                placement="bottom"
                offsetY="10"
                max-height="300px"
                v-model="showLocationMenu">

                <button-app @click="showLocationMenu = !showLocationMenu">
                    <div class="button__select-content">
                        <span>Location</span>
                        
                        <div class="button__icon">
                            <svg-down-arrow />
                        </div>
                    </div>
                </button-app>

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

            <button-app>
                <div class="button__select-content">
                    <span>Providers</span>
                    
                    <div class="button__icon">
                        <svg-down-arrow />
                    </div>
                </div>
            </button-app>

            <button-app>
                <div class="button__select-content">
                    <span>Services</span>
                    
                    <div class="button__icon">
                        <svg-down-arrow />
                    </div>
                </div>
            </button-app>
        </div>
    </div>
</template>

<script setup>
    import { ref } from 'vue'
    import ButtonApp from '../Button.vue'
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
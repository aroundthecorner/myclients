<template>
    <div
        class="albus-dropdown"
        ref="dropdownmenu"
        :class="{ 'albus-dropdown-dropup': positionY == 'top' }">

        <slot></slot>

        <transition :name="transition">
            <div
                v-show="modelValue"
                v-cloak
                class="albus-dropdown-menu albus-dropdown-show"
                :class="{ 'albus-dropdown-menu-right': positionX == 'right', 'albus-dropdown-menu-center': positionX == 'center' }"
                :style="{ 'margin-left': offsetX, 'margin-right': offsetX, 'margin-top': offsetY, 'margin-bottom': offsetY }"
                @click="closeOnClick"
                ref="dropdown">

                <slot name="dropdown"></slot>
            </div>
        </transition>
    </div>
</template>

<script>
    import { ref, watch, onUnmounted, toRefs, nextTick, onBeforeUnmount } from 'vue'

    export default {
        props: {
            modelValue: {
                type: Boolean,
                default: false,
            },

            positionX: {
                type: String,
                default: 'center',
            },

            positionY: {
                type: String,
                default: 'bottom',
            },

            transition: {
                type: String,
                default: 'fade',
            },

            offsetX: {
                type: String,
                default: '0px',
            },

            offsetY: {
                type: String,
                default: '5px',
            },

            closeOnClick: {
                type: Boolean,
                default: true,
            },
        },

        setup(props, { emit })
        {
            const positionX = ref('')
            const positionY = ref('')
            const dropdown = ref('')
            const dropdownmenu = ref('')
            let { modelValue } = toRefs(props)

            positionX.value = props.positionX
            positionY.value = props.positionY

            function closeOnClick()
            {
                if (props.closeOnClick) {
                    emit('update:modelValue', false)
                }
            }

            function closeMenu($event)
            {
                if (!(dropdownmenu.value === event.target || dropdownmenu.value.contains(event.target))) {
                    if (modelValue.value == true) {
                        emit('update:modelValue', false)
                    }
                }
            }

            watch(modelValue, (value) => {
                positionX.value = props.positionX
                positionY.value = props.positionY

                if (value == true) {
                    window.addEventListener('click', closeMenu)
                } else {
                    window.removeEventListener('click', closeMenu)
                }

                nextTick(() => {
                    let rect = dropdown.value.getBoundingClientRect()
                    let window_height = (window.innerHeight || document.documentElement.clientHeight)
                    let window_width  = (window.innerWidth || document.documentElement.clientWidth)

                    // console.log('rect.bottom: ', rect.bottom)
                    // console.log('window_height: ', window_height)
                    // console.log('rect.top: ', rect.top)
                    // console.log('rect.height: ', rect.height)

                    if ((rect.bottom > window_height) && (rect.top >= rect.height)) {
                        positionY.value = 'top'
                    }

                    if ((rect.left + rect.width + 30) > window_width) {
                        positionX.value = 'right'
                    }

                    if (rect.left < 0) {
                        positionX.value = 'left'
                    }
                })
            })

            onBeforeUnmount(() => {
                window.removeEventListener('click', closeMenu)
            })

            return {
                positionX, positionY, dropdown, dropdownmenu, closeOnClick
            }
        },
    }
</script>

<style>
    .albus-dropdown {
        display: inline-block;
    }

    .albus-dropdown,
    .albus-dropdown-dropleft,
    .albus-dropdown-dropright,
    .albus-dropdown-dropup {
        position: relative;
    }

    .albus-dropdown-dropup .albus-dropdown-menu {
        top: auto;
        bottom: 100%;
        margin-top: 0;
    }

    .albus-dropdown-menu.albus-dropdown-show {
        display: block;
    }

    .albus-dropdown-menu-right {
        right: 0;
        left: auto;
    }

    .albus-dropdown-menu-center {
        left: 50%;
        transform: translateX(-50%);
    }

    .albus-dropup .dropdown-menu {
        top: auto;
        bottom: 100%;
        margin-top: 0;
    }

    .albus-dropdown-menu {
        position: absolute;
        width: max-content;
    }

    [v-cloak] { 
        display: none; 
    }
</style>
<template>
    <div
        ref="activatorContainer"
        class="albus-dropdown-menu-activator">

        <slot></slot>
    </div>

    <teleport to="body">
        <div
            ref="menu"
            :class="{ 'albus-dropdown-visible': modelValue }"
            v-cloak
            class="albus-dropdown-menu"
            :style="{ 'left': left + 'px', top: top + 'px', 'min-width': width + 'px', 'max-height': maxHeight }">

            <slot name="dropdown"></slot>
        </div>
    </teleport>
</template>

<script>
    import { onMounted, onBeforeUnmount, ref, toRefs, watch, nextTick } from 'vue'

    export default {
        props: {
            modelValue: {
                type: Boolean,
                default: false,
            },

            // Actual placement of top, left, bottom, right
            placement: {
                type: String,
                default: 'bottom',
            },

            // Within placement how to align it if placement is top or bottom
            alignX: {
                type: String,
                default: 'center',
            },

            // Within placement how to align it if placement is left or right
            alignY: {
                type: String,
                default: 'center',
            },

            offsetX: {
                type: String,
                default: '0',
            },

            offsetY: {
                type: String,
                default: '0',
            },

            // Should we start min-width with the width of activator
            fullWidth: {
                type: Boolean,
                default: true,
            },
            
            maxHeight: {
                type: String,
                default: 'auto',
            }
        },

        setup(props, { emit, slots })
        {
            let { modelValue } = toRefs(props)
            const activatorElement = ref('')
            const activatorContainer = ref('')
            const menu = ref('')
            
            const top = ref(0)
            const left = ref(0)
            const width = ref('auto')
            const height = ref(0)

            const placement = ref(props.placement)

            function closeMenu($event)
            {
                if (!(activatorContainer.value === event.target || activatorContainer.value.contains(event.target))) {
                    if (!(menu.value === event.target || menu.value.contains(event.target))) {
                        if (modelValue.value == true) {
                            emit('update:modelValue', false)
                        }
                    }
                }
            }

            function calculatePosition()
            {
                activatorElement.value = activatorContainer.value.childNodes[1]

                let window_height = (window.innerHeight || document.documentElement.clientHeight)
                let window_width  = (window.innerWidth || document.documentElement.clientWidth)

                // Full width
                if (props.fullWidth == true) {
                    width.value = activatorElement.value.offsetWidth
                }

                nextTick(() => {
                    // Auto detect window edge
                    if (placement.value == 'bottom') {
                        let potentialTop = activatorElement.value.offsetTop
                            potentialTop += activatorElement.value.offsetHeight
                            potentialTop += parseInt(props.offsetY)

                        if ((potentialTop + menu.value.offsetHeight) > window_height) {
                            placement.value = 'top'
                        }
                    }

                    if (placement.value == 'top') {
                        let potentialTop = activatorElement.value.offsetTop - menu.value.offsetHeight
                            potentialTop -= parseInt(props.offsetY)

                        if (potentialTop < 0) {
                            placement.value = 'bottom'
                        }
                    }

                    if (placement.value == 'left') {
                        let potentialLeft = activatorElement.value.offsetLeft - menu.value.offsetWidth
                            potentialLeft -= parseInt(props.offsetX)

                        if (potentialLeft < 0) {
                            placement.value = 'right'
                        }
                    }

                    if (placement.value == 'right') {
                        let potentialLeft = activatorElement.value.offsetLeft + activatorElement.value.offsetWidth
                            potentialLeft += parseInt(props.offsetX)

                        if ((potentialLeft + menu.value.offsetWidth) > window_width) {
                            placement.value = 'left'
                        }
                    }



                    // Actual placement
                    if (placement.value == 'bottom')
                    {
                        top.value = activatorElement.value.offsetTop
                        left.value = activatorElement.value.offsetLeft
                        top.value += activatorElement.value.offsetHeight

                        // Formula for getting in middle
                        left.value = left.value + ((activatorElement.value.offsetWidth - menu.value.offsetWidth) / 2)

                        // Too close to the edge?
                            if (left.value < 0) {
                                left.value = activatorElement.value.offsetLeft
                            }

                            if ((left.value + menu.value.offsetWidth) > window_width) {
                                let end = activatorElement.value.offsetLeft + activatorElement.value.offsetWidth
                                left.value = end - menu.value.offsetWidth
                            }

                        // Offset
                        top.value += parseInt(props.offsetY)
                        left.value += parseInt(props.offsetX)
                    }

                    if (placement.value == 'top')
                    {
                        top.value = activatorElement.value.offsetTop - menu.value.offsetHeight
        
                        // Formula for getting in middle
                        left.value = activatorElement.value.offsetLeft
                        left.value = left.value + ((activatorElement.value.offsetWidth - menu.value.offsetWidth) / 2)

                        // Too close to the edge?
                            if (left.value < 0) {
                                left.value = activatorElement.value.offsetLeft
                            }

                            if ((left.value + menu.value.offsetWidth) > window_width) {
                                let end = activatorElement.value.offsetLeft + activatorElement.value.offsetWidth
                                left.value = end - menu.value.offsetWidth
                            }

                        // Offset
                        top.value -= parseInt(props.offsetY)
                        left.value += parseInt(props.offsetX)
                    }

                    if (placement.value == 'left')
                    {
                        left.value = activatorElement.value.offsetLeft - menu.value.offsetWidth

                        // Formula for getting in middle
                        top.value = activatorElement.value.offsetTop
                        top.value = top.value + ((activatorElement.value.offsetHeight - menu.value.offsetHeight) / 2)

                        // Too close to the edge?
                            if (top.value < 0) {
                                top.value = activatorElement.value.offsetTop
                            }

                            if ((top.value + menu.value.offsetHeight) > window_height) {
                                let bottom = activatorElement.value.offsetTop + activatorElement.value.offsetHeight
                                top.value = bottom - menu.value.offsetHeight
                            }

                        // Offset
                        top.value += parseInt(props.offsetY)
                        left.value -= parseInt(props.offsetX)
                    }

                    if (placement.value == 'right')
                    {
                        left.value = activatorElement.value.offsetLeft + activatorElement.value.offsetWidth

                        // Formula for getting in middle
                        top.value = activatorElement.value.offsetTop
                        top.value = top.value + ((activatorElement.value.offsetHeight - menu.value.offsetHeight) / 2)

                        // Too close to the edge?
                            if (top.value < 0) {
                                top.value = activatorElement.value.offsetTop
                            }

                            if ((top.value + menu.value.offsetHeight) > window_height) {
                                let bottom = activatorElement.value.offsetTop + activatorElement.value.offsetHeight
                                top.value = bottom - menu.value.offsetHeight
                            }

                        // Offset
                        top.value += parseInt(props.offsetY)
                        left.value += parseInt(props.offsetX)
                    }
                })
            }

            onMounted(() => {
                calculatePosition()
            })

            onBeforeUnmount(() => {
                window.removeEventListener('click', closeMenu)
            })

            watch(modelValue, (value) => {
                if (value == true) {
                    calculatePosition()
                    window.addEventListener('click', closeMenu)
                } else {
                    window.removeEventListener('click', closeMenu)
                }
            })

            return {
                activatorContainer, top, left, width, height, menu
            }
        }
    }
</script>

<style>
    .albus-dropdown-menu {
        position: absolute;
        display: inline-block;
        overflow-y: auto;
        overflow-x: hidden;
        contain: content;
        will-change: transform;
        visibility: hidden;
        transition: opacity .2s;
        opacity: 0;
        z-index: 999;
        border-radius: 8px;
        box-shadow: 0 5px 5px -3px rgba(0,0,0,.1), 0 8px 10px 1px rgba(0,0,0,.1), 0 3px 14px 2px rgba(0,0,0,.1);
    }

    .albus-dropdown-menu-activator {
        display: inline-block;
    }

    .albus-dropdown-visible {
        visibility: visible;
        opacity: 1;
    }
</style>
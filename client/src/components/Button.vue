<template>
    <div class="button">
        <div
            class="button__content"
            :class="{ 'button__content--hidden': isLoading }">
            <slot></slot>
        </div>

        <div
            class="button__loader"
            :class="{ 'button__loader--hidden': !isLoading }">
            <loading-circle :color="loadingColor" />
        </div>
    </div>
</template>

<script setup>
    import { defineProps } from 'vue'
    import LoadingCircle from '/@/components/Loading/Circle.vue'

    const props = defineProps({
        isLoading: Boolean,
        loadingColor: String,
    })
</script>
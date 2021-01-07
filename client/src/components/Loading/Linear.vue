<template>
    <div class="v-progress-linear" :style="{ 'height': height, 'border-radius': borderRadius }">
        <div class="v-progress-linear__background" :style="{ 'background-color': color }"></div>
        <div class="v-progress-linear__buffer"></div>

        <div class="v-progress-linear__indeterminate">
            <div class="v-progress-linear__indeterminate--long" :style="{ 'background-color': color }"></div>
            <div class="v-progress-linear__indeterminate--short" :style="{ 'background-color': color }"></div>
        </div>
    </div>
</template>

<script setup>
    import { defineProps } from 'vue'

    const props = defineProps({
        height: Number,
        color: String,
        borderRadius: String,
    })
</script>
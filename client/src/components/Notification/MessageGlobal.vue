<template>
    <transition name="bounce">
        <div
            v-if="messageGlobal.show"
            @click="hide"
            v-html="messageGlobal.body"
            class="message-global">
        </div>
    </transition>
</template>

<script setup>
    import { computed } from 'vue'
    import { useStore } from 'vuex'

    const store = useStore()
    const messageGlobal = computed(() => store.state.app.messageGlobal)

    function hide() {
        store.dispatch('app/hideMessageGlobal')
    }
</script>
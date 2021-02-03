<template>
    <div v-if="messageGlobal.show" class="message-global__overlay">
        <transition name="bouncecenter">
            <div
                v-if="messageGlobal.show"
                class="message-global">
                
                <div v-html="messageGlobal.body"></div>
                
                <div @click="hide" class="message-global__close">
                    <svg-close />
                </div>
            </div>
        </transition>
    </div>
</template>

<script setup>
    import { computed } from 'vue'
    import { useStore } from 'vuex'
    import SvgClose from '/@/components/Svg/Close.vue'

    const store = useStore()
    const messageGlobal = computed(() => store.state.app.messageGlobal)

    function hide() {
        store.dispatch('app/hideMessageGlobal')
    }
</script>
<template>
    <transition name="bounce">
        <div
            v-if="notificationMessage.show"
            @click="hide"
            class="notification-popup">

            <div class="notification-popup__left">
                <img
                    class="notification-popup__icon h-45"
                    :src="notificationMessage.icon"
                />
            </div>

            <div>
                <div class="notification-popup__title">
                    {{ notificationMessage.title }}
                </div>

                <div class="notification-popup__description fs-17">
                    {{ notificationMessage.body }}
                </div>

                <div v-if="false" class="notification-popup__buttons">
                    <div class="app-button app-button--notification">
                        Button 1
                    </div>

                    <div class="app-button app-button--notification">
                        Button 2
                    </div>
                </div>
            </div>
        </div>
    </transition>
</template>

<script setup>
    import { computed, watch } from 'vue'
    import { useStore } from 'vuex'

    const store = useStore()
    const notificationMessage = computed(() => store.state.app.notificationMessage)

    function hide() {
        store.dispatch('app/hideNotificationMessage')
    }

    watch(notificationMessage, () => {
        if (notificationMessage.value.show) {
            setTimeout(() => {
                hide()
            }, 1000 * notificationMessage.value.hideDelay)
        }
    })
</script>
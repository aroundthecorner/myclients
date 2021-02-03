<template>
    <transition name="bounce">
        <div
            v-if="serverError.show"
            @click="hide"
            class="notification-popup">

            <div class="notification-popup__left">
                <img
                    class="notification-popup__icon"
                    src="/img/error.png"
                />
            </div>

            <div>
                <div class="notification-popup__title">
                    {{ serverError.statusText }}
                </div>

                <div class="notification-popup__description">
                    <b>{{ lang('Status code') }}</b>: {{ serverError.statusCode }}
                </div>
                
                <div class="notification-popup__description">
                    <b>{{ lang('Client API') }}</b>: {{ serverError.clientAPI }}
                </div>

                <div class="notification-popup__description">
                    <b>{{ lang('URL') }}</b>: {{ serverError.url }}
                </div>

                <div
                    v-if="appEnv == 'dev'"
                    class="notification-popup__description">
                    
                    <i>
                        {{ excerpt(serverError.body) }}
                    </i>
                </div>
            </div>
        </div>
    </transition>
</template>

<script setup>
    import { computed } from 'vue'
    import { useStore } from 'vuex'
    import useEnv from '/@/features/useEnv.js'
    import useLanguage from '/@/features/useLanguage.js'

    const { env } = useEnv()
    const store = useStore()
    const { lang } = useLanguage()

    const serverError = computed(() => store.state.app.serverError)
    const appEnv = env('VITE_APP_ENV')

    function excerpt(string) {
        let index = string.indexOf('trace')
        if (index > -1) {
            return string.substr(0, index) + '...'
        } else {
            return string.substr(0, 120) + '...'
        }
    }

    function hide() {
        store.dispatch('app/hideServerError')
    }
</script>
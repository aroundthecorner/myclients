<template>
    <teleport to="head">
        <title>Profile settings - myclients</title>
    </teleport>

    <div class="page">
        <div class="page-container">
            <div class="page-navigation">
                <div class="page-navigation__item page-navigation__item--active">
                    Profile Settings
                </div>

                <div class="page-navigation__item">
                    Organization Settings
                </div>

                <div class="page-navigation__item">
                    Users
                </div>
            </div>

            <div class="page-container__content">
                <div class="settings-items">
                    <div class="settings-item">
                        <div class="settings-item__left">
                            <div class="settings-item__title">
                                Name
                            </div>
                        </div>

                        <div class="settings-item__right">
                            <input
                                type="text"
                                class="app-input w-250"
                                v-model="user.name"
                            />
                        </div>
                    </div>

                    <div class="settings-item">
                        <div class="settings-item__left">
                            <div class="settings-item__title">
                                Email
                            </div>
                        </div>

                        <div class="settings-item__right">
                            <input
                                type="text"
                                class="app-input w-250"
                                v-model="user.email"
                            />
                        </div>
                    </div>

                    <div class="settings-item">
                        <div class="settings-item__left">
                            <div class="settings-item__title">
                                Password
                            </div>
                        </div>

                        <div class="settings-item__right">
                            <input
                                class="app-input w-250"
                                type="password"
                                v-model="password"
                            />
                        </div>
                    </div>

                    <div class="settings-item">
                        <div class="settings-item__left">
                            <div class="settings-item__title">
                                Theme
                            </div>
                        </div>

                        <div class="settings-item__right">
                            <input
                                type="text"
                                class="app-input w-250"
                                value="Change theme"
                            />
                        </div>
                    </div>

                    <div class="settings-item">
                        <div class="settings-item__left">
                            <div class="settings-item__title">
                                Profile picture
                            </div>
                        </div>

                        <div class="settings-item__right">
                            <app-button class="button--flat inline w-250 text-center">
                                Upload...
                            </app-button>
                        </div>
                    </div>
                </div>

                <app-button class="button--primary inline mt-40">
                    Save settings
                </app-button>
            </div>
        </div>
    </div>
</template>

<script setup>
    import { useStore } from 'vuex'
    import { onBeforeRouteLeave } from 'vue-router';
    import { onMounted, inject, computed, ref } from 'vue';
    import AppButton from '../../components/Button.vue'
    
    const store = useStore()
    const progressBar = inject('progressBar')

    const password = ref('')
    const user = computed(() => store.state.user)

    onBeforeRouteLeave(() => {
        progressBar.start()
    })

    onMounted(() => {
        progressBar.finish()
    })
</script>
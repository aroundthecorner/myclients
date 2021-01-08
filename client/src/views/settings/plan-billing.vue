<template>
    <teleport to="head">
        <title>Plan & billing - myclients</title>
    </teleport>

    <div class="page">
        <div class="page-container">
            <settings-navigation />

            <div class="page-container__content">
                <div class="your-subscription">
                    <div class="your-subscription__title">Your Subscription Plan</div>
                    <div class="your-subscription__plan">Monthly</div>
                </div>

                 <div class="settings-items">
                    <div class="settings-item">
                        <div class="settings-item__left">
                            <div class="settings-item__title">
                                Change subscription plan
                            </div>
                        </div>

                        <div class="settings-item__right">
                            <div class="subscription-plans">
                                <div class="subscription-plans__plan subscription-plans__plan--selected">
                                    <div class="subscription-plans__money">
                                        <div class="subscription-plans__sign">€</div>
                                        <div class="subscription-plans__amount">15</div>
                                    </div>

                                    <div class="subscription-plans__name">Monthly</div>
                                </div>

                                <div class="subscription-plans__plan">
                                    <div class="subscription-plans__money">
                                        <div class="subscription-plans__sign">€</div>
                                        <div class="subscription-plans__amount">99</div>
                                    </div>

                                    <div class="subscription-plans__name">Yearly</div>
                                </div>

                                <div class="subscription-plans__plan">
                                    <div class="subscription-plans__money">
                                        <div class="subscription-plans__sign">€</div>
                                        <div class="subscription-plans__amount">350</div>
                                    </div>

                                    <div class="subscription-plans__name">Forever</div>
                                </div>
                            </div>
                        </div>
                    </div>
                 </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    import { onBeforeRouteLeave } from 'vue-router';
    import { onMounted, inject } from 'vue';
    import SettingsNavigation from '../../components/Navigation/SettingsNavigation.vue'
    
    const progressBar = inject('progressBar')

    /**
     * Page navigation progress bar
     */
    onBeforeRouteLeave(() => {
        progressBar.start()
    })

    onMounted(() => {
        progressBar.finish()
    })
</script>
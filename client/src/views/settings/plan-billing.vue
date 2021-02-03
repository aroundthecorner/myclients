<template>
    <teleport to="head">
        <title>{{ lang('Plan & Billing') }} - myclients</title>
    </teleport>

    <div class="page">
        <div class="page-container">
            <navigation-settings />

            <div class="page-container__content">
                <div class="your-subscription">
                    <div class="your-subscription__title">{{ lang('Your Subscription Plan') }}</div>
                    
                    <div class="your-subscription__plan">
                        <div v-if="!isLoading">{{ lang('Monthly') }}</div>

                        <div v-else class="your-subscription__loading">
                            <loading-circle color="#fff" />
                        </div>
                    </div>
                </div>

                 <div class="settings-items">
                    <div class="settings-item">
                        <div class="settings-item__left">
                            <div class="settings-item__title">
                                {{ lang('Change subscription plan') }}
                            </div>
                        </div>

                        <div class="settings-item__right">
                            <div class="subscription-plans">
                                <div class="subscription-plans__plan subscription-plans__plan--selected">
                                    <div class="subscription-plans__money">
                                        <div class="subscription-plans__sign">€</div>
                                        <div class="subscription-plans__amount">15</div>
                                    </div>

                                    <div class="subscription-plans__name">{{ lang('Monthly') }}</div>
                                </div>

                                <div class="subscription-plans__plan">
                                    <div class="subscription-plans__money">
                                        <div class="subscription-plans__sign">€</div>
                                        <div class="subscription-plans__amount">99</div>
                                    </div>

                                    <div class="subscription-plans__name">{{ lang('Yearly') }}</div>
                                </div>

                                <div class="subscription-plans__plan">
                                    <div class="subscription-plans__money">
                                        <div class="subscription-plans__sign">€</div>
                                        <div class="subscription-plans__amount">350</div>
                                    </div>

                                    <div class="subscription-plans__name">{{ lang('Forever') }}</div>
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
    import { ref } from 'vue'
    import useLanguage from '/@/features/useLanguage.js'
    import LoadingCircle from '/@/components/Loading/Circle.vue'
    import NavigationSettings from '/@/components/Navigation/Settings.vue'
    import OrganizationSubscription from '/@/api/organization_subscription.js'

    const { lang } = useLanguage()

    const isLoading = ref(false)
    const subscription = ref('')

    getOrganizationSubscription()

    async function getOrganizationSubscription() {
        isLoading.value = true

        const result = await OrganizationSubscription.get()
        subscription.value = result

        isLoading.value = false
    }
</script>
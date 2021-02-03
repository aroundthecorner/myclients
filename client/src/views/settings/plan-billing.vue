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
                        <div v-if="!isLoading">
                            {{ lang(subscription.plan.capitalize()) }}
                        </div>

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
                                <div
                                    @click="changePlan('monthly')"
                                    class="subscription-plans__plan"
                                    :class="{ 'subscription-plans__plan--selected': subscription.plan == 'monthly' }">

                                    <div class="subscription-plans__money">
                                        <div class="subscription-plans__sign">€</div>
                                        <div class="subscription-plans__amount">15</div>
                                    </div>

                                    <div class="subscription-plans__name">{{ lang('Monthly') }}</div>
                                </div>

                                <div
                                    @click="changePlan('yearly')"
                                    class="subscription-plans__plan"
                                    :class="{ 'subscription-plans__plan--selected': subscription.plan == 'yearly' }">

                                    <div class="subscription-plans__money">
                                        <div class="subscription-plans__sign">€</div>
                                        <div class="subscription-plans__amount">99</div>
                                    </div>

                                    <div class="subscription-plans__name">{{ lang('Yearly') }}</div>
                                </div>

                                <div
                                    @click="changePlan('forever')"
                                    class="subscription-plans__plan"
                                    :class="{ 'subscription-plans__plan--selected': subscription.plan == 'forever' }">

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

    async function changePlan(plan) {
        if (plan == subscription.value.plan) return

        isLoading.value = true

        subscription.value.plan = plan

        const result = await OrganizationSubscription.update({
            id: subscription.value.id,
            plan: plan,
        })

        getOrganizationSubscription()
    }

    async function getOrganizationSubscription() {
        isLoading.value = true

        const result = await OrganizationSubscription.get()
        subscription.value = result

        isLoading.value = false
    }
</script>
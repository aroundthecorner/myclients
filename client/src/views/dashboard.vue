<template>
    <teleport to="head">
        <title>myclients - {{ lang('Dashboard') }}</title>
    </teleport>

    <div class="page">
        <h2 class="upcoming-appointments-title">Upcoming appointments</h2>

        <!-- Upcoming appointments -->
        <div class="upcoming-appointments">
            <div v-for="n in 5" class="upcoming-appointments__item">
                <div class="upcoming-appointments__title">
                    <div class="upcoming-appointments__client">Līga Zeltiņa</div>
                    <div class="upcoming-appointments__status">Approved</div>
                </div>

                <div>
                    <div>
                        <i class="upcoming-appointments__icon las la-user-alt"></i>
                        <span class="upcoming-appointments__info">Dr. Bill Gates</span>
                    </div>

                    <div>
                        <i class="upcoming-appointments__icon las la-clock"></i>
                        <span class="upcoming-appointments__info">13:15 - 16:45</span>
                    </div>
                    
                    <div>
                        <i class="upcoming-appointments__icon las la-calendar"></i>
                        <span class="upcoming-appointments__info">16-Feb-2021</span>
                    </div>

                    <div>
                        <i class="upcoming-appointments__icon las la-money-bill"></i>
                        <span class="upcoming-appointments__info">$ 10.00</span>
                    </div>
                </div>
            </div>
        </div>

        <!-- Quick stats -->
        <h2 class="dashboard-title">Quick stats</h2>

        
    </div>
</template>

<script setup>
    import { onMounted, inject } from 'vue';
    import { onBeforeRouteLeave } from 'vue-router';
    import useLanguage from '../features/useLanguage.js'
    
    const progressBar = inject('progressBar')
    const { lang } = useLanguage()

    onBeforeRouteLeave(() => {
        progressBar.start()
    })

    onMounted(() => {
        progressBar.finish()
    })
</script>
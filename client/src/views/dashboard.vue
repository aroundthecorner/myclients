<template>
    <teleport to="head">
        <title>myclients - {{ lang('Dashboard') }}</title>
    </teleport>

    <div class="page">
        <!-- Quick stats -->
        <h2 class="dashboard-title">Quick stats</h2>

        <div class="quick-stats">
            <div class="quick-stats__item quick-stats__item--bookings">
                <img class="quick-stats__bubbles" src="/img/bubbles.png">
                <div class="quick-stats__count">53</div>
                <div class="quick-stats__title">Bookings</div>
            </div>

            <div class="quick-stats__item quick-stats__item--revenue">
                <img class="quick-stats__bubbles" src="/img/bubbles.png">
                <div class="quick-stats__count">$1,000.45</div>
                <div class="quick-stats__title">Revenue</div>
            </div>

            <div class="quick-stats__item quick-stats__item--clients">
                <img class="quick-stats__bubbles" src="/img/bubbles.png">
                <div class="quick-stats__count">123</div>
                <div class="quick-stats__title">Clients</div>
            </div>
        </div>


        <!-- Upcoming appointments -->
        <h2 class="upcoming-appointments-title">Upcoming appointments</h2>

        <div class="upcoming-appointments">
            <div v-for="n in 4" :key="n" class="upcoming-appointments__item">
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

        <!-- Add new appointment -->
        <div class="upcoming-appointments mt-40">
            <div class="upcoming-appointments__item upcoming-appointments__item--add">
                <div class="upcoming-appointments__add-content">
                    <div><i class="las la-plus-circle"></i></div>
                    <div>Add appointment</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    import useLanguage from '../features/useLanguage.js'
    
    const { lang } = useLanguage()
</script>
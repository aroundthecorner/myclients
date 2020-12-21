<template>
    <div class="calendar">

        <!-- Head row -->
        <div class="calendar__head-row">
            <div class="calendar__column">
                <div class="calendar__row"></div>
            </div>

            <div class="calendar__column" v-for="n in 8">
                <div class="calendar__row">
                    <img
                        class="calendar__profile-pic"
                        :src="`/img/fake_person_1.jpg`"
                    />

                    <div class="calendar__name">
                        Līga Zeltiņa
                    </div>
                </div>
            </div>
        </div>


        <!-- Calendar columns -->
        <div class="flex">

            <!-- Hours column -->
            <div class="calendar__column">
                <div
                    class="calendar__row"
                    v-for="(hour, index) in hours"
                    :key="hour.id">

                    <span
                        :id="hour.description"
                        v-if="index > 0"
                        class="calendar_hour">

                        {{ hour.description }}
                    </span>
                </div>
            </div>

            <!-- Providers columns -->
            <div class="calendar__column" v-for="n in 8">

                <!-- Current hour line -->
                <div
                    class="calendar__hour-line"
                    :style="{ 'top': decimalTime * 70 + 'px' }">
                </div>

                <div
                    v-if="n == 1"
                    class="calendar__hour-dot"
                    :style="{ 'top': (decimalTime * 70) - 4 + 'px' }">
                </div>

                <!-- Calendar events -->
                <div v-if="n < 2" class="calendar__event">
                    <div class="calendar__event-title">
                        Hot stone therapy
                    </div>

                    <div class="calendar__event-time">
                        1:30 - 14:25
                    </div>

                    <div class="calendar__event-description">
                        Some more info here...
                    </div>
                </div>

                <div
                    v-if="n == 2"
                    class="calendar__event"
                    style="top: 875px; height: 122.50px">
                </div>

                <div
                    class="calendar__row"
                    v-for="hour in hours"
                    :key="`col-${hour.id}`">
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    import { ref } from 'vue'
    import useCalendar from '../../../features/useCalendar.js'

    const { generateHours, getDecimalTime } = useCalendar()

    // Calendar hours
    const hours = generateHours()
    const decimalTime = ref(0)

    decimalTime.value = getDecimalTime()

    setInterval(() => {
        decimalTime.value = getDecimalTime()
    }, 10000)

    const events = [
        {
            id: 1,
            title: 'Traditional Belleanse Massage',
            provider: 'Līga Zeltiņa',
            timeFrom: '12:30',
            timeTo: '14:15',
            timeFromDecimal: '12.50',
            timeToDecimal: '14.25',
            durationDecimal: '1.75',
        }
    ]
</script>
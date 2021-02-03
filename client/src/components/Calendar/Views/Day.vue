<template>
    <div class="calendar">

        <!-- Head row -->
        <div
            class="calendar__head-row overflow-hidden syncscroll"
            name="calendarDay">

            <!-- Hours column -->
            <div class="calendar__column calendar__column--hours">
                <div class="calendar__row calendar__row--hour"></div>
            </div>

            <!-- Providers columns -->
            <div class="calendar__column" v-for="n in 3" :key="n">
                <div class="calendar__row calendar__row--provider">
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
        <div
            class="calendar__providers-container syncscroll"
            name="calendarDay">

            <!-- Hours column -->
            <div class="calendar__column calendar__column--hours">
                <div
                    class="calendar__row calendar__row--hour"
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
            <div class="calendar__column" v-for="n in 3">

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
                    class="calendar__row calendar__row--provider"
                    v-for="hour in hours"
                    :key="`col-${hour.id}`">
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    import { ref, onMounted, onUnmounted } from 'vue'
    import useCalendar from '/@/features/useCalendar.js'

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

    onMounted(() => {
        // Drag - scroll behavior
        var x, y, top, left, down
        var stuff = document.querySelector('.calendar__providers-container')

        stuff.addEventListener('mousedown', function(e) {
            e.preventDefault()
            down = true
            x = e.pageX
            y = e.pageY
            top = stuff.scrollTop
            left = stuff.scrollLeft
        })

        document.body.addEventListener('mousemove', function(e) {
            if(down) {
                var newX = e.pageX
                var newY = e.pageY

                stuff.scrollTop = top - newY + y
                stuff.scrollLeft = left - newX + x
            }
        })

        document.body.addEventListener('mouseup', function(e) {
            down = false
        })

        /**
         * We need to import the sync scroll lib after the component
         * has been mounted to detect sync elements.
         */
        if (!document.getElementById("syncscroll-js")) {
            let scriptElm = document.createElement('script')
            scriptElm.src = '/js/lib/syncscroll.js'
            scriptElm.id = 'syncscroll-js'
            document.body.appendChild(scriptElm)
        }
    })

    onUnmounted(() => {
        if (document.getElementById("syncscroll-js")) {
            document.getElementById("syncscroll-js").remove()
        }
    })
</script>
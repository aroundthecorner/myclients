<template>
    <teleport to="head">
        <title>myclients - Calendar</title>
    </teleport>

    <div class="page">
        <calendar-toolbar />
        <calendar-day-view />
    </div>
</template>

<script setup>
    import CalendarDayView from '../components/Calendar/Views/DayView.vue'
    import CalendarToolbar from '../components/Calendar/CalendarToolbar.vue'
</script>
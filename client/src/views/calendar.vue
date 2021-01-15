<template>
    <teleport to="head">
        <title>myclients - Calendar</title>
    </teleport>

    <div class="page">
        <toolbar-calendar />
        <calendar-view-day />
    </div>
</template>

<script setup>
    import CalendarViewDay from '../components/Calendar/Views/Day.vue'
    import ToolbarCalendar from '../components/Calendar/Toolbar.vue'
</script>
<template>
    <teleport to="head">
        <title>{{ lang('Calendar') }} - myclients</title>
    </teleport>

    <div class="page">
        <toolbar-calendar />
        <calendar-view-day />
    </div>
</template>

<script setup>
    import useLanguage from '/@/features/useLanguage.js'
    import ToolbarCalendar from '/@/components/Calendar/Toolbar.vue'
    import CalendarViewDay from '/@/components/Calendar/Views/Day.vue'

    const { lang } = useLanguage()
</script>
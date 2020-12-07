<template>
    <teleport to="head">
        <title>myclients - Online Apointment Scheduling App</title>
    </teleport>

    <div class="sidebar">
        <div class="sidebar__profile">
            <img
                class="sidebar__profile-pic"
                src="/img/profile.png"
            />

            <div class="sidebar__fullname">
                Martins Zeltins
            </div>
        </div>

        <div class="sidebar__item">
            <i class="sidebar__icon lab la-buffer"></i>
            <span class="sidebar__item-text">Dashboard</span>
        </div>

        <div class="sidebar__item">
            <i class="sidebar__icon las la-calendar"></i>
            <span class="sidebar__item-text">Calendar</span>
        </div>

        <div class="sidebar__item">
            <i class="sidebar__icon las la-calendar-check"></i>
            <span class="sidebar__item-text">Appointments</span>
        </div>

        <div class="sidebar__item">
            <i class="sidebar__icon lab la-elementor"></i>
            <span class="sidebar__item-text">Services</span>
        </div>

        <div class="sidebar__item">
            <i class="sidebar__icon las la-map-marker"></i>
            <span class="sidebar__item-text">Locations</span>
        </div>

        <div class="sidebar__item">
            <i class="sidebar__icon las la-user-friends"></i>
            <span class="sidebar__item-text">Service providers</span>
        </div>

        <div class="spacer"></div>

        <div class="sidebar__item">
            <i class="sidebar__icon las la-cog"></i>
            <span class="sidebar__item-text">Settings</span>
        </div>
    </div>
</template>
<template>
    <teleport to="head">
        <title>myclients - online appointment scheduling app</title>
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
            <i class="sidebar__icon lab la-buffer"></i>
            <span class="sidebar__item-text">Calendar</span>
        </div>

        <div class="sidebar__item">
            <i class="sidebar__icon lab la-buffer"></i>
            <span class="sidebar__item-text">Appointments</span>
        </div>

        <div class="sidebar__item">
            <i class="sidebar__icon lab la-buffer"></i>
            <span class="sidebar__item-text">Services</span>
        </div>

        <div class="sidebar__item">
            <i class="sidebar__icon lab la-buffer"></i>
            <span class="sidebar__item-text">Locations</span>
        </div>

        <div class="sidebar__item">
            <i class="sidebar__icon lab la-buffer"></i>
            <span class="sidebar__item-text">Service providers</span>
        </div>
    </div>
</template>
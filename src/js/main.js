'use strict';

// jquery + slick-carousel
import slider from './modules/slider';
import tabs from './modules/tabs';
import timer from './modules/timer';

document.addEventListener('DOMContentLoaded', () => {
    slider();

    tabs(
        '.glazing_slider',
        '.glazing_block',
        '.glazing_content',
        'active'
    );

    tabs(
        '.decoration_slider',
        '[data-menu-tab="order"]',
        '[data-content-tab="order"]',
        'after_click'
    );

    timer(
        '2024-06-01',
        '#timer',
        '#days',
        '#hours',
        '#minutes',
        '#seconds'
    );
});
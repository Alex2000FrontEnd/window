'use strict';

import slider from './modules/slider'; // jquery + slick-carousel
import tabs from './modules/tabs';
import timer from './modules/timer';
import modal from './modules/modal';
import gallery from './modules/gallery';
import forms from './modules/forms';

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

    modal(
        '.popup_engineer_btn',
        '.popup_engineer'
    );

    modal(
        '.phone_link',
        '.popup'
    );

    gallery(
        '.works',
        '.preview',
        'assets/img/our_works/big_img/'
    );

    forms();
});
define([
    'jquery',
    'owlCarousel'
], function($) {
    'use strict';
    return function(config, element) {
        $('.portofoon_brand_slider').owlCarousel({
            items: 5,
            loop: true,
            buttons: false,
            nav: false,
            dots: false,
        });
    };
});

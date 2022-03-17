/**
 *  Script for the Bifrost Input increment component
 **/
import $ from 'jquery';

$(function() {
    let container = $('.js-bf-chip');

    container.each(function (i, el) {
        const $this = $(el),
            $closeButton = $this.find('.js-bf-chip--close');

        $closeButton.click(function(){
            $this.remove();
        })
    })
});
/**
 *  Script for the Bifrost Callout component
 **/
import $ from 'jquery';

$(function() {
    const container = $('.js-bf-callout');

    container.each(function (i, el) {
        const $this = $(el),
            $closeButton = $this.find('.js-bf-callout--close');

        $closeButton.click(function(){
            $this.remove();
        })
    })
});
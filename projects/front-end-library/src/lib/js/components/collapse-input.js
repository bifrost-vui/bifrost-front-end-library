import $ from 'jquery';

$(function () {
    $('.js-collapse-toggle-btn').on('click', function (e) {
        e.preventDefault();
        $(this).parents('.js-collapse-input').toggleClass('active-toggle');
    });
});

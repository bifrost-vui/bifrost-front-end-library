import $ from 'jquery';

/* Dom Ready */
$(function () {
    var $body = $('body');

    $body.on('click', '.js-bf-tab a', function (e) {
        e.preventDefault();
        $(this).closest('.js-bf-tab').find('a').not($(this)).removeClass('active');
    });
});

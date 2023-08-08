import $ from 'jquery';
import 'bootstrap';

/* Dom Ready */
$(function () {
    var $body = $('body');

    $body.on('click', '.js-bf-tab a', function (e) {
        e.preventDefault();
        $(this).tab('show');
        $(this).closest('.js-bf-tab').find('a').not($(this)).removeClass('active');
    });
});

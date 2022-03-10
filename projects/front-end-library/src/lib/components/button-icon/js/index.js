import $ from 'jquery';

$(function() {
    const container = $('.js-bf-button-icon-link');

    container.each(function(i, el) {
        const $this = $(el);

        if ($this.parent().hasClass('disabled')) {
            disableLink($this);
        } else {
            enableLink($this)
        }
    })

    function disableLink(link) {
        link.addClass('disabled');
        link.attr('data-href', link.href);
        link.href = '';
        link.attr('role', 'link');
        link.attr('aria-disabled', 'true');
    }
    function enableLink(link) {
        link.removeClass('disabled');
        link.href = link.attr('data-href');
        link.removeAttr('role');
        link.removeAttr('aria-disabled');
    }
})

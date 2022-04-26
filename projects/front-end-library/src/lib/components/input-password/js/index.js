import $ from 'jquery';

/**
 * Input type password Behavior
 **/
$(function () {
    const container = $('.js-bf-input-password');

    container.each(function (i, el) {
        const $this = $(el),
            $inputPassword = $this.find('.bf-input__control'),
            $btnToggleShowHide = $this.find('.js-bf-input-password__visibility-button');

        let isStateShowPassword = false;

        $btnToggleShowHide.on('click', (e) => {
            e.preventDefault();
            isStateShowPassword = !isStateShowPassword;

            isStateShowPassword
                ? $inputPassword.attr('type', 'text')
                : $inputPassword.attr('type', 'password');

            isStateShowPassword
                ? $this.addClass('bf-input-password--show-password')
                : $this.removeClass('bf-input-password--show-password');
        });
    });
});
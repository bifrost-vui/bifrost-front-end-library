import $ from 'jquery';

$(function () {
    const container = $('.js-form-password');

    container.each(function (i, el) {
        const $this = $(el),
            $inputPassword = $this.find('.js-form-password__input'),
            $btnToggleShowHide = $this.find('.js-form-password__btn');

        let isStateShowPassword = false;

        $btnToggleShowHide.on('click', (e) => {
            e.preventDefault();
            isStateShowPassword = !isStateShowPassword;

            isStateShowPassword ? $inputPassword.attr('type', 'text') : $inputPassword.attr('type', 'password');

            $(this).toggleClass('state-show-password');
        });
    });
});

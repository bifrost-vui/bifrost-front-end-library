import $ from 'jquery';

const keyTab = 9;

$(function () {
    function handleFirstTab(e) {
        if (e.keyCode === keyTab) {
            // the "I am a keyboard user" key
            document.body.classList.add('user-is-tabbing');
            window.removeEventListener('keydown', handleFirstTab);
        }
    }

    window.addEventListener('keydown', handleFirstTab);
});

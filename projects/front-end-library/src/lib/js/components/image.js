import $ from 'jquery';

$(window).on('load', function () {
    const allImages = document.getElementsByTagName('img');

    for (let i = 0; i < allImages.length; i++) {
        if (allImages[i].getAttribute('data-src')) {
            let img = new Image();
            img.src = allImages[i].getAttribute('data-src');
            img.onload = function () {
                allImages[i].setAttribute('src', allImages[i].getAttribute('data-src'));
                allImages[i].classList.add('loaded');
            };
        }
    }
});

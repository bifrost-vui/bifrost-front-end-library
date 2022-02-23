const allImages = document.getElementsByTagName('img');

for (let i = 0; i < allImages.length; i++) {
    if (allImages[i].getAttribute('data-src')) {
        let img = new Image();
        img.src = allImages[i].getAttribute('data-src');
        img.onload = function () {
            allImages[i].setAttribute('src', allImages[i].getAttribute('data-src'));
            allImages[i].classList.add('loaded');
        }
    }
}

/**
 * REMOVE COMMENT UPON REVIEW
 * in the image.js file  : This script is called on the Load event but is not responding (for only one onload function is aloud)
 * 2 solutions :
 * the script is called only when the `Image Lazy Load` is used (present solution). meaning the Image.js script should be deleted to avoid code duplication
 * the present script would be added to the onload.js. also meaning the image.js script should be deleted
 * */
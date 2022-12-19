import $ from 'jquery';
import { isInViewport } from '../utils/window';

export const animation = {
    triggerAnimInViewport() {
        const animateObjs = $('[data-animate]');

        animateObjs.each(function (i, e) {
            let elem = e;
            let animationClassStyle = e.dataset.animate || 'fadeslide-in';
            if (!elem.classList.contains('data-animate--done')) {
                if (isInViewport(elem)) {
                    if (!elem.classList.contains(animationClassStyle)) {
                        elem.classList.add(animationClassStyle);

                        elem.addEventListener('webkitAnimationEnd', () => {
                            elem.classList.add('data-animate--done');
                        });
                    }
                }
            }
        });
    },
};
window.uikit.animation = animation;

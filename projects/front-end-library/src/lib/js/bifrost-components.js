/**
 * Update 2023-11-27:
 * This file is now imported via a "require" function inside "./index.js".
 *
 * When this file was independent and loaded from "projects/front-end-library/src/lib/main.twig",
 * it was not possible to use Bootstrap module fully.
 *
 * For example, in "projects/front-end-library/src/lib/sections/plp/js/index.js",
 * when using the event "shown.bs.collapse", on a "$(...).on('shown.bs.collapse', ...)"
 * nothing happened, it was like Bootstrap was not available.
 *
 * So, the solution was to import this present file inside "./index.js".
 */

// Bifröst  Theme
window.bfTheme = window.bfTheme || {};

window.bfTheme.breakpoints = {
    sm: 576,
    md: 768,
    lg: 1200,
    xl: 1920,
};
// Bifröst Components
require('../components/filter/js/index.js');
require('../components/input-increment/js/index.js');
require('../components/input-slider/js/index.js');
require('../components/navigation-header/js/index.js');
require('../components/slideshow/js/index.js');
require('../components/tab/js/index.js');

// Bifröst Sections
require('../sections/plp/js/index.js');

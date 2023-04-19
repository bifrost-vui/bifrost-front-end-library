// Bifröst  Theme
window.bfTheme = window.bfTheme || {};

window.bfTheme.breakpoints = {
    sm: 576,
    md: 768,
    lg: 1200,
    xl: 1440,
    xxl: 1920,
};
// Bifröst  Components
require('../components/input-increment/js/index.js');
require('../components/input-slider/js/index.js');
require('../components/navigation-header/js/index.js');
require('../components/navigation-header-business/js/index.js');
require('../components/slideshow/js/index.js');
require('../components/tab/js/index.js');

// TODO (MAIN-NAV): To delete when new Navigation Header is completed
require('../components/__old-navigation-header/js/index.js');

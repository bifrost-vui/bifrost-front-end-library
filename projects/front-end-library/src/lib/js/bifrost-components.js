import $ from 'jquery';
import { initBreakpoints } from './utils/breakpoints.js';

// Bifrost Theme
window.bfTheme  = window.bfTheme || {};

window.bfTheme.breakpoints = {
    sm: 576,
    md: 768,
    lg: 1200,
    xl: 1920
};

// Bifrost Components
require("../components/quantity-button/js/index.js");
require("../components/navigation-header/js/index.js");
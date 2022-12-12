import '../scss/index.scss';

// Vendor
import 'jquery';
import 'bootstrap';
import 'slick-carousel';

window.uikit = window.uikit || {};

// Components
require('./components/bootstrap/collapse.js');
require('./components/bootstrap/accordion.js');
require('./components/bootstrap/modal.js');
require('./components/bootstrap/tab.js');

require('./components/bootstrap/sticky-top-detection.js');

// require("./components/custom-select-html.js");
require('./components/collapse-input.js');
require('./components/backdrop-on-collapse.js');
require('./components/vui-tooltips.js');
require('./components/keyboard-events.js');
require('./components/scroll-spy.js');
require('./components/input-increment.js');
require('./components/input-password.js');
require('./components/slick-carousel.js');
require('./components/image.js');
require('./components/sidebar-filter.js');
require('./components/image-background.js');
require('./components/sticky-bottom.js');
require('./components/jauge.js');
require('./components/calendar.js');
require('./components/global-search.js');
require('./components/fullpage.js');

require('./components/navigation-helix.js');
require('./components/navigation-videotron-unify.js');

require('./components/animation.js');

require('./components/widgets-override/livechat-genesys.js');

// DEMO
// require("./demo/etiya/index.js");

require('./onload.js');

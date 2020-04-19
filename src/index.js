import "./css/main.css";

window.lazySizesConfig = window.lazySizesConfig || {};
window.lazySizesConfig.rias = window.lazySizesConfig.rias || {};
// configure available widths to replace with the {width} placeholder
window.lazySizesConfig.rias.widths = [320, 480, 640, 960];
document.addEventListener("lazyriasmodifyoptions", event => {
  // event.detail referes the placeholders/options and event.target the corresponding element
  event.detail.quality = (window.devicePixelRatio || 1) > 1.9 ? 50 : 80;
});

// eslint-disable-next-line import/first
import "lazysizes/plugins/rias/ls.rias";
// eslint-disable-next-line import/first
import "lazysizes";

require("./js/blocks/slider.js");
require("./js/blocks/masonry");
require("./js/blocks/menu.js");
require("./js/blocks/portfolio.js");
// import "./css/slider.css";

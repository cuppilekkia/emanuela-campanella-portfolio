import Isotope from "isotope-layout";

const imagesLoaded = require("imagesloaded");

function initPortfolioIso(grid) {
  window.portfolioIso = new Isotope(grid, {
    itemSelector: ".grid-item",
    masonry: {
      columnWidth: ".grid-sizer",
      gutter: ".grid-gutter"
    },
    percentPosition: true
  });
}
const portfolioGrid = document.querySelector(".js-masonry");

imagesLoaded("#container", function() {
  if (portfolioGrid) {
    initPortfolioIso(portfolioGrid);
  }
});

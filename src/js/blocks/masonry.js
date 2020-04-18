import Isotope from "isotope-layout";

const imagesLoaded = require("imagesloaded");

function initPortfolioIso(grid) {
  window.portfolioIso = new Isotope(grid, {
    itemSelector: ".masonry-item",
    masonry: {
      columnWidth: ".masonry-sizer",
      gutter: ".masonry-gutter"
    },
    percentPosition: true
  });
}

function filterHandleClick(slug, filters) {
  if (window.portfolioIso) {
    window.portfolioIso.arrange({
      filter: slug === "all" ? "" : `.${slug}`
    });
    filters.forEach(filter => {
      if (filter.dataset.filter === slug) {
        filter.classList.add("active");
      } else {
        filter.classList.remove("active");
      }
    });
  }
}
const portfolioGrid = document.querySelector(".js-masonry");
const portfolioFilters = document.querySelectorAll(".js-masonry-filter");

imagesLoaded("#container", () => {
  if (portfolioGrid) {
    initPortfolioIso(portfolioGrid);
  }
  if (portfolioFilters && portfolioFilters.length > 0) {
    portfolioFilters.forEach(filter => {
      const slug = filter.dataset.filter;
      filter.addEventListener("click", () =>
        filterHandleClick(slug, portfolioFilters)
      );
    });
  }
});

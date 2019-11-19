import Flickity from "flickity";
import "../sass/blocks/slider.scss";

const sliders = document.querySelectorAll(".js-flickity");
if (sliders && sliders.length >= 1) {
  sliders.forEach((slider) => {
    new Flickity(slider, {
      wrapAround: true,
    });
  });
}

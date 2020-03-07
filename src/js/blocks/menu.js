const menu = document.querySelector(".js-menu");
const toggleBtn = document.querySelector(".js-menu-toggle");
const toggleBtnIcon = document.querySelector(".js-menu-toggle-icon");

if (menu && window.innerWidth <= 768) {
  menu.classList.add("hidden");

  toggleBtn.addEventListener("click", () => {
    menu.classList.toggle("hidden");
    toggleBtnIcon.classList.toggle("lni-menu");
    toggleBtnIcon.classList.toggle("lni-close");
  });
}

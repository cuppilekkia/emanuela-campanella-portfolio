const menu = document.querySelector(".js-menu");
const toggleBtn = document.querySelector(".js-menu-toggle");

if (menu && window.innerWidth <= 768) {
  menu.classList.add("hidden");

  toggleBtn.addEventListener("click", () => {
    menu.classList.toggle("hidden");
  });
}


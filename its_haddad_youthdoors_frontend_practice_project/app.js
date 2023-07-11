const menuButton = document.querySelector(".menu-button");
const navLinks = document.querySelector(".nav-link");

menuButton.addEventListener("click", () => {
  navLinks.classList.toggle("mobile-menu");
});

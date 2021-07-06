const menuBar = document.querySelector(".menuBar");

const menuContainer = document.querySelector(".menuContainer");

const triangle = document.querySelector(".triangle");

menuBar.addEventListener("click", mobileMenu);

function mobileMenu() {
  menuBar.classList.toggle("active");
  menuContainer.classList.toggle("active");
  triangle.classList.toggle("active");
}

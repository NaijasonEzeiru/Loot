let ham = false;

const menuIcon = document.getElementById("menu-icon");
const navBar = document.getElementsByTagName("nav")[0];
// const menuShape = document.getElementById("menu-shape");

let x = !menuIcon.getAttribute("aria-expanded");

const setHam = () => {
  ham = !ham;
};

function menuToggle() {
  x = !x;
  menuIcon.setAttribute("aria-expanded", x);
  setHam();
  if (ham) {
    navBar.classList.remove("-translate-x-full");
  } else {
    navBar.classList.add("-translate-x-full");
  }
}

function menuClick() {
  menuIcon.setAttribute("aria-expanded", false);
  if (ham) {
    navBar.classList.add("-translate-x-full");
  }
}

menuIcon.addEventListener("click", menuToggle);
navBar.addEventListener("click", menuClick);

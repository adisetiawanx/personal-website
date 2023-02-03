const hamburger = document.getElementById("hamburger");
const navbar = document.getElementById("navbar");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("hamburger-active");
  navbar.classList.toggle("hidden");
});

window.onscroll = () => {
  const header = document.querySelector("header");
  if (window.scrollY > header.offsetTop) {
    header.classList.add("nav-fixed");
  } else {
    header.classList.remove("nav-fixed");
  }
};

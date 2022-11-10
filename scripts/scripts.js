// FOR MOBILE MENU
var menuOpen = document.querySelector("#menuOpen");
var menuClose = document.querySelector("#menuClose");

var bodyElement = document.body;

menuOpen.addEventListener("click", () => {
  bodyElement.classList.add("menu-open");
});

menuClose.addEventListener("click", () => {
  bodyElement.classList.remove("menu-open");
});

// FOR SUBMENUS IN MENU
let menuInputs = document.querySelectorAll(".menu input");

menuInputs.forEach((element) => {
  element.addEventListener("click", () => {
    element.classList.toggle("show");
  });
});
// FOR SUBMENUS IN MENU
// FOR MOBILE MENU

document.addEventListener("DOMContentLoaded", function () {
  const scrollBtn = document.querySelector(".scrollup");

  window.addEventListener("scroll", function () {
    let scroll = window.scrollY;
    let el_header = document.querySelector("header")
    if (scroll > 100) {
      scrollBtn.classList.add("is-visible");
    } else {
      scrollBtn.classList.remove("is-visible");
    }

    if (scroll > 50) {
      el_header.classList.add("headerFixed");
    } else {
      el_header.classList.remove("headerFixed");
    }
  });

  scrollBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
});

// SWIPER CAROUSELS
var swiper1 = new Swiper(".servicesSwiper", {
  slidesPerView: 1,
  spaceBetween: 20,
  speed: 600,
  loop: true,
  navigation: {
      nextEl: ".servicesSwiper .swiper-button-next",
      prevEl: ".servicesSwiper .swiper-button-prev",
  },
});

var swiper2 = new Swiper(".hotelsSwiper .swiper", {
  slidesPerView: 1,
  spaceBetween: 20,
  speed: 600,
  loop: true,
  navigation: {
      nextEl: ".hotelsSwiper .swiper-button-next",
      prevEl: ".hotelsSwiper .swiper-button-prev",
  },
});
// SWIPER CAROUSELS

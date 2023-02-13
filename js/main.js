// Відкрити, закрити меню

const burger = document.querySelector(".burger-wrapper");
const nav = document.querySelector(".nav");

if (burger) {
  burger.addEventListener("click", function (e) {
    burger.classList.toggle("active");
    nav.classList.toggle("active");
  });
}

const searchIcon = document.querySelector(".icon-search-nav");
const search = document.querySelector(".nav-search");

if (search) {
  searchIcon.addEventListener("click", function (o) {
    search.classList.toggle("active");
  });
}

// swiper

new Swiper(".slider-swiper", {
  navigation: {
    nextEl: ".slider-arrow-next",
    prevEl: ".slider-arrow-prev",
  },
  observer: true,
  observeParents: true,
  slidesPerView: 1,
  spaceBetween: 32,
  watchOverflow: true,
  loop: true,
  speed: 800,
  loopAdditionalSlides: 5,
  preloadImages: false,
  parallax: true,
});

//

new Swiper(".room-swiper", {
  navigation: {
    nextEl: ".room-arrow",
  },
  pagination: {
    el: ".slider-dotts",
    clickable: true,
  },
  observer: true,
  observeParents: true,
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    425: {
      slidesPerView: 1.5,
    },
    768: {
      slidesPerView: 2,
    },
  },
  spaceBetween: 32,
  watchOverflow: true,
  speed: 500,
  loopAdditionalSlides: 5,
  preloadImages: false,
  parallax: true,
  simulateTouch: true,
});

//

// "Ховери" колонок в продуктах

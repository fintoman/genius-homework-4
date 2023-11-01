const swiper = new Swiper('.swiper-containar', {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 20,
  breakpoints: {
    480: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
  },
  pagination: {
    el: '.swiper-pagination',
  },

  navigation: {
    nextEl: '.arr-button.next',
    prevEl: '.arr-button.prev',
  },
});

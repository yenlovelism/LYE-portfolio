AOS.init({
  duration: 500,
});

// 로고
var logoSwiper = new Swiper('.js-logoSwiper', {
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  scrollbar: {
    el: '.swiper-scrollbar',
    hide: false,
    draggable: true,
  },
});

// 연혁
var historySwiper = new Swiper('.js-historySwiper', {
  slidesPerView: 1,
  freeMode: true,

  grid: {
    rows: 2,
  },
  breakpoints: {
    430: {
      slidesPerView: 1,
    },
    720: {
      slidesPerView: 1.5,
    },
    1000: {
      slidesPerView: 2.5,
    },
    1400: {
      slidesPerView: 3,
    },
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

// 특허 및 인증서
var ceftificateSwiper = new Swiper('.js-certificateSwiper', {
  effect: 'coverflow',
  loop: 'true',
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  grabCursor: true,
  centeredSlides: true,
  spaceBetween: 30,
  slidesPerView: 'auto',
  slidesPerGroup: 1,
  coverflowEffect: {
    rotate: 20,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: false,
  },
  breakpoints: {
    100: {
      slidesPerView: 2,
    },
    720: {
      slidesPerView: 3,
    },
    1000: {
      slidesPerView: 4,
    },
  },
});

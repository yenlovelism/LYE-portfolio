$(function(){
var windowWidth = window.innerWidth;
var figure = document.querySelector(".figure");
var figurePath = document.querySelector(".figure path");


var thumbSwiper = new Swiper('.js-thumbSwiper', {
  speed: 1200,
  effect: 'creative',
  oneWayMovement: true, 
  centeredSlides: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  slidesPerView: 1,
  parallax: true,
  touchRatio: 0.4,
  loop: true,
  maxBackfaceHiddenSlides: 4,
  pagination: {
    el: '.banner .swiper-pagination',
    clickable: true,
    renderBullet: function(index, className) {
      return '<span class="' + className + '"></span>';
    },
  },
});

var productListSwiper = new Swiper('.js-productListSwiper', {
  centeredSlides: true,
  slidesPerView: 1,
  touchRatio: 0.4,
  loop: true,
  speed: 1200,
  oneWayMovement: true, 
  maxBackfaceHiddenSlides: 4,
});


thumbSwiper.controller.control = productListSwiper;
productListSwiper.controller.control = thumbSwiper;

const swiperSlideEvent = (Swiper) => {
  if (Swiper.realIndex === 0) {
    figurePath.style.fill = 'url("#linearcolor0")';

  } else if (Swiper.realIndex === 1) {
    figurePath.style.fill = 'url("#linearcolor1")';

  } else if (Swiper.realIndex === 2) {
    figurePath.style.fill = 'url("#linearcolor2")';

  } else if (Swiper.realIndex === 3) {
    figurePath.style.fill = 'url("#linearcolor3")';
  }
};


const MobileChange = () => {
  var windowWidth = window.innerWidth;
  const rotateFigureNext = () => {
    $(".figure").animate({
      rotate: "+=90deg"
    }, 10);
  };
  const rotateFigurePrev = () => {
    $(".figure").animate({
      rotate: "+=90deg"
    }, 10);
  }

  if (windowWidth > 720) {
    thumbSwiper.on('slideChange', swiperSlideEvent);
    figurePath.setAttribute("d", "M219.157 66.7973C268.232 6.19489 350.748 -15.9153 423.549 12.0305L688.906 113.891C761.707 141.837 808.234 213.483 804.153 291.356L789.277 575.203C785.196 653.077 731.435 719.466 656.112 739.649L381.561 813.214C306.237 833.397 226.484 802.783 184.013 737.383L29.2069 499.003C-13.2645 433.603 -8.79354 348.292 40.2813 287.69L219.157 66.7973Z")
    thumbSwiper.on('slideNextTransitionStart', rotateFigureNext);
    thumbSwiper.on('slidePrevTransitionStart', rotateFigurePrev);

    thumbSwiper.params.creativeEffect.prev = {
      translate: [-300, 200, -300],
      rotate: [-10, -10, 0],
      scale: "0.8",
      opacity: 0,
    };
    thumbSwiper.params.creativeEffect.next = {
      translate: [-50, -400, -300],
      rotate: [10, 10, 0],
      scale: "1",
      opacity: 0,
    };

  } else if (windowWidth <= 720) {
    thumbSwiper.off('slideNextTransitionStart', rotateFigureNext);
    thumbSwiper.off('slidePrevTransitionStart', rotateFigurePrev);
    thumbSwiper.on('slideChange', swiperSlideEvent);
    figurePath.setAttribute("d", "M83.719 140.244C186.124 13.7838 358.312 -32.3539 510.228 25.961V25.961C662.143 84.2758 759.232 233.779 750.715 396.28V396.28C742.199 558.78 630.015 697.316 472.836 739.432V739.432C315.657 781.548 149.235 717.664 60.6098 581.193V581.193C-28.0157 444.721 -18.6862 266.704 83.719 140.244V140.244Z")
    figure.style.rotate = '0deg'

    thumbSwiper.params.creativeEffect.prev = {
      translate: [-400, -100, -100],
      rotate: [10, 10, 0],
      scale: "1",
      opacity: 0,

    };
    thumbSwiper.params.creativeEffect.next = {
      translate: [400, -100, -100],
      rotate: [10, 10, 0],
      scale: "1",
      opacity: 0,

    };
  }
};
MobileChange();


window.addEventListener("resize", function() {
  var windowWidth = window.innerWidth;
  MobileChange();
});


/*스와이퍼가 PC 버전에는 없다가 반응형일때 추가 됨*/
var responsiveAddproductSwiper = () => {
  let windowW = $(window).width();
  let productSwiper = undefined;

  function initSwiper() {
    if (windowW <= 720 && productSwiper == undefined) {
      productSwiper = new Swiper('.js-productSwiper', {
        loop: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        effect: 'coverflow',
        touchRatio: 0,
        coverflowEffect: {
          rotate: 0,
          slideShadows: false,
          stretch: 70,
        },
        allowTouchMove: true,
        autoplay: {
          delay: 1000,
          disableOnInteraction: false,
        },
        navigation: {
          nextEl: '.js-productSwiper .swiper-button-next',
          prevEl: '.js-productSwiper .swiper-button-prev',
        },
      });
    } else if (windowW > 720 && productSwiper != undefined) {
      $('.js-productSwiper').each(function(i) {
        this.swiper.destroy(false);
      });
      productSwiper = undefined;
    }
  }
  initSwiper();

  $(window).on('resize', function() {
    windowW = $(window).width();
    initSwiper();
  });
};

responsiveAddproductSwiper();

});
/* video mute btn 설정 */
const videoMuteBtn = (e) => {
  if ($('.video-wrap').prop('muted')) {
    $('.video-wrap').prop('muted', false);
    $(e.currentTarget).addClass('sound');
  } else {
    $('.video-wrap').prop('muted', true);
    $(e.currentTarget).removeClass('sound');
  }
};
$('.mute').on('click', videoMuteBtn);

/* bubble section top에서 180만큼 스크롤했을 때 emoji가 흩어지는 animation 적용 */
const emojiPop = (e) => {
  if ($('#bubble').offset().top + 180 < $(this).scrollTop()) {
    $('.bubble')
      .find('.emoji-wrap .text-area .emoji-zone img:nth-child(1)')
      .addClass('left-top opacity');
    $('.bubble')
      .find('.emoji-wrap .text-area .emoji-zone img:nth-child(2)')
      .addClass('right-top opacity');
    $('.bubble')
      .find('.emoji-wrap .text-area .emoji-zone img:nth-child(3)')
      .addClass('right-bottom opacity');
  }
};
$(window).on('scroll', emojiPop);

/* resize 되면 이미지가 바뀌도록 */
const resizeEvent = () => {
  var width_size = window.innerWidth;
  if (width_size <= 600) {
    $('.change-img').each((index, element) => {
      const elementJquery = $(element);
      elementJquery.attr('src', elementJquery.data('mobile-img'));
    });
  } else if (width_size > 600) {
    $('.change-img').each((index, element) => {
      const elementJquery = $(element);
      elementJquery.attr('src', elementJquery.data('pc-img'));
    });
  }
};

resizeEvent();
$(window).on('resize', resizeEvent);

/* resize 되면 비디오가 바뀌도록 */
const videoResize = () => {
  var width_size = window.innerWidth;
  if (width_size > 900) {
    $('.video-wrap.change-video').attr(
      'src',
      './video/main_pc.mp4'
    );
  } else if (width_size <= 600) {
    $('.video-wrap.change-video').attr(
      'src',
      './video/main_m.mp4'
    );
  } else if (width_size <= 900) {
    $('.video-wrap.change-video').attr(
      'src',
      './video/main_t.mp4'
    );
  }
};

videoResize();
$(window).on('resize', videoResize);

/* news section swiper */
var swiper = new Swiper('.news .mySwiper', {
  scrollbar: {
    el: '.swiper-scrollbar',
    hide: true,
    dragSize: 39,
  },
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
});

/* youtube section swiper */
var swiper = new Swiper('.youtube .wrap .swiper-area .swiper', {
  effect: 'flip',
  flipEffect: {
    slideShadows: false,
  },
  speed: 1000,
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
});

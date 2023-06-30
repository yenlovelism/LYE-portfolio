/*스와이퍼가 PC 버전에는 없다가 반응형일때 추가 됨*/
var responsiveAddPeopleSwiper = () => {
  let windowW = $(window).width();
  let peopleSwiper = undefined;

  function initSwiper() {
    if (windowW <= 1000 && peopleSwiper == undefined) {
      peopleSwiper = new Swiper('.js-peopleSwiper', {
        autoplay: {
          delay: 4000,
          disableOnInteraction: false,
        },
        scrollbar: {
          el: '.swiper-scrollbar',
          hide: false,
          draggable: true,
        },
      });
    } else if (windowW > 1000 && peopleSwiper != undefined) {
      peopleSwiper.destroy();
      peopleSwiper = undefined;
    }
  }
  initSwiper();

  $(window).on('resize', function () {
    windowW = $(window).width();
    initSwiper();
  });
};

responsiveAddPeopleSwiper();

/*특장점 스와이퍼*/
var meritsSwiper = new Swiper('.js-meritsSwiper', {
  loop: true,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  scrollbar: {
    el: '.swiper-scrollbar',
    hide: false,
    draggable: true,
  },
});

/*튜토리얼 탭메뉴*/
let windowW = $(window).width();
$(window).on('resize', function () {
  let windowW = $(window).width();
  if (windowW <= 1000) {
    $('#data-mobile-use').addClass('current');
  } else {
    $('#data-mobile-use').removeClass('current');
  }
});
if (windowW <= 1000) {
  $('#data-mobile-use').addClass('current');
} else {
  $('#data-mobile-use').removeClass('current');
}

const tutorial_tab_menu = function () {
  var tab_id = $(this).attr('data-tab');

  $('.tutorial-menu ul li').removeClass('current');
  $('.tab-content').removeClass('current');

  $(this).addClass('current');
  $('#' + tab_id).addClass('current');
};
$('.tutorial-menu ul li').on('click', tutorial_tab_menu);

//공간 이동하기
var Spotswiper = new Swiper('.js-spotSwiper', {
  pagination: {
    el: '.swiper-pagination.spot',
    type: 'fraction',
  },
  navigation: {
    nextEl: '.swiper-button-next.spot',
    prevEl: '.swiper-button-prev.spot',
  },
});

//제품 보기
var Pd_look_swiper = new Swiper('.js-pdLookSwiper', {
  pagination: {
    el: '.swiper-pagination.product-look',
    type: 'fraction',
  },
  navigation: {
    nextEl: '.swiper-button-next.product-look',
    prevEl: '.swiper-button-prev.product-look',
  },
});

//제품 교체하기
var Pd_change_swiper = new Swiper('.js-pdChangeSwiper', {
  pagination: {
    el: '.swiper-pagination.product-change',
    type: 'fraction',
  },
  navigation: {
    nextEl: '.swiper-button-next.product-change',
    prevEl: '.swiper-button-prev.product-change',
  },
});

//모바일 사용하기
var Mobile_swiper = new Swiper('.js-mobileSwiper', {
  pagination: {
    el: '.swiper-pagination.mobile',
    type: 'fraction',
  },
  navigation: {
    nextEl: '.swiper-button-next.mobile',
    prevEl: '.swiper-button-prev.mobile',
  },
});

//다른장소 이동하기
var Place_swiper = new Swiper('.js-placeSwiper', {
  pagination: {
    el: '.swiper-pagination.place',
    type: 'fraction',
  },
  navigation: {
    nextEl: '.swiper-button-next.place',
    prevEl: '.swiper-button-prev.place',
  },
});

//이메일 데이터 주고받기
document.getElementById('contact_form').onsubmit = function (e) {
  e.preventDefault();
  var name_data = this.customer_name.value;
  var number_data = this.customer_number.value;
  var inquiry_data = this.inquiry.value;
  var agree_data = $('#privacy-agree-chk').checked
    ? $('#privacy-agree-chk').value
    : null;

  if ($('#privacy-agree-chk').is(':checked') == false) {
    alert('이메일을 다시 입력해주세요.');
    return;
  }

  $.ajax({
    type: 'POST',
    url: './rental-mail.html',
    dataType: 'text',
    data: {
      name: name_data,
      number: number_data,
      inquiry: inquiry_data,
      agree: agree_data,
    },
    success: function (data) {
      alert(data);
    },
    error: function (request, status, error) {
      // console.log(`
      // 	code: ${request.status}
      // 	message: ${request.responseText}
      // 	error: ${error}
      // `);
      alert('서버 오류가 발생했습니다. 빠르게 조취하도록 하겠습니다.');
    },
  });
};

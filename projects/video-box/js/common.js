//aos
AOS.init({
  offset: 250,
  duration: 400,
});

/*logo swiper PC 버전에는 있다가 반응형일 때 삭제됨*/
var responsiveRemoveLogoSwiper = () => {
  let windowW = $(window).width();
  let logoSwiper = true;

  function initSwiper() {
    if (windowW > 640 && logoSwiper == true) {
      logoSwiper = new Swiper('.js-logoSwiper', {
        loop: 'true',
        loopedSlides: 2,
        speed: 2000,
        autoplay: {
          delay: 0,
          disableOnInteraction: false,
        },
        spaceBetween: 30,
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        slidesPerGroup: 1,
        preloadImages: true,
        breakpoints: {
          641: {
            slidesPerView: 3,
          },
          1021: {
            slidesPerView: 4,
          },
          1361: {
            slidesPerView: 5,
          },
        },
      });
    } else if (windowW <= 640 && logoSwiper != true) {
      logoSwiper.destroy();
      logoSwiper = true;
    }
  }
  initSwiper();

  $(window).on('resize', function () {
    windowW = $(window).width();
    initSwiper();
  });
};

responsiveRemoveLogoSwiper();

//email domain 입력
$('.js-emailSelect').on('change', function () {
  $('.js-emailSelect option:selected').each(function () {
    if ($(this).val() == '1') {
      $('.js-emailDomain').val('');
      $('.js-emailDomain').attr('disabled', false);
    } else {
      $('.js-emailDomain').val($(this).text());
      $('.js-emailDomain').attr('disabled', true);
    }
  });
});

//email점검
function validEmailCheck(obj) {
  const emailRegex = new RegExp(
    '^([0-9a-zA-Z]?[-_.]?[0-9a-zA-Z]+)+\\.[a-zA-Z]{2,3}$',
    'i'
  );
  return emailRegex.test(obj.value);
}

//form 전송
document.querySelector('.js-contactForm').onsubmit = function (e) {
  e.preventDefault();
  var customerName = document.querySelector(
    "input[name='Customer-name']"
  ).value;
  var customerPhone = document.querySelector(
    "input[name='Customer-phone']"
  ).value;
  var customerJob = document.querySelector("input[name='Customer-job']").value;
  var customerEmail =
    document.querySelector("input[name='Email-id']").value +
    '@' +
    document.querySelector("input[name='Email-domain']").value;
  var privacyAgree = document.querySelector("input[name='Privacy-agree']")
    .checked
    ? document.querySelector("input[name='Privacy-agree']").value
    : null;

  if (
    document.querySelector("input[name='Email-domain']").value.length !== 0 &&
    !validEmailCheck(document.querySelector("input[name='Email-domain']"))
  ) {
    alert('이메일을 다시 입력해주세요.');
    return;
  }

  $.ajax({
    type: 'POST',
    url: './videobox-mail.html',
    dataType: 'text',
    data: {
      customerName: customerName,
      customerPhone: customerPhone,
      customerJob: customerJob,
      customerEmail: customerEmail,
      privacyAgree: privacyAgree,
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

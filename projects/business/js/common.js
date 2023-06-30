/* header 메뉴에 마우스를 over했을 때 하위 메뉴가 보이도록 설정 */
const gnbMouseover = (e) => {
  var width_size = window.outerWidth;

  if (width_size >= 900) {
    $('.open-nav-cover').css('top', '0px');
    $('.header .header-wrap .gnb ul li .lnb').css({
      display: 'block',
      transitiondelay: '0.4s',
    });
    $('.header .header-wrap .gnb ul li .lnb').addClass(
      'animate__animated animate__fadeIn'
    );
  }
};
$('.header .gnb').on('mouseover', gnbMouseover);

/* header 메뉴에서 마우스가 leave 됐을 때 하위 메뉴가 보이지 않도록 설정 */
const gnbMouseleave = (e) => {
  $('.open-nav-cover').css('top', '-295px');
  $('.header .header-wrap .gnb ul li .lnb').css('display', 'none');
};
$('.header .gnb').on('mouseleave', gnbMouseleave);

/* header 하위 메뉴를 클릭했을 때 하위 메뉴가 자동으로 닫히도록 설정 */
const clickLnbLi = () => {
  $('.open-nav-cover').css('top', '-295px');
  $('.header .header-wrap .gnb ul li .lnb').css('display', 'none');
  $('#hambuger').removeClass('close');
  $('.open-nav-cover-m').removeClass('show');
  $('body,html').removeClass('scroll-lock');
  $('.header .header-wrap .gnb ul').removeClass(
    'on animate__animated animate__fadeIn'
  );
};
$('.header .header-wrap .gnb ul li .lnb li a.click').on('click', clickLnbLi);

/* 키보드에 home 키를 눌러 최상단으로 이동했을 때 header가 내려오도록 설정 */
const homKeyEvent = (e) => {
  if (e.keyCode == 36) {
    $('.header').addClass('top');
  }
};
$('body').on('keyup', homKeyEvent);

/* 아래로 300만큼 스크롤 했을 때 go top, calling btn 나오도록 설정 */
const scrollHeaderGotopCalling = (e) => {
  /* 마우스 휠을 했을 때 header가 보이거나 보이지 않도록 설정
  + hambuger가 활성화 되었을 때 헤더가 상단에 고정되어 있도록 설정 */
  const bodyWheelHeader = (e) => {
    var wheel = e.originalEvent.wheelDelta;
    if (wheel > 0) {
      $('.header').addClass('top');
    } else if ($('#hambuger').hasClass('close') === true) {
      $('.header').addClass('top');
    } else {
      $('.header').removeClass('top');
    }
  };
  $('body').on('mousewheel', bodyWheelHeader);

  if ($(window).scrollTop() > 300) {
    $('.gotop, .calling, .gosite').addClass('blocktop');
    $('.gotop, .calling, .gosite').addClass(
      'animate__animated animate__fadeIn'
    );
  } else {
    $('.gotop, .calling, .gosite').removeClass('blocktop');
  }
};
$(window).on('scroll', scrollHeaderGotopCalling);

/* mobile hambuger 버튼을 열고 닫을 때 이벤트 설정 */
const hambugerToggle = () => {
  $('#hambuger').toggleClass('close');
  $('.open-nav-cover-m').toggleClass('show');
  $('body,html').toggleClass('scroll-lock');
  $('.header .header-wrap .gnb ul').toggleClass(
    'on animate__animated animate__fadeIn'
  );
  $('.header .header-wrap .gnb').toggleClass('block');
  if ($('#hambuger .close')) {
    $(
      '#gnb-1 .lnb, #gnb-2 .lnb, #gnb-3 .lnb, #gnb-4 .lnb, #gnb-5 .lnb'
    ).removeClass('long');
    $('.header .header-wrap .gnb ul .scroll-guide').addClass('ani');
  }
};
$('#hambuger').on('click', hambugerToggle);

/* top btn 설정 */
const goTopBtn = () => {
  $('html, body').animate({ scrollTop: 0 }, 2000);
  $('.header').addClass('top');
  return false;
};
$('.gotop').on('click', goTopBtn);

/* AOS 기본 설정 값 */
AOS.init({
  duration: 1000,
});

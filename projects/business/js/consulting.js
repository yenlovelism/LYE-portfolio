//section 사이 실금 처럼 보이는 하얀색을 안보이게 하기 위함
const backgroundDark = () => {
  $(window).on('load', function () {
    $('html').addClass('dark');
  });
};
backgroundDark();

//main 화면 typing-animation
var typingBool = false;
var typingIdx = 0;
var liIndex = 0;
var liLength = $('.typing-txt>ul>li').length;

var typingTxt = $('.typing-txt>ul>li').eq(liIndex).text();
typingTxt = typingTxt.split('');
if (typingBool == false) {
  typingBool = true;
  var tyInt = setInterval(typing, 100);
}

//video 리사이징 이벤트
const resizeEvent = () => {
  var width_size = window.innerWidth;
  if (width_size <= 600) {
    $('.change-video').each((index, element) => {
      const elementJquery = $(element);
      elementJquery.attr('src', elementJquery.data('mobile-video'));
    });
  } else if (width_size <= 900) {
    $('.change-video').each((index, element) => {
      const elementJquery = $(element);
      elementJquery.attr('src', elementJquery.data('tablet-video'));
    });
  } else if (width_size > 900) {
    $('.change-video').each((index, element) => {
      const elementJquery = $(element);
      elementJquery.attr('src', elementJquery.data('pc-video'));
    });
  }
};

resizeEvent();
$(window).on('resize', resizeEvent);

// 타이핑 효과
function typing() {
  $('#consulting-main .width-wrap .title-area h1').removeClass('on');
  $('#consulting-main .width-wrap .title-area h1').eq(liIndex).addClass('on');
  if (typingIdx < typingTxt.length) {
    $('#consulting-main .width-wrap .title-area h1')
      .eq(liIndex)
      .append(typingTxt[typingIdx]);
    $('#consulting-main .width-wrap .title-area h1').css({
      fontsize: '60px',
      lineheight: '78px',
    });
    typingIdx++;
  } else {
    if (liIndex < liLength - 1) {
      liIndex++;
      typingIdx = 0;
      typingBool = false;
      typingTxt = $('.typing-txt>ul>li').eq(liIndex).text();

      clearInterval(tyInt);

      setTimeout(function () {
        tyInt = setInterval(typing, 100);
      }, 500);
      setTimeout(function () {
        $('#consulting-main .width-wrap .title-area .img-zone').addClass(
          'animate__animated animate__fadeIn'
        );
      }, 1500);
      setTimeout(function () {
        $('#consulting-main .width-wrap .title-area h1').addClass('main');
        $('#consulting-main').addClass('main-bg-color');
        $('#consulting-main .width-wrap .title-area .img-zone img').addClass(
          'main-img'
        );
        $('#consulting-main .width-wrap #icon-mouse').addClass(
          'animate__animated animate__fadeIn'
        );
      }, 1800);
    } else if (liIndex == liLength - 1) {
      clearInterval(tyInt);
    }
  }
}

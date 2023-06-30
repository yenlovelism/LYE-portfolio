/* 리사이즈 이벤트가 일어나면 글자 혹은 이미지가 바뀌도록 */
const changeText = () => {
  var width_size = window.outerWidth;
  if (width_size <= 900) {
    $('.change-img').each((index, element) => {
      const elementJquery = $(element);
      elementJquery.attr('src', elementJquery.data('mobile-img'));
    });
  } else if (width_size > 900) {
    $('.change-img').each((index, element) => {
      const elementJquery = $(element);
      elementJquery.attr('src', elementJquery.data('pc-img'));
    });
  }
};

//이메일 보내기
changeText();
$(window).on('resize', changeText);

function validEmailCheck(obj) {
  const emailRegex = new RegExp(
    '^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z]+)*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z]+)+\\.[a-zA-Z]{2,3}$',
    'i'
  );
  return emailRegex.test(obj.value);
}

document.getElementById('partnership_form').onsubmit = function (e) {
  e.preventDefault();
  var company_data = this.company.value;
  var name_data = this.name.value;
  var phone_data = this.phone.value;
  var site_data = this.site.value;
  var email_data = this.email.value;
  var business_data = this.business.value;
  var description_data = this.description.value;
  var agree_data = this.agree.checked ? this.agree.value : null;

  if (
    document.querySelector('#email').value.length !== 0 &&
    !validEmailCheck(document.querySelector('#email'))
  ) {
    alert('이메일을 다시 입력해주세요.');
    return;
  }

  $.ajax({
    type: 'POST',
    url: './mail.html',
    dataType: 'text',
    data: {
      company: company_data,
      name: name_data,
      phone: phone_data,
      site: site_data,
      email: email_data,
      business: business_data,
      description: description_data,
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

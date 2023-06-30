function sendContactEmail(){
  var data = {
    companyName: $("input[name=companyName]").val(),
    customerName: $("input[name=customerName]").val(),
    contactTel: $("input[name=contactTel]").val(),
    contactEmail: $("input[name=contactEmail]").val(),
    contactText: $("#contactText").val(),
    contactCheck: $("input[name=contactCheck]").is(":checked"),
    devicetype: $("input[name=devicetype]").val()
  }

  function isEmail(email) {
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email);
  }

  function isPhone(value) {
    console.log(value);
    var filter = /^((\+[1-9]{1,4}[ \-]*)|(\([0-9]{2,3}\)[ \-]*)|([0-9]{2,4})[ \-]*)*?[0-9]{3,4}?[ \-]*[0-9]{3,4}?$/;
    return filter.test(value);
  }

  if(data.customerName.length == 0){
    alert("담당자명을 입력하여주세요.");
    return;
  }

  if(data.customerName.length > 10){
    alert("담당자명을 10자 이하로 하여주세요.");
    return;
  }

  if(data.companyName.length > 20){
    alert("업체명을 20자 이하로 하여주세요.");
    return;
  }

  if(data.contactText.length > 50){
    alert("업체명을 50자 이하로 하여주세요.");
    return;
  }

  if(data.contactEmail != "" && (!isEmail(data.contactEmail) || data.contactEmail > 20)){
    alert("이메일 형식이 잘못되었거나. 20자가 넘었습니다.");
    return;
  }

  if(!isPhone(data.contactTel) || data.contactTel > 15){
    alert("연락처 번호 형식이 잘못되었습니다.");
    return;
  }

  if(!data.contactCheck){
    alert("개인벙보처리방침에 동의하여 주십시요.");
    return;
  }

  $.ajax({
      type: 'POST',
      url: "/confirm.php",
      dataType: "text",
      data: data,
      success: function(data) {
          alert(data);
          // Up.Filter= data.payload;
      },
      error: function (request, status, error) {
          console.log('code: '+request.status+"\n"+'message: '+request.responseText+"\n"+'error: '+error);
      }
  });
}

function phoneCheck(_this) {
  _this.value = _this.value.replace(/[^0-9|-]/gmi, "");
}
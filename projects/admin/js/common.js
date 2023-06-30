    // 공지사항 롤링
    textSequence(1); 
    $(".slide_txt:eq(0)").show();
    function textSequence(i) {
        if ($(".slide_txt").length > i) {
            setTimeout(function() {
                if(i == 0){
                    $(".slide_txt:eq("+ ($(".slide_txt").length - 1) +")").hide();
                }else{
                    $(".slide_txt:eq("+ (i - 1) +")").hide();
                }
                $(".slide_txt:eq("+i+")").show();
                textSequence(++i);
            }, 3000); // 1 second (in milliseconds)

        } else if ($(".slide_txt").length == i) { // Loop
            console.log(i);
            textSequence(0);
        }
    }

    /*전체 메뉴 접고 피기(모바일일 경우만 가능)*/
    $("#header .hbg_btn").on("click", function(){
        $("#header .hbg_menu").toggleClass("close");
    });

    /*메뉴 클릭시 효과*/
    $("#header .menu_tit").on("click", function(){
        $("#header .menu_tit").removeClass("on");
        $(this).addClass("on");
    });

    /*소메뉴 접고피기*/
    $("#header .menu_slide").on("click", function(){
        $(this).toggleClass("show");

        if($(this).hasClass("show") == true) {
            $(this).next(".menu_li").slideUp(400);
        }
        else {
            $(this).next(".menu_li").slideDown(400);
        }
    });

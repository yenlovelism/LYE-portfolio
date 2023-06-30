
    /*mouse cursor custom*/
    cursorPoint();    
    function cursorPoint(){
        var $circle = $('.circlep'),
            $follow = $('.circle-follow')
    
            function moveCircle(e){
                TweenLite.to($circle, 0.5, {
                    x: e.clientX,
                    y: e.clientY
                });
                TweenLite.to($follow, 0.3, {
                    x: e.clientX,
                    y: e.clientY
                });
            }
    
            function hoverFunc(e) {
                TweenLite.to($follow, 0.3, {
                    scale: 2,
                    opacity: 1,
                    backgroundColor:"transparent",
                    border: "1px solid #565BBF"
                });
                TweenLite.to($circle, 0.3, {
                    opacity: 1,
                    scale: 0
                });
                
            }
    
            function unhoverFunc(e) {
                TweenLite.to($follow, 0.3, {
                    scale: 1,
                    opacity: 1,
                    backgroundColor:"rgba(242, 124, 56, 0.5)",
                    border: "1px solid transparent"
                });
                TweenLite.to($circle, 0.3, {
                    opacity: 1,
                    scale: 1
                });
                
            }
    
            $(window).on('mousemove', moveCircle);
    
            $("a, button, label, .hover_evt, .swiper-button-next, .swiper-button-prev").hover(hoverFunc, unhoverFunc);
    }

    /*header script*/
    $(".hamburger label").on("click", function(){
        $(".hamburger").toggleClass("show");
    });

    $(document).click(function(e){
        if($(".hamburger").has(e.target).length === 0){
            $(".hamburger").removeClass("show");   
        }
    });

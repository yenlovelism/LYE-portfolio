$(function(){
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
                    border: "1px solid #0058ce"
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
                    backgroundColor:"rgba(0, 88, 206, 0.5)",
                    border: "1px solid transparent"
                });
                TweenLite.to($circle, 0.3, {
                    opacity: 1,
                    scale: 1
                });
                
            }
    
            $(window).on('mousemove', moveCircle);
    
            $("a, button, label, .hover_evt").hover(hoverFunc, unhoverFunc);
    }

});    

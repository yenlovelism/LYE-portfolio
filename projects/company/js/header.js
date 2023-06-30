$(".hamburger label").on("click", function(){
    $(".hamburger").toggleClass("show");
});
$(document).click(function(e){
    if($(".hamburger").has(e.target).length === 0){
        $(".hamburger").removeClass("show");   
    }
});
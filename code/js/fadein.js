$(document).ready(function(){
    $("body").css("opacity", "1");

    $(".pin").click(function(){
        if($(this).children("div").css("display") == "none"){
            $(this).children("div").fadeIn("fast");
        } else {
            $(this).children("div").fadeOut("fast");
        }
    });
});

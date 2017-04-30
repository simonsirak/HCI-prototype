var redon = true;
var blackon = true;
var yellowon = true;

$(document).ready(function(){
    $("#red").click(function(){
        if(!redon){
            $(this).css("background-color","rgba(255,255,255,0.5)");
            $(".red").fadeIn("fast");

            redon = true;
        } else {
            $(this).css("background-color","rgba(0,0,0,0)");
            $(".red").fadeOut("fast");

            redon = false;
        }
    });

    $("#black").click(function(){
        if(!redon){
            $(this).css("background-color","rgba(255,255,255,0.5)");
            $(".black").fadeIn("fast");

            redon = true;
        } else {
            $(this).css("background-color","rgba(0,0,0,0)");
            $(".black").fadeOut("fast");

            redon = false;
        }
    });
});

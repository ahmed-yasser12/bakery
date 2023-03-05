let WhoOffset=$(".who").offset().top;
// console.log(WhoOffset);
$(window).scroll(function(){
    let srcoll=$(window).scrollTop();
    if(srcoll > WhoOffset-200  ){
        $("nav").css("backgroundColor","rgb(142, 119, 84,0.8)");
    }
    else{
        $("nav").css("backgroundColor","transparent");
    }
   
});


$("#colorBox i").click(function () {
   let colorContainer=$("#colorContainer").innerWidth();
   let offset=$("#colorContainer").offset().left;
    if (offset ==0) {
        $("#colorBox").animate({left:`-${colorContainer}px`},1000)
    }else{
        $("#colorBox").animate({left:`0px`},1000)
    }
});

$("#colorContainer span").click(function(e){
  let x=  $(e.target).css("background-color")
    $("p").css("color",x);
    $(".navbar").css("background-color",x);
});
$(".next").click(function () {
    let about=$("#about").offset().top;
    $(window).scrollTop(about);
});
$(document).ready(function() {
//Preloader
preloaderFadeOutTime = 2000;
function hidePreloader() {

    setTimeout(()=>{
        var preloader = $('.spinner-wrapper');
        preloader.css('display', 'none')
    }, preloaderFadeOutTime)

}
hidePreloader();

$(window).scroll(()=>{
    if($(document).scrollTop() > 300){
        $(".nav-bar-outer").slideDown("slow");
        $(".nav-bar-outer").addClass("nav-bar-afterScroll");
        $("#logoImg").attr("src", "/images/LogoMakr-6RkqMf.png");
        $(".nav-links a").css("color", "black");

    }else {
        $(".nav-bar-outer").removeClass("nav-bar-afterScroll");
        $("#logoImg").attr("src", "/images/LogoMakr-5Rg2vj.png");
        $(".nav-links a").css("color", "white");
    }
})
for(let i = 0; i <= 8; i++){
    $(`.pc-card${i}`).mouseover(function(){
        $(this).css('background-color', '#f85c70');
        $(`.icon${i}`).css('background-color', "white");
        $(`.pc-card${i} h3`).css('color', 'white');
        $(`.pc-card${i} p`).css('color', 'white');
    });
    $(`.pc-card${i}`).mouseout(function(){
        $(this).css('background-color', 'rgb(238,238,238)')
        $(`.icon${i}`).css('background-color', "rgb(238,238,238)");
        $(`.pc-card${i} h3`).css('color', 'black');
        $(`.pc-card${i} p`).css('color', '#999');
    })
}

});


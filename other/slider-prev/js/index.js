$(".slider-preview").click(function () {
    var temp;
    temp = $("#main-slide").html();
    $("#main-slide").html($(this).html());
    cursorAway = false;
    $(".slider-preview").removeClass("activeSlide");
    $(this).addClass("activeSlide");
});

var cursorAway = true;
var slides = $(".slider-preview").children().clone();
var aSlides = $(".slider-preview");
var slideNumber = 0;

setInterval(function () {
    if (cursorAway) {
        $("#main-slide").html(slides[slideNumber]);
        aSlides[slideNumber].addClass("activeSlide");

        if (slideNumber < slides.length - 1) {
            slideNumber++;
        } else {
            slideNumber = 0;
        }
    }
}, 1000);

//$("#main-slide").mouseenter(function () {
//    cursorAway = false;
//}).mouseleave(function () {
//    cursorAway = true;
//});
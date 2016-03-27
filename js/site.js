/*
Dependencies:
    Jquery => https://jquery.com/
*/

$(window).scroll(function() {
    if ($(this).scrollTop() > 1) {
        $('#masthead').addClass("sticky"); // #masthead.sticky: enable
        $('.scroll-arrow-up').css("visibility", "visible"); // scroll-to-top: enable
    }
    else{
        $('#masthead').removeClass("sticky"); // #masthead.sticky: disable
        $('.scroll-arrow-up').css("visibility", "hidden"); // scroll-to-top: disable
    }
    
    fadeInDownAnimation();
});

// fadeInDown animation for sections
var fadeInDownAnimation = function() {
    var animateClass = '.animate';
    if ($(animateClass).length) {
        $(animateClass).each(function () {
            if ($(this).offset().top < $(window).scrollTop() + ($(window).height()/ 1.4)) {
                $(this).addClass('fadeInDownAnim');
            }
        });
    }
}

$(function () {
    fadeInDownAnimation();
});

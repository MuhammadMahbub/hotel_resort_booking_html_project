$(document).ready(function() {
    
    // scrolling
    $(window).scroll(function() {
        let scrl = $(this).scrollTop();
        if (scrl > 100) {
            $("#menu").addClass("menubg");
        } else {
            $("#menu").removeClass("menubg");
        }
    });

    // banner part slider
    $('#banner').slick({
        dots: false,
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: ('<i class="fa-solid fa-arrow-left prev"></i>'),
        nextArrow: ('<i class="fa-solid fa-arrow-right next"></i>'),
    });


})
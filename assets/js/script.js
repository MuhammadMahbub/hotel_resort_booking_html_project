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

    // Service part slider
    $('.service_slider').slick({
        dots: false,
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: ('<i class="fa-solid fa-arrow-left prev"></i>'),
        nextArrow: ('<i class="fa-solid fa-arrow-right next"></i>'),
    });


    // Partner part slider
    $('.partner_slider').slick({
        autoplay: true,
        autoplaySpeed: 1000,
        dots: false,
        arrows: false,
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        pauseOnHover : true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 6,
                    slidesToScroll: 6,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            }
    
      ]
    });


})
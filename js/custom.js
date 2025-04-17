

$('.carousel-fwidth').owlCarousel({
    loop: false,
    margin: 20,
    nav: true,
    dots: false,
    nav: true,
    navText: ['<i class="fa-solid fa-chevron-left"></i>', '<i class="fa-solid fa-chevron-right"></i>'],
    autoPlay: true,
    autoplayTimeout: 5000,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 2
        }
    }
});


// nav fixed 
$(document).ready(function () {
    let lastScrollTop = 0;
    $(window).scroll(function () {
        let currentScroll = $(this).scrollTop();

        if (currentScroll > lastScrollTop) {
            $(".header").removeClass("fixed-top").css("top", "-160px");
        } else {
            $(".header").addClass("fixed-top").css("top", "0");
        }
        // Remove .fixed-top when at the top of the page
        if (currentScroll === 0) {
            $(".header").removeClass("fixed-top");
        }
        lastScrollTop = currentScroll;
    });
});


// wow js
wow = new WOW(
    {
        boxClass: 'wow',
        animateClass: 'animated',
        offset: 0,
        mobile: true,
        live: true
    }
)
wow.init();


// loader
$(window).on('load', function () {
    $('.preloader').fadeOut();
    $('.preloader').delay(1350).fadeOut('slow');
    $('body').delay(2000).css({
        'overflow': 'visible'
    });
});


// Scroll top button //

$("document").ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $(".scroll-top").fadeIn();
        } else {
            $(".scroll-top").fadeOut();
        }
    });
    $(".scroll-top").click(function () {
        $("html,body").animate({
            scrollTop: 0
        }, 700);
    });
});
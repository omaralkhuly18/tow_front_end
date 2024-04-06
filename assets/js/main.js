(function($) {

    'use strict';  

    //===== 01. Main Menu
    function mainMenu() {
        // Variables
        var var_window = $(window),
            navContainer = $('.header-navigation'),
            navbarToggler = $('.navbar-toggler'),
            navMenu = $('.nav-menu'),
            navMenuLi = $('.nav-menu ul li ul li'),
            closeIcon = $('.navbar-close');
        // navbar toggler
        navbarToggler.on('click', function() {
            navbarToggler.toggleClass('active');
            navMenu.toggleClass('menu-on');
        });
        // close icon
        closeIcon.on('click', function() {
            navMenu.removeClass('menu-on');
            navbarToggler.removeClass('active');
        });
        // adds toggle button to li items that have children
        navMenu.find('li a').each(function() {
            if ($(this).next().length > 0) {
                $(this).parent('li').append('<span class="dd-trigger"><i class="fas fa-angle-down"></i></span>');
            }
        });
        // expands the dropdown menu on each click
        navMenu.find('li .dd-trigger').on('click', function(e) {
            e.preventDefault();
            $(this).parent('li').children('ul').stop(true, true).slideToggle(350);
            $(this).parent('li').toggleClass('active');
        });
        // check browser width in real-time
        function breakpointCheck() {
            var windoWidth = window.innerWidth;
            if (windoWidth <= 1199) {
                navContainer.addClass('breakpoint-on');
            } else {
                navContainer.removeClass('breakpoint-on');
            }
        }
        breakpointCheck();
        var_window.on('resize', function() {
            breakpointCheck();
        });
    };

    // Document Ready
    $(document).ready(function() {
        mainMenu();
    });
    //===== Prealoder
    $(window).on('load', function(event) {
        $('.preloader').delay(500).fadeOut('500');
    })

    /*-----------------------------------
        sticky header JS
    -----------------------------------*/
    $(window).on('scroll',function() {    
        var scroll = $(window).scrollTop();
        if (scroll < 100) {
            $(".header-navigation").removeClass("sticky");
        }else{
            $(".header-navigation").addClass("sticky");
        }
    }); 
    /*------------------------
        sticky header JS
    --------------------------*/
    /*---------------------- 
        Scroll top js
    ------------------------*/
    $(window).on('scroll', function() {
        if ($(this).scrollTop() > 100) {
            $('#scroll_up').fadeIn();
        } else {
            $('#scroll_up').fadeOut();
        }
    });
    $('#scroll_up').on('click', function() {
        $("html, body").animate({
            scrollTop: 0
        }, 600);
        return false;
    });
    /*---------------------- 
        Scroll top js
    ------------------------*/
    /*----------------------
        slick slider js
    ----------------------*/
    $('.hero-slider-one').slick({
        dots: false,
        infinite: true,
        autoplay: true,
        arrows: false,
        speed: 700,
        fade: true,
        slidesToShow: 1,
        slidesToScroll: 1
    });
    var sliderArrows=".case-arrows-one";
    $('.case-slider-one').slick({
        dots: false,
        infinite: true,
        autoplay: true,
        arrows: true,
        speed: 700,
        appendArrows: sliderArrows,
        prevArrow: '<div class="prev"><i class="fal fa-arrow-left"></i></div>',
        nextArrow: '<div class="next"><i class="fal fa-arrow-right"></i></div>',
        slidesToShow: 3,
        slidesToScroll: 1,
        variableWidth: true,
        responsive: [
        {
            breakpoint: 1000,
            settings: {
            arrows: false,
            slidesToShow:1,
            }
        },
        {
            breakpoint: 600,
            settings: {
            arrows: false,
            slidesToShow:1,
            variableWidth: false,
            }
        },
        {
            breakpoint: 480,
            settings: {
            arrows: false,
            slidesToShow:1,
            variableWidth: false,
            }
        }
        ]
    });
    $('.case-post-gallery').slick({
        dots: false,
        infinite: true,
        autoplay: true,
        arrows: false,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
        {
            breakpoint: 1000,
            settings: {
                slidesToShow: 2
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow:1
            }
        }
        ]
    });
    var sliderArrows=".testimonial-arrows-one";
    $('.testimonial-slide-one').slick({
        dots: false,
        infinite: true,
        autoplay: true,
        arrows: true,
        speed: 600,
        appendArrows: sliderArrows,
        prevArrow: '<div class="prev"><i class="fal fa-arrow-left"></i></div>',
        nextArrow: '<div class="next"><i class="fal fa-arrow-right"></i></div>',
        slidesToShow: 1,
        slidesToScroll: 1
    });
    var sliderArrows=".service-arrows-one";
    $('.service-slide-one').slick({
        dots: false,
        infinite: true,
        autoplay: true,
        arrows: true,
        speed: 700,
        appendArrows: sliderArrows,
        prevArrow: '<div class="prev"><i class="fal fa-arrow-left"></i></div>',
        nextArrow: '<div class="next"><i class="fal fa-arrow-right"></i></div>',
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1400,
                settings: {
                    arrows: false,
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 100,
                settings: {
                    arrows: false,
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 991,
                settings: {
                    arrows: false,
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 767,
                settings: {
                    arrows: false,
                    slidesToShow: 1
                }
            }
        ]
    });
    var sliderArrows=".service-arrows-two";
    $('.service-slide-two').slick({
        dots: false,
        infinite: true,
        autoplay: true,
        arrows: true,
        speed: 700,
        appendArrows: sliderArrows,
        prevArrow: '<div class="prev"><i class="fal fa-arrow-left"></i></div>',
        nextArrow: '<div class="next"><i class="fal fa-arrow-right"></i></div>',
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1000,
                settings: {
                    arrows: false,
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 900,
                settings: {
                    arrows: false,
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 767,
                settings: {
                    arrows: false,
                    slidesToShow: 1
                }
            }
        ]
    });
    var sliderArrows=".service-arrows-three";
    $('.service-slide-three').slick({
        dots: false,
        infinite: true,
        autoplay: true,
        arrows: true,
        speed: 700,
        appendArrows: sliderArrows,
        prevArrow: '<div class="prev"><i class="fal fa-arrow-left"></i></div>',
        nextArrow: '<div class="next"><i class="fal fa-arrow-right"></i></div>',
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1400,
                settings: {
                    arrows: false,
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 1199,
                settings: {
                    arrows: false,
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 992,
                settings: {
                    arrows: false,
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 767,
                settings: {
                    arrows: false,
                    slidesToShow: 1
                }
            }
        ]
    });
    $('.sponser-slide-one').slick({
        dots: false,
        infinite: true,
        autoplay: true,
        arrows: false,
        speed: 1000,
        slidesToShow: 5,
        slidesToScroll: 2,
        responsive: [
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2
                }
            }
        ]
    });
    $('.blog-slider-one').slick({
        dots: false,
        infinite: true,
        autoplay: true,
        arrows: false,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1100,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
    $('.shop-big-slider').slick({
		dots: false,
		arrows: false,
		infinite: true,
		autoplaySpeed: 1500,
		asNavFor: '.shop-thumb-slider',
        fade: true,
		slidesToShow: 1,
		slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false
                }
            }
        ]
    });
    $('.shop-thumb-slider').slick({
		dots: false,
		arrows: false,
		autoplaySpeed: 1500,
		focusOnSelect: true,
        vertical: true,
		asNavFor: '.shop-big-slider',
		slidesToShow: 3,
		slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1199,
                settings: {
                    vertical: false
                }
            }
        ]
    });
    /*---------------------- 
        slick slider js
    ------------------------*/  
    /*----------------------
        Counter js
    ------------------------*/
    $('.counter').counterUp({
        delay: 100,
        time: 4000
    });
    /*----------------------
        Counter js
    ------------------------*/
    /*---------------------- 
        Isotope js
    ------------------------*/
    $('#case-filter-section').imagesLoaded( function() {
        // items on button click
        $('.filter-btn').on('click', 'li', function () {
            var filterValue = $(this).attr('data-filter');
            items.isotope({
                filter: filterValue
            });
        });
        // menu active class
        $('.filter-btn li').on('click', function (e) {
            $(this).siblings('.active').removeClass('active');
            $(this).addClass('active');
            e.preventDefault();
        });
        var items = $('.case-grid').isotope();
    });
    /*---------------------- 
        magnific-Popup js
    ----------------------*/
    $('.video-popup').magnificPopup({
        type: 'iframe',
        removalDelay: 300,
        mainClass: 'mfp-fade'
    });
    /*---------------------- 
        wow js
    ------------------------*/
    new WOW().init();

    /*----------------------
        nice_number js
    ----------------------*/
    $('select').niceSelect();

    // nice number
    $('input[type="number"]').niceNumber({
        buttonDecrement:'<i class="fas fa-minus"></i>',
        buttonIncrement:'<i class="fas fa-plus"></i>'
    });

    // Price ranger
    $( "#slider-range" ).slider({
        range: true,
        min: 0,
        max: 250,
        values: [40, 200 ],
        slide: function( event, ui ) {
          $( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
        }
      });
      $( "#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) +
        " - $" + $( "#slider-range" ).slider( "values", 1 ) );

})(window.jQuery);
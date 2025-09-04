
$(document).ready(function () {
    if ($.fn.countdown) {
        $('#countdown').countdown('2026/9/8', function (event) {
            $(this).html(event.strftime(''
                + '<div class="time-box"><span class="label">Days</span><span class="number">%d</span></div>'
                + '<div class="colon">:</div>'
                + '<div class="time-box"><span class="label">Hours</span><span class="number">%H</span></div>'
                + '<div class="colon">:</div>'
                + '<div class="time-box"><span class="label">Minutes</span><span class="number">%M</span></div>'
                + '<div class="colon">:</div>'
                + '<div class="time-box"><span class="label">Seconds</span><span class="number">%S</span></div>'
            ));
        });
        $('#countdown-music').countdown('2026/9/8', function (event) {
            $(this).html(event.strftime(''
                + '<div class="time-box"><span class="number">%d</span> <span class="label">Days</span></div>'
                + '<div class="time-box"><span class="number">%H</span> <span class="label">Hours</span></div>'
                + '<div class="time-box"><span class="number">%M</span> <span class="label">Minutes</span></div>'
                + '<div class="time-box"><span class="number">%S</span> <span class="label">Seconds</span></div>'


            ));
        });
    }



    // owl-carousel-product
    if ($.fn.owlCarousel) {
        $('.owl-carousel-product').owlCarousel({
            // items: 4,
            loop: true,
            autoplayHoverPause: true,
            // margin: 30,
            autoplay: true,
            nav: true,
            navText: ["<i class='fa fa-arrow-left'></i>",
                "<i class='fa fa-arrow-right'></i>"],
            autoWidth: true,
            responsiveClass: true,
            smartSpeed: 600,

            responsive: {


                0: {
                    items: 1,
                },


                768: {
                    items: 2,
                },

                992: {
                    items: 3,
                }

                //     // 1200: {
                //     //     items: 4,
                //     //     nav: true
                //     // }

            }



        })

        $('.owl-carousel-category').owlCarousel({
            items: 6,
            loop: true,
            autoplayHoverPause: true,
            autoplay: true,
            nav: true,
            navText: ["<i class='fa fa-arrow-left'></i>",
                "<i class='fa fa-arrow-right'></i>"],
            responsiveClass: true,
            autoWidth: true,
            smartSpeed: 600,
            responsive: {
                0: {
                    items: 2,
                },

                576: {
                    items: 4,
                    nav: true
                },
            }

        });
    }



    // owl-carousel-category


    if ($.fn.slick) {


        $('.slick-slider-product').slick({
            rows: 2,
            slidesToShow: 4,
            slidesToScroll: 1,
            pauseOnHover: true,
            arrows: true,
            autoplay: true,
            prevArrow: "<button type='button' class='slick-prev'><i class='fa-solid fa-arrow-left'></i></button>",
            nextArrow: "<button type='button' class='slick-next'><i class='fa-solid fa-arrow-right'></i></button>",


            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,

                    }
                },

                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                    }
                },

                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        centerMode: true,
                    }
                }
            ]

        })



        $('.slick-slider-website-team-desktop').slick({
            rows: 1,
            slidesToShow: 1,
            slidesToScroll: 1,
            pauseOnHover: true,
            arrows: false,
            autoplay: true,
            dots: true,
            appendDots: $('.slick-desktop-dots'),
            initialSlide: 2,
            autoplaySpeed: 3000
        });


        $('.slick-slider-website-team-mobile').slick({
            rows: 1,
            slidesToShow: 2,
            slidesToScroll: 1,
            pauseOnHover: true,
            arrows: false,
            autoplay: true,
            dots: true,
            appendDots: $('.slick-mobile-dots'),
            initialSlide: 2,
            autoplaySpeed: 3000,


            responsive: [

                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        centerMode: true,
                    }
                }
            ]
        });



        $('.slider-main-thumbail').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            fade: true,
            asNavFor: '.slider-small-thumbail'
        });



        $('.slider-small-thumbail').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            asNavFor: '.slider-main-thumbail',
            dots: false,
            arrows: true,
            centerMode: true,
            vertical: true,
            prevArrow: "<button type='button' class='thumb-prev'><i class='fa-solid fa-angle-up'></i></button>",
            nextArrow: "<button type='button' class='thumb-next'><i class='fa-solid fa-angle-down'></i></button>",
            focusOnSelect: true,

            responsive: [

                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        centerMode: true,
                        vertical: false,
                    }
                },


                {

                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        centerMode: true,
                        vertical: false,
                    }
                },


                {

                    breakpoint: 576,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        centerMode: true,
                        vertical: false,
                    }
                }
            ]

        })


    }



    $(".heart-icon").on("click", function () {
        $(this).toggleClass("fa-regular fa-solid hearted");
    });



    $(".size-btn").click(function () {
        $(this).siblings().removeClass("active");
        $(this).addClass("active");
    });


    $('.qty').on('input', function () {
        let $row = $(this).closest('.price-cart-title');
        let qty = parseInt($(this).val());
        if (isNaN(qty) || qty < 1) qty = 1;
        $(this).val(qty);

        let price = parseFloat($row.find('.price').text());
        let subtotal = qty * price;

        $row.find('.subtotal span').text(subtotal.toFixed(2));

        $row.find('.cart-item-title:last .sub-title').text('$' + subtotal.toFixed(2));
    });




    $(".plus").click(function () {
        let input = $(this).siblings(".quantity");
        let value = parseInt(input.val());
        input.val(value + 1);
    });

    $(".minus").click(function () {
        let input = $(this).siblings(".quantity");
        let value = parseInt(input.val());
        if (value > 1) {
            input.val(value - 1);
        }
    });

















    document.addEventListener("DOMContentLoaded", function () {
        var myDropdown = document.getElementById('mobileMenu');
        console.log(myDropdown);
    });

    // if (myDropdown) {
    //     myDropdown.addEventListener('shown.bs.dropdown', event => {
    //         console.log('hello');

    //     })
    // }
});





// $(".mainProductImg").imagezoomsl({
//     zindex: '200',
//     innerzoommagnifier: true,
//     classmagnifier: window.external ? "round-loope" : "",
//     magnifierborder: "5px solid #F0F0F0",
//     zoomrange: [2, 4],
//     zoomstart: 2,
//     magnifiersize: [250, 250]

// });







// form-validation
// (() => {
//     'use strict'
//     const form = document.getElementById('billingForm');
//     form.addEventListener('submit', function (event) {
//         if (!form.checkValidity()) {
//             event.preventDefault();
//             event.stopPropagation();
//         } else {
//             event.preventDefault();
//             $.ajax({
//                 data: {
//                     fname: $("#fname").val(),
//                     cname: $("#cname").val(),
//                     street: $("#street").val(),
//                     apt: $("#apt").val(),
//                     city: $("#city").val(),
//                     phone: $("#phone").val(),
//                     email: $("#email").val(),

//                 },
//                 success: function (response) {
//                     alert("Form submitted successfully!");
//                     console.log(response);
//                 }
//             });
//         }
//         form.classList.add('was-validated');
//     }, false);

//     document.getElementById('orderBtn').addEventListener('click', function () {
//         if (typeof form.requestSubmit === 'function') {
//             form.requestSubmit();
//         } else {
//             form.submit();
//         }
//     });
// })();



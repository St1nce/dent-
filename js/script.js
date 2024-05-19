$(document).ready(function () {
    $('.feedback-slider').slick({
        arrows: true,
        slidesToShow: 2,
        touchThreshold: 5,
        responsive: [
            {
                breakpoint: 1025,
                settings: {
                    slidesToShow: 1,
                    centerMode: true,
                }
            }, {
                breakpoint: 769,
                settings: {
                    slidesToShow: 1,
                    centerMode: false,
                }
            }, {
                breakpoint: 491,
                settings: {
                    slidesToShow: 1,
                    centerMode: false,
                    dots: true,
                    arrows: false,
                }
            }
        ]
    });
});

$(document).ready(function () {
    $('.license-slider').slick({
        arrows: true,
        slidesToShow: 4,
        touchThreshold: 5,
        responsive: [
            {
                breakpoint: 1441,
                settings: {
                    slidesToShow: 3,
                    // centerMode: true,
                }
            }, {
                breakpoint: 769,
                settings: {
                    slidesToShow: 2,
                    centerMode: false,
                }
            }, {
                breakpoint: 491,
                settings: {
                    slidesToShow: 1,
                    centerMode: false,
                    dots: true,
                    arrows: false,
                }
            }
        ]
    });
});
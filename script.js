$(function () {
    var $nav = $('#navArea');
    var $btn = $('.toggle_btn');
    var $mask = $('#mask');
    var open = 'open';

    $btn.on('click', function () {
        if (!$nav.hasClass(open)) {
            $nav.addClass(open);
        } else {
            $nav.removeClass(open);
        }
    });

    $mask.on('click', function () {
        $nav.removeClass(open);
    });
});

$(function () {
    $('.faq-header').click(function () {
        $(this).next().slideToggle();
    });
});

$(function () {
    var swiper = new Swiper('.swiper-container', {
        autoplay: {
            delay: 5000,
            stopOnLastSlide: false,
            disableOnInteraction: false,
            reverseDirection: false
        },

        loop: true,
        centeredSlides: true,
        slidesPerView: 3,
        spaceBetween: 56,
    });
});

$(function () {
    $('#form').submit(function (event) {
        var formData = $('#form').serialize();
        $.ajax({
            url: "https://docs.google.com/forms/u/0/d/e/1FAIpQLSfu2a3AHLlpeBy1LXLUDBkw752HP04b8nWXoZEWhF24FlcGBA/formResponse",
            data: formData,
            type: "POST",
            dataType: "xml",
            statusCode: {
                0: function () {
                    $(".end-message").slideDown();
                    $(".contact-submit").fadeOut();
                },
                200: function () {
                    $(".false-message").slideDown();
                }
            }
        });
        event.preventDefault();
    });
});

$(function () {
    $('a[href^="#"]').click(function () {
        let header = $(".header").innerHeight();
        let speed = 500;
        let id = $(this).attr("href");
        let target = $("#" == id ? "html" : id);
        let position = $(target).offset().top - header;
        $("html, body").animate(
            {
                scrollTop: position
            },
            speed
        );
        return false;
    });
});

$(function () {
    const $submitBtn = $('#submit')
    $('#form input, #form textarea').on('change', function () {
        if (
            $('#form input[type="text"]').val() !== "" &&
            $('#form input[type="email"]').val() !== "" &&
            $('#form textarea').val() !== "" &&
            $('#form #checkbox').prop('checked') === true
        ) {
            $submitBtn.prop('disabled', false);

        } else {
            $submitBtn.prop('disabled', true);
        }
    });
});

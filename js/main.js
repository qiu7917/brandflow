$(function () {

    /*=================================================
    Slick
    ===================================================*/
    $(".slider").slick({
        autoplay: true,
        autoplaySpeed: 3000,
        infinite: true,
        arrows: true,
        prevArrow: '<div class="slide-arrow prev-arrow"></div>',
        nextArrow: '<div class="slide-arrow next-arrow"></div>',
        dots: true,
        centerMode: true,
        centerPadding: '10%',
        slidesToShow: 3,

        responsive: [
            {
                breakpoint: 1100,
                settings: {
                    slidesToShow: 1,
                    centerPadding: '20%',
                }
            },
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 1,
                    centerPadding: '10%',
                }
            },
            {
                breakpoint: 426,
                settings: {
                    centerMode: false,
                    centerPadding: '0',
                    slidesToShow: 1,
                }
            }
        ]
    });


    /*=================================================
    アコーディオンメニュー
    ===================================================*/
    $('.faq-accordion-item').on('click', function () {
        var $item = $(this);
        var $content = $item.find('.accordion-content');

        if ($item.hasClass('is-active')) {
            $item.removeClass('is-active');
            $content.stop().slideUp(400);
        } else {
            $item.addClass('is-active');
            $content.stop().slideDown(400);
        }
    });
});




/*=================================================
ハンバーガーメニュー
===================================================*/
$(function () {
    $('.hamburger').on('click', function () {
        $('header').toggleClass('open');
    });

    // ナビゲーション内のリンクをクリックしたら閉じる
    $('.global-nav a').on('click', function () {
        $('header').removeClass('open');
    });

    // メニュー以外の場所をクリックしたら閉じる
    $(document).on('click', function (e) {
        // クリックされた場所が .global-nav や .hamburger でなければ open を外す
        if (!$(e.target).closest('.global-nav, .hamburger').length) {
            $('header').removeClass('open');
        }
    });
});



/*=================================================
スムーススクロール
===================================================*/

$(function () {
    $('a[href^="#"]').click(function () {
        let href = $(this).attr("href");
        let target = $(href == "#" || href == "" ? "html" : href);
        let headerHeight = 80;
        let position = target.offset().top - headerHeight;
        $("html, body").animate({ scrollTop: position }, 600, "swing");
        return false;
    });
});


/*=================================================
fadein
===================================================*/

$(window).scroll(function () {
    $(".fadein, .leftin, .rightin, .fadein-step").each(function () {
        let scroll = $(window).scrollTop();
        let target = $(this).offset().top;
        let windowHeight = $(window).height();

        if (scroll > target - windowHeight + 200) {
            $(this).addClass("is-visible");
        }
    });
});
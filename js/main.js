$(function () {

    /*=================================================
    Slick
    ===================================================*/
    $(".slider").slick({
        // autoplay: true,
        autoplay: false,
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
                breakpoint: 769,
                settings: {
                    slidesToShow: 1,
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
        // クリックされた li 自体を取得
        var $item = $(this);
        // その中にある content を探す
        var $content = $item.find('.accordion-content');

        if ($item.hasClass('is-active')) {
            // 【閉じる動作】
            $item.removeClass('is-active');
            $content.stop().slideUp(400);
        } else {
            // 【開く動作】
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
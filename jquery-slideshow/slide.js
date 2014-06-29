(function ($) {

    var $slider = $('#slider'),
        $container = $slider.find('.container'),
        $nav = $('#slider-nav'),
        $slide = $container.children(),
        s_length = $slide.length,
        s_wide = $slider.width() * s_length,
        s_height = $slider.height(),
        autoSlide = null;

    $container.css({
        'position': 'relative',
            'width': s_wide,
            'height': s_height
    });

    $slide.each(function (index) {
        var i = index + 1;
        $nav.append('<a href="#slide-' + i + '">' + i + '</a>');
        $(this).attr('id', 'slide-' + i);
    });

    $nav.find('a').on("click", function (pos) {
        $nav.find('.active').removeClass('active');
        $(this).addClass('active');
        pos = $(this).index() * $slider.width();
        $container.animate({
            left: '-' + pos + 'px'
        }, 600);
        clearInterval(autoSlide);
        autoSlide = setInterval(slideShow, 3000);
        return false;
    }).first().addClass('active');

    function slideShow() {
        if ($nav.find('.active').next().length) {
            $nav.find('.active').next().trigger("click");
        } else {
            $nav.find('a').first().trigger("click");
        }
    }
    autoSlide = setInterval(slideShow, 3000);

})(jQuery);

var timer, delay = 500;
$('input').bind('keydown blur change', function (e) {
    var _this = $(this);
    clearTimeout(timer);
    timer = setTimeout(function () {
        _this.addClass('fireEffect').effect("pulsate", {
            times: 3
        }, 200, function () {
            _this.removeClass('fireEffect');
        });
    }, delay);
});


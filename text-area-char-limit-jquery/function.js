$('textarea').live('blur keyup paste change', function (e) {
    var _this = this,
        maxlength = 10;
    setTimeout(function () {
        if (_this.value.length > maxlength) {
            _this.value = _this.value.substr(0, maxlength);
        }
    }, 1);
});

$("document").ready(function () {
    //arrange blocks in a circle
    var block = $("#rotator div").get(),
        increase = Math.PI * 2 / block.length,
        x = 0,
        y = 0,
        angle = 0;

    for (var i = 0; i < block.length; i++) {
        var elem = block[i];
        x = 140 * Math.cos(angle) + 150;
        y = 140 * Math.sin(angle) + 150;
        elem.style.position = 'absolute';
        elem.style.left = x + 'px';
        elem.style.top = y + 'px';
        var rot = 90 + (i * (360 / block.length));
        angle += increase;
    }

});

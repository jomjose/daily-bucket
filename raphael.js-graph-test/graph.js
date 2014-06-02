/*helpers*/
var generateLength = function () {
    return 100 + Math.floor(Math.random() * 401);
}
var generateTime = function () {
    return 1000 + Math.floor(Math.random() * 1001);
}
/*/helpers*/

//create canvas
var canvas = Raphael(10, 50, 600, 300);
canvas.path("M 10 0 10 125 z").attr({
    stroke: 'black',
    'stroke-width': 3
});
canvas.path("M 10 125 500 125 z").attr({
    stroke: 'black',
    'stroke-width': 3
});
//create and animate the bars
canvas.rect(11, 0, 0, 20).attr("fill", "red").animate({
    'width': generateLength()
}, generateTime(), 'bounce');
canvas.rect(11, 25, 0, 20).attr("fill", "orange").animate({
    'width': generateLength()
}, generateTime(), 'bounce');
canvas.rect(11, 50, 0, 20).attr("fill", "yellow").animate({
    'width': generateLength()
}, generateTime(), 'bounce');
canvas.rect(11, 75, 0, 20).attr("fill", "white").animate({
    'width': generateLength()
}, generateTime(), 'bounce');
canvas.rect(11, 100, 0, 20).attr('gradient', '180-#7699c8-#3535f4').animate({
    'width': generateLength()
}, generateTime(), 'bounce');

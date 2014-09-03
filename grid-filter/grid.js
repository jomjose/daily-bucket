$(function(){
  $('#Container').mixItUp();
});

$('input').on('click',function() {
    if ($(this).hasClass('grid')) {
        $('#Container ul').removeClass('small-block-grid-1').addClass('small-block-grid-3 medium-block-grid-4 large-block-grid-5');
    }
    else if($(this).hasClass('list')) {
        $('#Container ul').removeClass('small-block-grid-3 medium-block-grid-4 large-block-grid-5').addClass('small-block-grid-1');
    }
});

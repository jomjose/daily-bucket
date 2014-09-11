$('#menu-toggle').prepend('<i></i>').on('click', function(event){
  event.preventDefault();
  $(this).toggleClass('active');
});

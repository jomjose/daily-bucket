$(window).scroll(function() {
// 100 = The point you would like to fade the nav in.
  
	if ($(window).scrollTop() > 100 ){
    
 		$('.bg').stop().animate({
   		opacity : 0.5
   	}, 200 );
    
  } else {
    
		$('.bg').stop().animate({
   		opacity : 0
   	}, 200 );				
    
 	};   	
});

$('.scroll').on('click', function(e){		
		e.preventDefault()
    
  $('html, body').animate({
      scrollTop : $(this.hash).offset().top
    }, 1500);
});

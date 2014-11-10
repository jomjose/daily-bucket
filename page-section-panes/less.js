var webTitle          = $(".web-title");
var webTitleText      = $(".web-title h1");
var webContent        = $(".web-content");
var webBack           = $(".back-web");

var officeTitle       = $(".office-title");
var officeTitleText   = $(".office-title h1");
var officeContent     = $(".office-content");
var officeBack        = $(".back-office");

webTitle.click(function(){
  webTitle.css("z-index", "10");
  officeTitle.css("z-index", "0");
  webTitle.animate({width:"100%"}, 600);
  webTitle.animate({height:"20vh"}, 600);
  webTitleText.delay(600).animate({lineHeight:"20vh"}, 600);
  officeTitle.delay(600).fadeOut(600);
  webContent.delay(400).fadeIn(200);
  webBack.delay(1200).fadeIn("slow");
});

officeTitle.click(function(){
  officeTitle.css("z-index", "10");
  webTitle.css("z-index", "0");
  officeTitle.animate({width:"100%"}, 600);
  officeTitle.animate({height:"20vh"}, 600);
  officeTitleText.delay(600).animate({lineHeight:"20vh"}, 600);
  webTitle.delay(600).fadeOut(600);
  officeContent.delay(400).fadeIn(200);
  officeBack.delay(1200).fadeIn("slow");
});

webBack.click(function() {
  webBack.fadeOut("slow");
  webContent.delay(600).fadeOut(200);
  officeTitle.delay(600).fadeIn(200);
  webTitle.animate({height:"100vh"}, 600);
  webTitleText.animate({lineHeight:"100vh"}, 600);
  webTitle.animate({width:"50%"}, 600);
});

officeBack.click(function() {
  officeBack.fadeOut("slow");
  officeContent.delay(600).fadeOut(200);
  webTitle.delay(600).fadeIn(200);
  officeTitle.animate({height:"100vh"}, 600);
  officeTitleText.animate({lineHeight:"100vh"}, 600);
  officeTitle.animate({width:"50%"}, 600);
});




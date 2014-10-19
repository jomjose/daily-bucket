$(document).ready(function(){
  $(".search label").on("click", function(){
    $(this).children("span").toggleClass("checked");
  });
});

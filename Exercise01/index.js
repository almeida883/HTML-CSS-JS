$(".slide").css("display","none");

$(".drop").click(function(){
  var slideId = $(this).data("slide-id"); 
  $("#" + slideId).slideToggle();
  $(this).toggleClass("active");

  if ($(this).hasClass("active")) {
    $(this).find("img").css("transform", "rotate(180deg)");
  } else {
    $(this).find("img").css("transform", "rotate(0deg)");
  }
});

$('.button-text').hover(function() {
    $('.illustration-box-desktop').css('transition', 'transform 0.5s ease-out');
    $('.illustration-box-desktop').css('transform', 'translate(-68%, 95%)');
  }, function() {
    $('.illustration-box-desktop').css('transition', 'transform 0.5s ease-out');
    $('.illustration-box-desktop').css('transform', 'translate(-49%, 95%)');
  });
  

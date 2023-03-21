$(document).ready(function() {
  $('.navbar-toggler').click(function() {
    $('.navbar-collapse').slideToggle();
  });

  
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

    $(".dropdown-item").click(function(){
      $(".slide").hide();
      $(".drop").removeClass("active");
    });
//
    $(".icon-close").css("display","none");
    $(".icon-hamburger").click(function(){
      $(".icon-close").css("display","block");
      $(".icon-hamburger").css("display","none");
    });

    $(".icon-close").click(function(){
      $(".icon-hamburger").css("display","block");
      $(".icon-close").css("display","none");
    });

  });


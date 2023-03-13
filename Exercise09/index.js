

$(document).ready(function() {

  // Este código é responsável por mostrar e esconder o menu mobile quando o ícone do menu é clicado  
  $('.icon-menu').click(function(e) {
      e.stopPropagation();
      $('.navbar-collapse').toggleClass('show');
      if ($(this).hasClass('collapsed')) {
        $('.navbar-collapse').removeClass('slideInRight');
        $('.navbar-collapse').addClass('slideOutRight');
      } else {
        $('.navbar-collapse').removeClass('slideOutRight');
        $('.navbar-collapse').addClass('slideInRight');
      }
    });
    
    // Este código é responsável por esconder o menu mobile quando o ícone de fechar é clicado
    $('.icon-close-menu').click(function() {
        if ($('.navbar-collapse').hasClass('show')) {
          $('.navbar-collapse').removeClass('slideInRight');
          $('.navbar-collapse').addClass('slideOutRight');
          setTimeout(function() {
            $('.navbar-collapse').removeClass('show');
          }, 500);
        }
      });

    // Este código é responsável por esconder o menu mobile quando o usuário clica em qualquer outro lugar da página
    $('html').click(function() {
      if ($('.navbar-collapse').hasClass('show')) {
        $('.navbar-collapse').removeClass('slideInRight');
        $('.navbar-collapse').addClass('slideOutRight');
        setTimeout(function() {
          $('.navbar-collapse').removeClass('show');
        }, 500);
      }
    });
  
    //
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
    // Este código é responsável por esconder o menu mobile quando o usuário clica em um link no menu
    $('.nav-link-code-js').click(function() {
      if ($('.navbar-collapse').hasClass('show')) {
        $('.navbar-collapse').removeClass('slideInRight');
        $('.navbar-collapse').addClass('slideOutRight');
        setTimeout(function() {
          $('.navbar-collapse').removeClass('show');
        }, 500);
      }
    });
  

//  
    // Este código é responsável por prevenir que o evento de clique se propague para elementos pai do elemento clicado.
    $('.navbar-nav').click(function(e) {
      e.stopPropagation();
    });
  
    // Mostra o menu dropdown quando o usuário passa o mouse sobre o link
    $('.nav-item').mouseover(function(){
      $(this).find('.dropdown-menu').show();
    });
    // Esconde o menu dropdown quando o usuário tira o mouse do link
    $('.nav-item').mouseout(function(){
      $(this).find('.dropdown-menu').hide();
    });
    
    // Mostra o menu dropdown quando o usuário clica no link "Features"
    $('.nav-link-features').on('click touchstart', function(e) {
        e.preventDefault();
        $(this).next('.dropdown-menu').slideToggle();
      });
    
    // Mostra o menu dropdown quando o usuário clica no link "Company"
    $('.nav-link-company').on('click touchstart', function(e) {
        e.preventDefault();
        $(this).next('.dropdown-menu').slideToggle();
      });


      //  Black background layer for mobile menu
      $('.icon-menu').click(function() {
        $('.overlay').css('display', 'block');
      });
      
      $('.icon-menu-close-box ,html,.nav-link-code-js').click(function() {
        $('.overlay').css('display', 'none');
      });

     

      



  });


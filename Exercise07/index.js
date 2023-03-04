$(document).ready(function() {
  $('.navbar-toggler').click(function(e) {
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

  $('html').click(function() {
    if ($('.navbar-collapse').hasClass('show')) {
      $('.navbar-collapse').removeClass('slideInRight');
      $('.navbar-collapse').addClass('slideOutRight');
      setTimeout(function() {
        $('.navbar-collapse').removeClass('show');
      }, 500);
    }
  });

  $('.nav-link').click(function() {
    if ($('.navbar-collapse').hasClass('show')) {
      $('.navbar-collapse').removeClass('slideInRight');
      $('.navbar-collapse').addClass('slideOutRight');
      setTimeout(function() {
        $('.navbar-collapse').removeClass('show');
      }, 500);
    }
  });

  $('.navbar-nav').click(function(e) {
    e.stopPropagation();
  });

});


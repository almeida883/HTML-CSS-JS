$(document).ready(function() {
  $('.navbar-toggler').click(function() {
    if ($('.navbar-collapse').is(':visible')) {
      $('.navbar-collapse').hide();
    } else {
      $('.navbar-collapse').show();
    }
    $('.navbar-toggler-icon').toggleClass('navbar-toggler-icon-open-menu');
    $('header').toggleClass('background_black');
  });
});

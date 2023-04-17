$(document).ready(function() {
  $('.navbar-toggler').click(function() {
    $('.navbar-collapse').slideToggle();
    $('.navbar-toggler-icon').toggleClass('navbar-toggler-icon-open-menu');
  });
});
$(document).ready(function() {
  var currentImage = 0;
  var totalImages = $('.image-text').length;
  
  $('.next-btn').click(function() {
    $('.image-text').eq(currentImage).removeClass('active');
    currentImage = (currentImage + 1) % totalImages;
    $('.image-text').eq(currentImage).addClass('active');
  });
  
  $('.prev-btn').click(function() {
    $('.image-text').eq(currentImage).removeClass('active');
    currentImage = (currentImage - 1 + totalImages) % totalImages;
    $('.image-text').eq(currentImage).addClass('active');
  });
});

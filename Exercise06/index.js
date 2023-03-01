$(document).ready(function() {
  $('#submitBtn').click(function() {
    $('input:invalid').each(function() {
      $(this).next('.errorMsg').show();
      $(this).css('border', '1px solid red');
      $(this).next().css('display', 'block');
      $(this).nextAll('.errorMsg_img').filter(':first').css('display', 'inline-block');
      if (this.id === 'email') {
        $(this).attr('placeholder', 'email@example.com');
      } else {
        $(this).attr('placeholder', '');
      }
    });
  });

  $('input').on('input', function() {
    $(this).next('.errorMsg').hide();
    $(this).css('border', '');
    $(this).next().css('display', '');
    $(this).nextAll('.errorMsg_img').filter(':first').css('display', '');
  });

});



$('.errorMsg').hide();

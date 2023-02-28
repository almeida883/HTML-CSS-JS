$(document).ready(function() {
  var emailInput = $('#remetente');
  var errorDiv = $('.invalid02');

  emailInput.on('input', function() {
    var email = $(this).val();
    if (isValidEmail(email)) {
      errorDiv.hide();
      emailInput.removeClass('invalid');
    } else {
      errorDiv.show();
      emailInput.addClass('invalid');
    }
  });

  function isValidEmail(email) {
    // Regular expression to match email addresses
    var emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,})+$/;
    return emailRegex.test(email);
  }
});

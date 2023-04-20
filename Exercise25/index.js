$(document).ready(function() {
    $(".error").hide();
    $("#submit-button").click(function() {
      var email = $("#email-input").val();
      if (isValidEmail(email)) {
        // envie o formulário
        $(".error").hide();
      } else {
        $(".error").show();
      }
    });
  
    function isValidEmail(email) {
      // use uma expressão regular para verificar se o email é válido
      var emailRegex = /\S+@\S+\.\S+/;
      return emailRegex.test(email);
    }
  });
  
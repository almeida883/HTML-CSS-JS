$(document).ready(function() {
    // Input dos dados do cartão
    $('#cardNumber').on('input', function() {
      $('.cardNumber').text($(this).val().padEnd(16, '0').replace(/(.{4})/g, '$1 '));
    });
  
    $('#expirationMonth, #expirationYear').on('input', function() {
      let month = $('#expirationMonth').val();
      let year = $('#expirationYear').val();
      $('.expirationDate').text(month.padEnd(2,'0') + '/' + year.padEnd(2,'0'));
    });      
  
    $('#securityCode').on('input', function() {
      $('.securityCode').text($(this).val().padEnd(3, '0'));
    });
  
    $('#cardHolderName').on('input', function() {
      $('.cardHolderName').text($(this).val() || 'Jane Appleseed');
    });
  
    $('#cardHolderName').on('input', function() {
      // Remove caracteres que não são letras
      $(this).val($(this).val().replace(/[^A-Za-z]/g, ''));
    });
  
    $('#cardNumber').on('input', function() {
      $(this).val($(this).val().replace(/\D/g,'').substring(0,16)); // limita a 16 caracteres numéricos
      $('.cardNumber').text($(this).val().padEnd(16, '0').replace(/(.{4})/g, '$1 '));
    }).on('keypress', function(event) {
      return /[0-9]/.test(event.key); // permite apenas números
    });
  
    $('#expirationMonth, #expirationYear').on('input', function() {
      $(this).val($(this).val().replace(/\D/g,'').substring(0,2)); // limita a 2 caracteres numéricos
      let month = $('#expirationMonth').val();
      let year = $('#expirationYear').val();
      $('.expirationDate').text(month.padEnd(2,'0') + '/' + year.padEnd(2,'0'));
    }).on('keypress', function(event) {
      return /[0-9]/.test(event.key); // permite apenas números
    });
  
    $('#securityCode').on('input', function() {
      $(this).val($(this).val().replace(/\D/g,'').substring(0,3)); // limita a 3 caracteres numéricos
      $('.securityCode').text($(this).val().padEnd(3, '0'));
    }).on('keypress', function(event) {
      return /[0-9]/.test(event.key); // permite apenas números
    });
  
    $('#confirm-btn').click(function(event) {
      event.preventDefault();
  
      let filled = true;
  
      $('#expirationMonth, #expirationYear, #securityCode, #cardNumber').each(function() {
        let inputVal = $(this).val();
        let maxLength = $(this).attr('maxlength');
  
        if (inputVal.length < maxLength) {
          $(this).addClass('border-red');
          filled = false;
        } else {
          $(this).removeClass('border-red');
        }
      });
  
      if (filled) {
        // Oculta o formulário
        $('form').hide();
  
        // Mostra a div "finish"
        $('.finish').show();
      }
    });
  });
  
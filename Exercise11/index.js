$(function() {

    $('#bill, #custom, #people').on('input', function() {
        if ($.isNumeric($(this).val())) {
          $(this).addClass('border_cyan');
          $('#button_reset').removeClass("button_empty");
        } else {
          $(this).removeClass('border_cyan');
        }
      });

      $('#bill, #custom, #people').on('input', function() {
        if (($('#bill').val() || $('#custom').val()) && ($('#people').val() === '' || isNaN($('#people').val()))) {
          $('#people').addClass('error');
          $('.error_msg').css("display", "block");
        } else {
          $('#people').removeClass('error');
          $('.error_msg').css("display", "none");
        }
      });

     $('#people').on('input', function() {
        $('#people').removeClass('error');
        $('.error_msg').css("display", "none");
    });
      
    var tipPercent = 0.10;

    $('button').click(function() {
        $('button').removeClass('active');
        $(this).addClass('active');
        tipPercent = parseFloat($(this).attr('id')) / 100; // atualiza a variável tipPercent com o valor do botão clicado
        $('#custom').val('');
        $('#custom').removeClass('border_cyan');
        calculate();
      });      

      $('#custom').keyup(function() {
        // Verifica se o campo personalizado foi preenchido
        if ($(this).val()) {
            // Remove a classe 'active' do botão selecionado
            $('button').removeClass('active');
            // Atualiza a variável tipPercent com o valor do campo personalizado
            tipPercent = parseFloat($(this).val()) / 100;
        } else {
            tipPercent = 0;
        }
        // Calcula a gorjeta
        calculate();
    });

    // Monitora as teclas que são pressionadas no campo de entrada da conta e número de pessoas
    $('#bill, #people').keyup(function() {
        // Calcula a gorjeta
        calculate();
    });

    // Reseta o formulário
    $('form').on('reset', function() {
        tipPercent = 0.10;
        // Limpa os campos de entrada da conta e número de pessoas
        $('#bill, #people, #custom').val('');
        // Limpa as áreas de exibição de resultado
        $('#tipAmount, #totalAmount').text('$0.00');
        $('#people').removeClass('error');
        $('.error_msg').css("display", "none");
        $('#bill, #custom, #people').removeClass('border_cyan');
        $('#button_reset').addClass("button_empty");
    });

    // Função que calcula a gorjeta
    function calculate() {
        // Pega o valor da conta e transforma em um número
        var bill = parseFloat($('#bill').val());
        // Pega o número de pessoas e transforma em um número
        var numPeople = parseInt($('#people').val());

        // Calcula a quantia de gorjeta por pessoa
        var tipAmount = (bill * tipPercent) / numPeople;
        // Calcula o valor total por pessoa (conta + gorjeta)
        var totalAmount = (bill + (bill * tipPercent)) / numPeople;

        // Exibe a quantia de gorjeta por pessoa com duas casas decimais e o símbolo '$'
        $('#tipAmount').text('$' + tipAmount.toFixed(2));
        // Exibe o valor total por pessoa com duas casas decimais e o símbolo '$'
        $('#totalAmount').text('$' + totalAmount.toFixed(2));
    }
});

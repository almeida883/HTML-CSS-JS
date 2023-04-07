$(function() {
  $('.error_message_day,.error_message_month,.error_message_year,.error_day,.error_month,.error_year').hide();
 
  var anoAtual = new Date().getFullYear();
  
  $('#icon-arrow').click(function() {
    var dia = $('#dia').val();
    var mes = $('#mes').val();
    var ano = $('#ano').val();

    // Função que retorna o número de dias de um mês em um determinado ano
    function diasNoMes(mes, ano) {
      return new Date(ano, mes, 0).getDate();
    }

    // Função de validação
    function validarData(dia, mes, ano) {
      var dataAtual = new Date();
      var diaAtual = dataAtual.getDate();
      var mesAtual = dataAtual.getMonth() + 1;

      // Verifica se os campos estão preenchidos

      if (dia === '') {
        $('.error_message_day').show();
        $('#dia').addClass('border_color_red');
        $('.label_text_day').addClass('color_red');
      }
      
      if (mes === '') {
        $('.error_message_month').show();
        $('#mes').addClass('border_color_red');
        $('.label_text_month').addClass('color_red');
      }
      
      if (ano === '') {
        $('.error_message_year').show();
        $('#ano').addClass('border_color_red');
        $('.label_text_year').addClass('color_red');
      }
      
      if (dia === '' || mes === '' || ano === '') {
        return false;
      } else {
        $('.error_message_day,.error_message_month,.error_message_year').hide();
        $('#dia,#mes,#ano').removeClass('border_color_red');
        $('.label_text_day,.label_text_month,.label_text_year').removeClass('color_red');
      }
      

// Verifica se o ano, mês e dia são válidos
if (ano > anoAtual || ano < 1) {
  $('.error_year').show();
  $('#ano').addClass('border_color_red');
  $('.label_text_year').addClass('color_red');
  return false;
} else {
  $('.error_year').hide();
  $('#ano').removeClass('border_color_red');
  $('.label_text_year').removeClass('color_red');
}

if (ano == anoAtual && mes > mesAtual) {
  $('.error_month').show();
  $('#mes').addClass('border_color_red');
  $('.label_text_month').addClass('color_red');
  return false;
} else {
  $('.error_month').hide();
  $('#mes').removeClass('border_color_red');
  $('.label_text_month').removeClass('color_red');
}

if (ano == anoAtual && mes == mesAtual && dia > diaAtual) {
  $('.error_day').show();
  $('#dia').addClass('border_color_red');
  $('.label_text_day').addClass('color_red');
  return false;
} else {
  $('.error_day').hide();
  $('#dia').removeClass('border_color_red');
  $('.label_text_day').removeClass('color_red');
}

if (mes < 1 || mes > 12) {
  $('.error_month').show();
  $('#mes').addClass('border_color_red');
  $('.label_text_month').addClass('color_red');
  return false;
} else {
  $('.error_month').hide();
  $('#mes').removeClass('border_color_red');
  $('.label_text_month').removeClass('color_red');
}

if (dia < 1 || dia > diasNoMes(mes, ano)) {    
  $('.error_day').show();
  $('#dia').addClass('border_color_red');
  $('.label_text_day').addClass('color_red');
  return false;
} else {
  $('.error_day').hide();
  $('#dia').removeClass('border_color_red');
  $('.label_text_day').removeClass('color_red');
}

// Verifica se a data é inválida
var data = new Date(ano, mes - 1, dia);
if (data.getFullYear() != ano || data.getMonth() + 1 != mes || data.getDate() != dia) {
  $('.error_day,.error_month,.error_year').show();
  $('#dia,#mes,#ano').addClass('border_color_red');
  $('.label_text_day,.label_text_month,.label_text_year').addClass('color_red');
  return false;
} else {
  $('.error_day,.error_month,.error_year').hide();
  $('#dia,#mes,#ano').removeClass('border_color_red');
  $('.label_text_day,.label_text_month,.label_text_year').removeClass('color_red');
}


      return true;
    }

    // Chama a função de validação e exibe o resultado final somente se todas as validações passarem
    if (validarData(dia, mes, ano)) {
      var diferenca = Date.now() - new Date(ano, mes - 1, dia).getTime();
      var idade = new Date(diferenca);

      var anos = idade.getUTCFullYear() - 1970;
      var meses = idade.getUTCMonth();
      var dias = idade.getUTCDate() - 1;

      $('#years').text(anos);
      $('#months').text(meses);
      $('#days').text(dias);
    }
  });
});

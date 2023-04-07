$(function() {
  $('.error_message,.error_day,.error_month,.error_year').hide();
 
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
      if (dia === '' || mes === '' || ano === '') {
        $('.error_message').show();
        return false;
      } else {
        $('.error_message').hide();
      }

      // Verifica se o ano, mês e dia são válidos
      if (ano > anoAtual || ano < 1 || (ano == anoAtual && mes > mesAtual) || (ano == anoAtual && mes == mesAtual && dia > diaAtual) || mes < 1 || mes > 12 || dia < 1 || dia > diasNoMes(mes, ano)) {    
        $('.error_day,.error_month,.error_year').show();
        return false;
      } else {
        $('.error_day,.error_month,.error_year').hide();
      }

      // Verifica se a data é inválida
      var data = new Date(ano, mes - 1, dia);
      if (data.getFullYear() != ano || data.getMonth() + 1 != mes || data.getDate() != dia) {
        $('.error_day,.error_month,.error_year').show();
        return false;
      } else {
        $('.error_day,.error_month,.error_year').hide();
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

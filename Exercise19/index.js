$(function() {
  var anoAtual = new Date().getFullYear(); // adicionando a variável anoAtual

  $('#calcular').click(function() {
    var dia = $('#dia').val();
    var mes = $('#mes').val();
    var ano = $('#ano').val();

    // Verifica se os campos estão preenchidos
    if (dia === '' || mes === '' || ano === '') {
      alert('Por favor, preencha todos os campos!');
      return;
    }

    // Verifica se o ano, mês e dia são válidos
    var dataAtual = new Date();
    var diaAtual = dataAtual.getDate();
    var mesAtual = dataAtual.getMonth() + 1;
    
    if (ano > anoAtual || ano < 1 || (ano == anoAtual && mes > mesAtual) || (ano == anoAtual && mes == mesAtual && dia > diaAtual) || mes < 1 || mes > 12 || dia < 1 || dia > diasNoMes(mes, ano)) {    
      alert('Por favor, insira uma data válida!');
      return;
    }
    
    

    function diasNoMes(mes, ano) {
      if (mes == 2) {
        if (ano % 4 == 0 && (ano % 100 != 0 || ano % 400 == 0)) {
          return 29;
        } else {
          return 28;
        }
      } else if ([4, 6, 9, 11].includes(mes)) {
        return 30;
      } else {
        return 31;
      }
    }

    // Verifica se a data é inválida
    var data = new Date(ano, mes - 1, dia);
    if (data.getFullYear() != ano || data.getMonth() + 1 != mes || data.getDate() != dia) {
      alert('Data inválida!');
      return;
    }

    var diferenca = Date.now() - data.getTime();
    var idade = new Date(diferenca);

    var anos = idade.getUTCFullYear() - 1970;
    var meses = idade.getUTCMonth();
    var dias = idade.getUTCDate() - 1;

    var resultado = 'Sua idade é: ' + anos + ' anos, ' + meses + ' meses e ' + dias + ' dias.';
    $('#resultado').text(resultado);
  });
});

$(document).ready(function() {
  const spinBtn = $('.spin-btn');
  let counter = 0; // Contador de cliques

  function spin() {
    const firstItem = $('.item:first-child');
    const itemHeight = firstItem.outerHeight(true);

    firstItem.slideUp('slow', function() {
      firstItem.appendTo('.roulette'); // Move o primeiro item para o final
      firstItem.css('display', 'flex'); // Define a propriedade display como flex para manter o layout

      counter++; // Incrementa o contador de cliques

      if (counter < getRandomNumber()) {
        setTimeout(spin, 1000); // Chama a função spin novamente após 1 segundo (ajuste o valor conforme necessário)
      }
    });
  }

  function getRandomNumber() {
    return Math.floor(Math.random() * 6) + 1; // Gera um número aleatório entre 1 e 6
  }

  spinBtn.on('click', function() {
    counter = 0; // Reinicia o contador de cliques
    spin(); // Chama a função spin ao clicar no botão
  });
});

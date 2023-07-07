$(document).ready(function() {
    const slider = $('.slider');
    const nextBtn = $('.next');
    let counter = 0;
  
    nextBtn.on('click', function() {
      const cardHeight = $('.slider .card').outerHeight(true);
      const randomCount = getRandomNumber(1, 10); // Define um número aleatório de vezes entre 1 e 10
    
      animateSlider(randomCount);
  
      function animateSlider(count) {
        if (counter < count) {
          const firstCard = $('.slider .card:first-child'); // Move essa linha para dentro do loop
          const scrollAmount = slider.scrollTop() + cardHeight; // Recalcula o valor de scrollAmount a cada iteração
          slider.animate({ scrollTop: scrollAmount }, 100, function() {
            firstCard.appendTo(slider); // Move o primeiro card para o final
            counter++;
            animateSlider(count); // Chama recursivamente a função animateSlider para repetir a animação
          });
        } else {
          counter = 0; // Reinicia o contador quando a animação é concluída
        }
      }
  
      function getRandomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 50)) + min;
      }
    });
  });
  
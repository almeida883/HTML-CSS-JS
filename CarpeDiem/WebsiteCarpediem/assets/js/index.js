

$(document).ready(function() {
    // Quando o botão com id "botao-toggle" for clicado
    $('#menu-toggle').click(function() {
      // Fazer o toggle do elemento com a classe "minha-classe"

      $('#menu').slideToggle();
    });
  });

  $(document).ready(function() {
    const $modalBackground = $('#modal-background');
    
    // Para abrir os modais
    $('.column, .column-3rd').click(function() {
        const clickedClass = $(this).attr('class').split(' ')[1];
        const modalClass = clickedClass.replace('-c', '');
        const $modal = $('.' + modalClass);
        
        $modal.css('opacity', '0');
        $modal.removeClass('hidden').addClass('box-container');
        
        setTimeout(() => {
            $modal.css('opacity', '1');
        }, 50);
        
        $modalBackground.addClass('active');
    });

    // Para fechar os modais
    $('.fechar').click(function(event) {
        event.stopPropagation();
        const $modal = $(this).parent();
        
        $modal.css('opacity', '0');
        
        setTimeout(() => {
            $modal.addClass('hidden').removeClass('box-container');
        }, 300);
        
        $modalBackground.removeClass('active');
    });

    //Carrocel
    let activeFeedback = 1;
    let intervalId;
    let isAnimating = false;
  
    // Inicializa o primeiro feedback como ativo
    $('.feedback').css('left', '100%');
    $('#feedback1').css('left', '0').addClass('active');
  
    function changeFeedback(direction) {
    if (isAnimating) {
        return;
    }
    
    isAnimating = true;

      // Remove a classe 'active' do feedback atual e anima sua saída
      $('.feedback.active').animate({left: direction === 'right' ? '-100%' : '100%'}, 1000, function() {
        $(this).removeClass('active').css('left', '100%');
      });
  
      // Configura e anima o novo feedback ativo
      const newLeft = direction === 'right' ? '100%' : '-100%';
      $('#feedback' + activeFeedback).css('left', newLeft).addClass('active').animate  ({left: '0'}, 1000, function() {
      isAnimating = false;
      });
    }
  
    function startInterval() {
      clearInterval(intervalId);  // Limpa o intervalo existente, se houver
      
      intervalId = setInterval(function() {
        activeFeedback = activeFeedback < 4 ? activeFeedback + 1 : 1;
        changeFeedback('right');
      }, 10000); // 10 segundos
    }
    
  
    // Botão para o feedback anterior
    $('#prevBtn').click(function() {
      clearInterval(intervalId);
      activeFeedback = activeFeedback > 1 ? activeFeedback - 1 : 4;
      changeFeedback('left');
      startInterval();
    });
  
    // Botão para o próximo feedback
    $('#nextBtn').click(function() {
      clearInterval(intervalId);
      activeFeedback = activeFeedback < 4 ? activeFeedback + 1 : 1;
      changeFeedback('right');
      startInterval();
    });
  
    // Pausar o temporizador ao passar o mouse sobre o carrossel
    $('.carousel').hover(function() {
      clearInterval(intervalId);
    }, function() {
      startInterval();
    });
  
    // Inicia o intervalo pela primeira vez
    startInterval();


    //
    $('html, body').animate({
        scrollTop: $(".box-container").offset().top
    }, 1000);





});




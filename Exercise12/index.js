var totalBackgroundNotifications = 3; // define o número total de elementos que podem ter a classe "background_color_notification"

$('.box_01, .box_02, .box_03').click(function() {
  var $this = $(this); // armazena o objeto jQuery do elemento clicado em uma variável
  $('.red_point', $this).hide(); // procura por elementos com a classe "red_point" dentro do elemento clicado e os esconde
  $this.removeClass('background_color_notification'); // remove a classe "background_color_notification" do elemento clicado
  
  // atualiza o contador de notificações de fundo invertido
  var notificationsCount = totalBackgroundNotifications - $('.box_01.background_color_notification, .box_02.background_color_notification, .box_03.background_color_notification').length;
  var invertedCount = totalBackgroundNotifications - notificationsCount;
  $('#notifications-counter').text(invertedCount); // atualiza o conteúdo do elemento com o novo número de notificações invertido
});

$('#mark_as_read').click(function() {
  $('.red_point').hide();
  $('.box_01, .box_02, .box_03').removeClass('background_color_notification');

  // atualiza o contador de notificações de fundo invertido
  var notificationsCount = totalBackgroundNotifications - $('.box_01.background_color_notification, .box_02.background_color_notification, .box_03.background_color_notification').length;
  var invertedCount = totalBackgroundNotifications - notificationsCount;
  $('#notifications-counter').text(invertedCount); // atualiza o conteúdo do elemento com o novo número de notificações invertido
});

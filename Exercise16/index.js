
$('.background-overlay').hide();
$('.selection_modal_start').hide();
$('.success_modal_start').hide();
$('.icon-close-menu').hide();
$('.when_checkbox_active').hide();

$('.icon-hamburger').click(function() {
  $('ul').toggle();
  $('.background-overlay').toggle();
  $('.icon-close-menu').toggle();
  $('.icon-hamburger').hide();
});


$('li a').click(function() {
  if ($(window).width() <= 991) {
     $('ul').toggle();
     $('.background-overlay').toggle();
     $('.icon-close-menu').toggle();
     $('.icon-hamburger').toggle();
  }
 });

$('.back_this_project ,.button_to_selection_01, .button_to_selection_02').click(function() {
  $('.selection_modal_start').toggle();
  $('.background-overlay').toggle();

  if ($(this).hasClass('button_to_selection_01')) {
    $('#active_01').prop('checked', true);
    $('.s_m_s_container_03').addClass('border_color_cyan');
    $('.s_m_s_container_03 .when_checkbox_active').show();
  }

  if ($(this).hasClass('button_to_selection_02')) {
    $('#active_02').prop('checked', true);
    $('.s_m_s_container_04').addClass('border_color_cyan');
    $('.s_m_s_container_04 .when_checkbox_active').show();
  }

});

$('.button_to_thanks').click(function() {
  $('.selection_modal_start').toggle();
  $('.success_modal_start').toggle();
  $('.my-checkbox:checked').prop('checked', false);
  $('.when_checkbox_active').hide();
  $('.s_m_s_container_02').removeClass('border_color_cyan');
  $('.s_m_s_container_03').removeClass('border_color_cyan');
  $('.s_m_s_container_04').removeClass('border_color_cyan');
});

$('.button_to_start').click(function() {
  $('.success_modal_start').toggle();
  $('.background-overlay').toggle();
});

$('input[type="checkbox"]').click(function() {
  const parent = $(this).parent();
  const parentClass = parent.attr('class');
  const whenCheckboxActive = parent.find('.when_checkbox_active');
  if (this.checked) {
    whenCheckboxActive.show();
    if (parentClass.includes('s_m_s_container_03')) {
      $('.s_m_s_container_03').addClass('border_color_cyan');
    } else if (parentClass.includes('s_m_s_container_04')) {
      $('.s_m_s_container_04').addClass('border_color_cyan');
    } else if (parentClass.includes('s_m_s_container_02')) {
      $('.s_m_s_container_02').addClass('border_color_cyan');
    }
  } else {
    whenCheckboxActive.hide();
    if (parentClass.includes('s_m_s_container_03')) {
      $('.s_m_s_container_03').removeClass('border_color_cyan');
    } else if (parentClass.includes('s_m_s_container_04')) {
      $('.s_m_s_container_04').removeClass('border_color_cyan');
    } else if (parentClass.includes('s_m_s_container_02')) {
      $('.s_m_s_container_02').removeClass('border_color_cyan');
    }
  }
});


$('.background-overlay, .icon-close-modal').click(function() {
  if($('.background-overlay:visible, .selection_modal_start:visible, .success_modal_start:visible, .icon-close-menu:visible, .when_checkbox_active:visible').length > 0) {
    $('.background-overlay').hide();
    $('.selection_modal_start').hide();
    $('.success_modal_start').hide();
    $('.icon-close-menu').hide();
    $('.when_checkbox_active').hide();
    $('.icon-hamburger').show();
    if ($(window).width() <= 991) {$('ul').hide();}
    $('.my-checkbox:checked').prop('checked', false);
    $('.s_m_s_container_02').removeClass('border_color_cyan');
    $('.s_m_s_container_03').removeClass('border_color_cyan');
    $('.s_m_s_container_04').removeClass('border_color_cyan');
  }
});

$('.box_bookmark').click(function() {
  if ($(this).hasClass('bookmark_filter')) {
    $(this).removeClass('bookmark_filter');
  } else {
    $(this).addClass('bookmark_filter');
  }
});


$('input[type="checkbox"]').click(function() {
  const parent = $(this).parent();
  const parentClass = parent.attr('class');
  const whenCheckboxActive = parent.find('.when_checkbox_active');
  if (this.checked) {
    $('input[type="checkbox"].active').prop('checked', false).removeClass('active');
    $(this).addClass('active');
    whenCheckboxActive.show();
    if (parentClass.includes('s_m_s_container_03')) {
      $('.s_m_s_container_03').addClass('border_color_cyan');
      $('.s_m_s_container_04, .s_m_s_container_02').removeClass('border_color_cyan');
      $('.s_m_s_container_04 .when_checkbox_active,.s_m_s_container_02 .when_checkbox_active ').hide();

      $('.s_m_s_container_04 .my-checkbox:checked, .s_m_s_container_02 .my-checkbox:checked').prop('checked', false);

    } else if (parentClass.includes('s_m_s_container_04')) {
      $('.s_m_s_container_04').addClass('border_color_cyan');
      $('.s_m_s_container_03, .s_m_s_container_02').removeClass('border_color_cyan');
      $('.s_m_s_container_03 .when_checkbox_active,.s_m_s_container_02 .when_checkbox_active ').hide();

      $('.s_m_s_container_03 .my-checkbox:checked, .s_m_s_container_02 .my-checkbox:checked').prop('checked', false);

    } else if (parentClass.includes('s_m_s_container_02')) {
      $('.s_m_s_container_02').addClass('border_color_cyan');
      $('.s_m_s_container_03, .s_m_s_container_04').removeClass('border_color_cyan');
      $('.s_m_s_container_04 .when_checkbox_active,.s_m_s_container_03 .when_checkbox_active ').hide();
    }
  } else {
    $(this).removeClass('active');
    whenCheckboxActive.hide();
    if (parentClass.includes('s_m_s_container_03')) {
      $('.s_m_s_container_03').removeClass('border_color_cyan');
    } else if (parentClass.includes('s_m_s_container_04')) {
      $('.s_m_s_container_04').removeClass('border_color_cyan');
    } else if (parentClass.includes('s_m_s_container_02')) {
      $('.s_m_s_container_02').removeClass('border_color_cyan');
    }
  }
});


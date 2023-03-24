$(document).ready(function() {
  var pageViews = 600;
  var pricePerMonth = 16;
  var isYearlyBilling = false;

  // Update pricing based on slider value
  function updatePricing() {
    var discountFactor = isYearlyBilling ? 0.25 : 0;
    var discountedPrice = pricePerMonth * (1 - discountFactor);
    var totalPrice = Math.floor(pageViews / 100) * discountedPrice;
    $('.card-price .price').text(totalPrice.toFixed(0));
    $('.pricing-slider .page-views').text(pageViews.toLocaleString() + 'k pageviews');
  }

  // Initialize pricing based on default values
  updatePricing();
  pricePerMonth = 16 * (isYearlyBilling ? 0.75 : 1);
  var initialPrice = Math.floor(pageViews / 100) * pricePerMonth;
  $('.card-price .price').text(initialPrice.toFixed(0));

  // Update pricing when slider changes
  $('.slider-input').on('input', function() {
    pageViews = $(this).val() * 100;
    updatePricing();
  });

  // Toggle between monthly and yearly billing
  $('.switch input').on('change', function() {
    isYearlyBilling = $(this).prop('checked');
    updatePricing();
    $('.monthly-label, .yearly-label').toggleClass('active');
  });

  // Botão de ativação do plano anual
  var annualBtn = $('#annual-btn');
  var isActive = false;

  annualBtn.on('click', function() {
    if (isActive) {
      isActive = false;
      annualBtn.addClass('inactive');
      annualBtn.text('Ativar Plano Anual');
      pricePerMonth = 16;
      updatePricing();
      $('.slider-input').val(6);
    } else {
      isActive = true;
      annualBtn.removeClass('inactive');
      annualBtn.text('Desativar Plano Anual');
      pricePerMonth = 16 * 0.75;
      updatePricing();
      $('.slider-input').val(12);
    }
  });



// Adiciona a classe 'switch-label' ao elemento 'label' da checkbox
$('.switch input ,.switch-label ').each(function() {
  $(this).wrap('<label class="switch-label"></label>');
});

// Adiciona o elemento da bola ao final do 'label'
$('.switch-label').append('<span class="switch-ball"></span>');

// Altera a classe do 'label' quando a checkbox é clicada
$('.switch-label').on('click', function() {
  $(this).toggleClass('switch-label-checked');
});




});

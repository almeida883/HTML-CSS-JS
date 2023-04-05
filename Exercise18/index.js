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
    $('.pricing-slider .page-views').text(pageViews.toLocaleString() + 'K PAGEVIEWS');
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

  $('.switch-input').on('change', function() {
    if ($(this).is(':checked')) {
      $('.switch-ball').addClass('switch-ball-after');
      $('.switch').addClass('switch-after');
    } else {
      $('.switch-ball').removeClass('switch-ball-after');
      $('.switch').removeClass('switch-after');
    }
  });
  

  $('#rangeInput_01,#rangeInput_02').on('input', function() {
    updateRangeInput($(this).val());
  });
  
  function updateRangeInput(value) {
    var percent = value * 7.8 + '%';
    var gradient = 'linear-gradient(90deg, var(--Soft_Cyan) ' + percent + ', #ddd ' + percent + ')';
    $('#rangeInput_01,#rangeInput_02').css('background', gradient);
  }
  
  
});

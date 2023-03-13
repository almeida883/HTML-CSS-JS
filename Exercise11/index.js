$(function() {
  $('#tipCustom').hide();

  $('input[name="tip"]').change(function() {
      if ($(this).val() === 'custom') {
          $('#customTip').show();
      } else {
          $('#customTip').hide();
      }
      calculate();
  });

  $('#bill, #people').keyup(function() {
      calculate();
  });

  $('#customTip').keyup(function() {
      calculate();
  });

  $('form').on('reset', function() {
      $('#customTip').hide();
      $('#tip5').prop('checked', true);
      $('#bill, #people').val('');
      $('#tipAmount, #totalAmount').text('');
  });

  function calculate() {
      var bill = parseFloat($('#bill').val());
      var tipPercent;
      if ($('input[name="tip"]:checked').val() === 'custom') {
          tipPercent = parseFloat($('#customTip').val()) / 100;
      } else {
          tipPercent = parseFloat($('input[name="tip"]:checked').val());
      }
      var numPeople = parseInt($('#people').val());

      var tipAmount = (bill * tipPercent) / numPeople;
      var totalAmount = ((bill + (bill * tipPercent)) / numPeople);

      $('#tipAmount').text('$' + tipAmount.toFixed(2));
      $('#totalAmount').text('$' + totalAmount.toFixed(2));
  }
});

$(document).ready(function() {
  $.getJSON('data.json', function(data) {
    var chart = '';
    $.each(data, function(key, value) {
      chart += '<li class="bar" data-amount="' + value.amount + '">';
      chart += '<span class="bar-label">' + value.day + '</span>';
      chart += '</li>';
    });
    $('.chart-bars').append(chart);

    var max = 0;
    $('.bar').each(function() {
      var amount = $(this).data('amount');
      if (amount > max) {
        max = amount;
      }
    });

    $('.bar').each(function() {
      var amount = $(this).data('amount');
      var height = (amount / max) * 100 + '%';
      $(this).css('height', height);
    });
  });

  $('.bar').hover(function() {
    var amount = $(this).data('amount');
    $(this).append('<span class="bar-value">' + amount + '</span>');
  }, function() {
    $(this).find('.bar-value').remove();
  });
  

});

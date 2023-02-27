
$(".rating-button").click(function() {
  var value = $(this).data("value");
  var message = "You selected " + value + " out of 5";
  $("#result").text(message);
});

$("#submit-button").click(function() {
  var value = $(".rating-button.active").data("value");
  $("#container_02").show();
  $("#container_01").hide();
});

$('.rating-button').click(function() {
  $('.rating-button').removeClass('rating-button-click');
  $(this).addClass('rating-button-click');
});


$.getJSON("data.json", function(data) {

  $("#work-daily").text(data[0].timeframes.daily.current+"hrs");
  $("#work-daily-pre").text(data[0].timeframes.daily.previous+"hrs");
  $("#work-weekly").text(data[0].timeframes.weekly.current+"hrs");
  $("#work-weekly-pre").text(data[0].timeframes.weekly.previous+"hrs");
  $("#work-monthly").text(data[0].timeframes.monthly.current+"hrs");
  $("#work-monthly-pre").text(data[0].timeframes.monthly.previous+"hrs");

  $("#play-daily").text(data[1].timeframes.daily.current+"hrs");
  $("#play-daily-pre").text(data[1].timeframes.daily.previous+"hrs");
  $("#play-weekly").text(data[1].timeframes.weekly.current+"hrs");
  $("#play-weekly-pre").text(data[1].timeframes.weekly.previous+"hrs");
  $("#play-monthly").text(data[1].timeframes.monthly.current+"hrs");
  $("#play-monthly-pre").text(data[1].timeframes.monthly.previous+"hrs");

  $("#study-daily").text(data[2].timeframes.daily.current+"hrs");
  $("#study-daily-pre").text(data[2].timeframes.daily.previous+"hrs");
  $("#study-weekly").text(data[2].timeframes.weekly.current+"hrs");
  $("#study-weekly-pre").text(data[2].timeframes.weekly.previous+"hrs");
  $("#study-monthly").text(data[2].timeframes.monthly.current+"hrs");
  $("#study-monthly-pre").text(data[2].timeframes.monthly.previous+"hrs");

  $("#exercise-daily").text(data[3].timeframes.daily.current+"hrs");
  $("#exercise-daily-pre").text(data[3].timeframes.daily.previous+"hrs");
  $("#exercise-weekly").text(data[3].timeframes.weekly.current+"hrs");
  $("#exercise-weekly-pre").text(data[3].timeframes.weekly.previous+"hrs");
  $("#exercise-monthly").text(data[3].timeframes.monthly.current+"hrs");
  $("#exercise-monthly-pre").text(data[3].timeframes.monthly.previous+"hrs");

  $("#social-daily").text(data[4].timeframes.daily.current+"hrs");
  $("#social-daily-pre").text(data[4].timeframes.daily.previous+"hrs");
  $("#social-weekly").text(data[4].timeframes.weekly.current+"hrs");
  $("#social-weekly-pre").text(data[4].timeframes.weekly.previous+"hrs");
  $("#social-monthly").text(data[4].timeframes.monthly.current+"hrs");
  $("#social-monthly-pre").text(data[4].timeframes.monthly.previous+"hrs");

  $("#self_care-daily").text(data[5].timeframes.daily.current+"hrs");
  $("#self_care-daily-pre").text(data[5].timeframes.daily.previous+"hrs");
  $("#self_care-weekly").text(data[5].timeframes.weekly.current+"hrs");
  $("#self_care-weekly-pre").text(data[5].timeframes.weekly.previous+"hrs");
  $("#self_care-monthly").text(data[5].timeframes.monthly.current+"hrs");
  $("#self_care-monthly-pre").text(data[5].timeframes.monthly.previous+"hrs");

}).fail(function() {
  console.error("Ocorreu um erro ao recuperar o arquivo JSON.");
});

// Oculta os id's
$(".daily_info, .monthly_info").hide();
$("#weekly").addClass('change_color');


// Ao clicar mostra um id e oculta os outros dois
$("#daily").click(function() {
  $(".daily_info").show();
  $(".weekly_info, .monthly_info").hide();
  $("#daily").addClass('change_color');
  $("#weekly, #monthly").removeClass('change_color');
});

$("#weekly").click(function() {
  $(".weekly_info").show();
  $(".daily_info, .monthly_info").hide();
  $("#weekly").addClass('change_color');
  $("#daily, #monthly").removeClass('change_color');
});

$("#monthly").click(function() {
  $(".monthly_info").show();
  $(".daily_info, .weekly_info").hide();
  $("#monthly").addClass('change_color');
  $("#daily, #weekly").removeClass('change_color');
});


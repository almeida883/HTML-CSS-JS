$(document).ready(function(){

  $(".price_annually").hide();

  $(".toggle-button").click(function(){
    $("body").toggleClass("annually");
    $(".price_annually").toggle();
    $(".price_monthly").toggle();
  });
});
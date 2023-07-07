$(document).ready(function () {
  const slider = $(".slider");
  const nextBtn = $(".next");
  let counter = 0;

  nextBtn.on("click", function () {
    const cardHeight = $(".slider .card").outerHeight(true);

    animateSlider(30, 100);

    function animateSlider(iterations, speed) {
      if (counter < iterations) {
        const firstCard = $(".slider .card:first-child");
        const scrollAmount = slider.scrollTop() + cardHeight;
        slider.animate({ scrollTop: scrollAmount }, speed, function () {
          firstCard.appendTo(slider);
          counter++;
          animateSlider(iterations, speed);
        });
      } else {
        counter = 0;
        getRandomNumber(1, 10, 300);
      }
    }

    function animateSlider2(iterations, speed) {
      if (counter < iterations) {
        const firstCard = $(".slider .card:first-child");
        const scrollAmount = slider.scrollTop() + cardHeight;
        speed = speed * 1.1;
        slider.animate({ scrollTop: scrollAmount }, speed, function () {
          firstCard.appendTo(slider);
          counter++;
          animateSlider2(iterations, speed);
        });
      } else {
        counter = 0;
      }
    }

    function getRandomNumber(min, max, speed) {
      const randomCount = Math.floor(Math.random() * (max - min)) + min;
      animateSlider2(randomCount, speed);
    }
    saveChangesToLocalStorage();
  });

  $("#cardForm").on("submit", function (e) {
    var lastCardNumber = $("#cardForm_Box .cardForm_Box").length;

    e.preventDefault();

    for (var i = 1; i <= lastCardNumber*5; i++) {
      var cardValue = $("#card" + i).val();
      $(".card" + i).text(cardValue);
    }
    saveChangesToLocalStorage();
    $('#panel').css('display', 'none');
  });

  $("#addCard").on("click", function () {
    function getNextCardNumber() {
      var cardNumbers = [];
      var nextCardNumber = 1;

      $("#cardForm_Box .cardForm_Box").each(function() {
        var cardId = $(this).find('input').attr('id');
        var cardNumber = parseInt(cardId.replace('card', ''));
        cardNumbers.push(cardNumber);
      });

      while (cardNumbers.includes(nextCardNumber)) {
        nextCardNumber++;
      }

      return nextCardNumber;
    }
    
    var nextCardNumber = getNextCardNumber();

    var newCard = $('<div class="card card' + nextCardNumber + '">Novo Desafio</div>');

    var newForm = $(
      '<div class="cardForm_Box"><label for="card' + nextCardNumber + '"></label><input type="text" id="card' + nextCardNumber + '" name="card' + nextCardNumber + '"><button id="button_card'+ nextCardNumber +'"><i class="fa-solid fa-xmark"></i></button></div>'
    );

    $(".slider").append(newCard);
    $("#cardForm_Box").append(newForm);

    newForm.on("submit", function (e) {
      e.preventDefault();
      var newCardValue = $(this).find("input").val();
      newCard.text(newCardValue);
      saveChangesToLocalStorage(); // Salvar as alterações no LocalStorage após atualizar o texto do novo card
    });
    saveChangesToLocalStorage();
  });

  $("#cardForm").on("click", ".cardForm_Box button", function() {
    var buttonId = $(this).attr('id');
    var cardId = buttonId.replace('button_', '');

    $(this).closest('.cardForm_Box').remove();
    $('.slider .card.' + cardId).remove();
    saveChangesToLocalStorage();
  });

  $("#reset").click(function() {
    $('.simNaoBox_reset').css('display', 'flex');
  });

  $("#sim_reset").click(function() {
    $('.simNaoBox_reset').css('display', 'none');
    $('#panel').css('display', 'none');
    localStorage.clear();
    location.reload();
  });

  $("#nao_reset").click(function() {
    $('.simNaoBox_reset').css('display', 'none');
  });

  $("#icon_config").click(function() {
    $('#panel').css('display', 'flex');
  });

  //Definie a cor de par ou impar

  
   
    

  function saveChangesToLocalStorage() {
    var formData = {};
    $("#cardForm input").each(function () {
      var cardId = $(this).attr("id");
      var cardValue = $(this).val();
      formData[cardId] = cardValue;
    });
  
    var formState = [];
    $("#cardForm_Box .cardForm_Box").each(function () {
      var formId = $(this).find("input").attr("id");
      formState.push(formId);
    });
  
    var sliderContent = [];
    $(".slider .card").each(function () {
      var cardText = $(this).text();
      var cardNumber = $(this).attr("class").match(/card(\d+)/)[1];
      var cardElement = { text: cardText, number: cardNumber };
      sliderContent.push(cardElement);
    });
    
    localStorage.setItem("sliderContent", JSON.stringify(sliderContent));
    
  
    localStorage.setItem("formData", JSON.stringify(formData));
    localStorage.setItem("formState", JSON.stringify(formState));
    localStorage.setItem("sliderContent", JSON.stringify(sliderContent));
  }
  
  function restoreChangesFromLocalStorage() {
    if (localStorage.getItem("formData") && localStorage.getItem("formState") && localStorage.getItem("sliderContent")) {
      var formData = JSON.parse(localStorage.getItem("formData"));
      var formState = JSON.parse(localStorage.getItem("formState"));
      var sliderContent = JSON.parse(localStorage.getItem("sliderContent"));
  
      // Remover formulários existentes
      $("#cardForm_Box").empty();
      $(".slider").empty();
  
      for (var cardId in formData) {
        $("#" + cardId).val(formData[cardId]);
        var cardNumber = cardId.replace("card", ""); // Obter o número do card
        var cardLabel = "Card " + cardNumber + ":"; // Construir o rótulo do card
        $(".card." + cardId).text(cardLabel);
      }
  
      for (var i = 0; i < formState.length; i++) {
        var formId = formState[i];
        var formValue = formData[formId];
        var cardNumber = formId.replace("card", ""); // Obter o número do card
        var cardLabel = "Card " + cardNumber + ":"; // Construir o rótulo do card
        // Recriar os formulários com base nas informações salvas
        var newForm = $(
          '<div class="cardForm_Box"><label for="' + formId + '">' + cardLabel + '</label><input type="text" id="' + formId + '" name="' + formId + '" value="' + formValue + '"><button id="button_' + formId + '"><i class="fa-solid fa-xmark"></i></button></div>'
        );
        $("#cardForm_Box").append(newForm);
      }
  
      // Imprimir os números na ordem original
      for (var j = 0; j < sliderContent.length; j++) {
        var cardText = sliderContent[j].text;
        var cardNumber = sliderContent[j].number;
        var newCard = $('<div class="card card' + cardNumber + '">' + cardText + '</div>');
        $(".slider").append(newCard);
      }
      

    }
  }

  restoreChangesFromLocalStorage();

});

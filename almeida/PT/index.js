
//ScrollReveal

ScrollReveal().reveal('header img', {
  duration: 1000, 
  origin: 'bottom',
  distance: '10px',
  delay: 200,
  reset: true,
});

ScrollReveal().reveal('header h1', {
  duration: 1000, 
  origin: 'bottom',
  distance: '10px',
  delay: 200,
  reset: true,
});

ScrollReveal().reveal('.main_container_01', {
  duration: 1000, 
  origin: 'bottom',
  distance: '10px',
  delay: 200,
  reset: true,
});

ScrollReveal().reveal('.realized_works', {
  duration: 1000, 
  origin: 'bottom',
  distance: '10px',
  delay: 200,
  reset: true,
});

ScrollReveal().reveal('form', {
  duration: 1000, 
  origin: 'bottom',
  distance: '10px',
  delay: 200,
  reset: true,
});

//Switch Language

function toggleDropdown() {
  var dropdown = document.getElementById("language-dropdown");
  dropdown.classList.toggle("open");
}

function changeLanguage(language) {
  // Aqui você pode adicionar o código para alterar o idioma da sua aplicação
  console.log("Idioma alterado para:", language);
}


//Text Effect
const text = "Bem-vindo ao meu site! Aqui você encontrará um showcase de todos os meus conhecimentos em diversas linguagens de programação. Explore os trabalhos realizados e descubra soluções criativas e inovadoras que eu desenvolvi. Fique à vontade para entrar em contato através do formulário abaixo, conectar-se no LinkedIn ou explorar os meus projetos no GitHub. Vamos juntos transformar ideias em realidade digital!"; 

let index = 0;

function typeWriter() {
  const typedText = document.getElementById("typed-text");
  typedText.textContent += text[index];
  index++;
  if (index < text.length) {
    setTimeout(typeWriter, 50);
  } else {
    typedText.classList.add("anim_blink");
  }
}

window.addEventListener("DOMContentLoaded", typeWriter);


//Matrix
const canvas = document.getElementById('matrix');
const context = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const nums = '0123456789';
const alphabet = nums;

const fontSize = 16;
const columns = canvas.width / fontSize;

const rainDrops = [];

for (let x = 0; x < columns; x++) {
  rainDrops[x] = 1;
}

const draw = () => {
  context.fillStyle = 'rgba(0, 0, 0, 0.01)'; 
  context.fillRect(0, 0, canvas.width, canvas.height);

  context.fillStyle = '#fff'; 
  context.font = fontSize + 'px monospace';

  for (let i = 0; i < rainDrops.length; i++) {
    const text = alphabet.charAt(Math.floor(Math.random() * alphabet.length));
    context.fillText(text, i * fontSize, rainDrops[i] * fontSize);

    if (rainDrops[i] * fontSize > canvas.height && Math.random() > 0.975) {
      rainDrops[i] = 0;
    }
    rainDrops[i]++;
  }
};

setInterval(draw, 30);



const meuBotao = document.querySelector(".form_button");
const letterImage = document.querySelector(".letter-image");

meuBotao.addEventListener("mouseover", function() {
  letterImage.classList.add("hovered");
});

meuBotao.addEventListener("mouseout", function() {
  letterImage.classList.remove("hovered");
});

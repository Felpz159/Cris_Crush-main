const slides = document.querySelectorAll('.slide');
const intervalTime = 5000;
let slideInterval;

const nextSlide = () => {
  // Encontrar a classe .active
  const active = document.querySelector('.active');
  // Remover a classe .active
  active.classList.remove('active');
  // Verificar se o slide atual é o último
  if (active.nextElementSibling) {
    // Adicionar a classe .active ao próximo slide
    active.nextElementSibling.classList.add('active');
  } else {
    // Se for o último, voltar ao primeiro slide
    slides[0].classList.add('active');
  }
}

// Iniciar o slide automático
slideInterval = setInterval(nextSlide, intervalTime);
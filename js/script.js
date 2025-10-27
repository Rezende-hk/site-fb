// Lazy load simples
document.addEventListener('DOMContentLoaded', () => {
    const lazyImages = document.querySelectorAll('img[data-src]');
    const observer = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          const img = e.target;
          img.src = img.dataset.src;
          observer.unobserve(img);
        }
      });
    });
    lazyImages.forEach(img => observer.observe(img));
  });
  
  // WhatsApp
  function abrirWhatsApp(produto) {
    const msg = produto
      ? `Olá! Gostaria de saber mais sobre ${produto}.`
      : `Olá! Quero agendar uma visita.`;
    const link = `https://wa.me/5511999999999?text=${encodeURIComponent(msg)}`;
    window.open(link, '_blank');
  }
  
  // Carrossel
  let index = 0;
  function moverCarrossel(dir) {
    const track = document.querySelector('.carousel-track');
    const cards = document.querySelectorAll('.produto-card');
    const total = cards.length;
    const visible = Math.floor(track.offsetWidth / 240);
    index = Math.max(0, Math.min(total - visible, index + dir));
    track.style.transform = `translateX(-${index * 252}px)`;
  }
  const track = document.querySelector('.carousel-track');
const leftBtn = document.querySelector('.carousel-btn.left');
const rightBtn = document.querySelector('.carousel-btn.right');

let scrollAmount = 0;

rightBtn.addEventListener('click', () => {
  const width = track.querySelector('.carousel-item').offsetWidth + 12; // + gap
  track.scrollBy({ left: width, behavior: 'smooth' });
});

leftBtn.addEventListener('click', () => {
  const width = track.querySelector('.carousel-item').offsetWidth + 12;
  track.scrollBy({ left: -width, behavior: 'smooth' });
});

  
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
    const link = `https://wa.me/5519999861345?text=${encodeURIComponent(msg)}`;
    window.open(link, '_blank');
  }
  
  // Carrossel
  let index = 0;

  function moverCarrossel(dir) {
    const track = document.querySelector('.carousel-track');
    const cards = document.querySelectorAll('.produto-card');
    const total = cards.length;
  
    // largura do card + margem (gap)
    const style = getComputedStyle(cards[0]);
    const cardWidth = cards[0].offsetWidth + parseInt(style.marginRight);
  
    // quantos cards cabem na tela
    const visible = Math.floor(track.parentElement.offsetWidth / cardWidth);
  
    // atualiza índice sem passar do limite
    index = Math.max(0, Math.min(total - visible, index + dir));
  
    // move o track
    track.style.transform = `translateX(-${index * cardWidth}px)`;
  }
  

let scrollAmount = 0;

rightBtn.addEventListener('click', () => {
  const width = track.querySelector('.carousel-item').offsetWidth + 19; // + gap
  track.scrollBy({ left: width, behavior: 'smooth' });
});

leftBtn.addEventListener('click', () => {
  const width = track.querySelector('.carousel-item').offsetWidth + 15;
  track.scrollBy({ left: -width, behavior: 'smooth' });
});




function abrirProduto(pagina) {
  window.location.href = pagina;
}

  
  

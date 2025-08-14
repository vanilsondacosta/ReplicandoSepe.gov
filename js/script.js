
    const slides = document.getElementById('slides');
    const pontos = document.querySelectorAll('.ponto');
    const totalSlides = 3; 
    let indiceAtual = 0;

    function mudarSlide(indice) {
      indiceAtual = indice;
      slides.style.transition = 'transform 0.5s ease-in-out';
      slides.style.transform = `translateX(-${indice * 100}%)`;
      atualizarPontos();
    }

    function atualizarPontos() {
      pontos.forEach((ponto, index) => {
        ponto.classList.toggle('ativo', index === (indiceAtual % totalSlides));
      });
    }

    function avancarAutomatico() {
      indiceAtual++;
      slides.style.transition = 'transform 0.5s ease-in-out';
      slides.style.transform = `translateX(-${indiceAtual * 100}%)`;

      if (indiceAtual === totalSlides) {
        setTimeout(() => {
          slides.style.transition = 'none';
          slides.style.transform = `translateX(0%)`;
          indiceAtual = 0;
          atualizarPontos();
        }, 500); 
      } else {
        atualizarPontos();
      }
    }

    setInterval(avancarAutomatico, 4000); 

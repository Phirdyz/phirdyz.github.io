const slider = document.querySelectorAll('.slider');
const btnPrev = document.getElementById('prev-button');
const btnNext = document.getElementById('next-button');

let currentSlide = 0;

function hideSlider() {
  slider.forEach(item => item.classList.remove('on'))
}

function showSlider() {
  slider[currentSlide].classList.add('on')
}

function nextSlider() {
  hideSlider()
  if(currentSlide === slider.length -1) {
    currentSlide = 0
  } else {
    currentSlide++
  }
  showSlider()
}

function prevSlider() {
  hideSlider()
  if(currentSlide === 0) {
    currentSlide = slider.length -1
  } else {
    currentSlide--
  }
  showSlider()
}

function autoNextSlider() {
  setInterval(nextSlider, 6000); // 4000 milissegundos = 4 segundos
}

btnNext.addEventListener('click', nextSlider)
btnPrev.addEventListener('click', prevSlider)

autoNextSlider();


/* slide carrosel acima abaixo header view */

let lastScrollTop = 0;
const header = document.getElementById("myHeader");
let headerHeight = header.offsetHeight;

window.addEventListener("scroll", function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
        // Scroll para baixo
        header.style.top = `-${headerHeight}%`; // Oculta o header
    } else {
        // Scroll para cima
        header.style.top = "0"; // Mostra o header
    }

    lastScrollTop = scrollTop;
});




let lastScrollTop = 0;
const header = document.getElementById("myHeader");
let headerHeight = header.offsetHeight;

window.addEventListener("scroll", function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
        // Scroll para baixo
        header.style.top = `-${headerHeight}px`; // Oculta o header
    } else {
        // Scroll para cima
        header.style.top = "0"; // Mostra o header
    }

    lastScrollTop = scrollTop;
});

function enviarFormulario(event) {
    event.preventDefault();
    alert("Mensagem enviada com sucesso! (Exemplo de JS puro)");
}

let slideIndex = 0;
const slides = document.querySelector(".carousel-slide");
const dots = document.querySelectorAll(".dot");

function showSlide(index) {
    if (index >= dots.length) slideIndex = 0;
    if (index < 0) slideIndex = dots.length - 1;

    slides.style.transform = `translateX(${-slideIndex * 100}%)`;

    dots.forEach(dot => dot.classList.remove("active"));
    dots[slideIndex].classList.add("active");
}

document.querySelector(".next").addEventListener("click", () => {
    slideIndex++;
    showSlide(slideIndex);
});

document.querySelector(".prev").addEventListener("click", () => {
    slideIndex--;
    showSlide(slideIndex);
});

dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
        slideIndex = index;
        showSlide(slideIndex);
    });
});

// AUTO SLIDE
setInterval(() => {
    slideIndex++;
    showSlide(slideIndex);
}, 5000); // troca a cada 5s

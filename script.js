// ================================
// CARROSSEL (só ativa se existir)
// ================================

let slideIndex = 0;

const slideContainer = document.querySelector(".carousel-slide");
const slideImages = document.querySelectorAll(".carousel-slide img");
const dots = document.querySelectorAll(".dot");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

if (slideContainer && slideImages.length > 0) {

    const totalSlides = slideImages.length;

    function showSlide(index) {
        slideIndex = (index + totalSlides) % totalSlides;
        slideContainer.style.transform = `translateX(${-slideIndex * 100}%)`;

        dots.forEach(dot => dot.classList.remove("active"));
        if (dots[slideIndex]) dots[slideIndex].classList.add("active");
    }

    if (nextBtn) nextBtn.addEventListener("click", () => showSlide(slideIndex + 1));
    if (prevBtn) prevBtn.addEventListener("click", () => showSlide(slideIndex - 1));

    dots.forEach((dot, index) => {
        dot.addEventListener("click", () => showSlide(index));
    });

    // AUTO-SLIDE
    setInterval(() => {
        showSlide(slideIndex + 1);
    }, 7000);
}


// ================================
// MENU MOBILE — FUNCIONA EM TODAS AS PÁGINAS
// ================================

const menuBtn = document.getElementById("menuBtn");
const navUl = document.querySelector("nav ul");

if (menuBtn && navUl) {
    menuBtn.addEventListener("click", () => {
        navUl.classList.toggle("open");
        menuBtn.classList.toggle("active");
    });
}

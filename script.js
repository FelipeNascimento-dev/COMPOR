let slideIndex = 0;

const slideContainer = document.querySelector(".carousel-slide");
const slideImages = document.querySelectorAll(".carousel-slide img");
const dots = document.querySelectorAll(".dot");

const totalSlides = slideImages.length;

function showSlide(index) {
    slideIndex = (index + totalSlides) % totalSlides; // loop infinito correto

    slideContainer.style.transform = `translateX(${-slideIndex * 100}%)`;

    dots.forEach(dot => dot.classList.remove("active"));
    dots[slideIndex].classList.add("active");
}

document.querySelector(".next").addEventListener("click", () => {
    showSlide(slideIndex + 1);
});

document.querySelector(".prev").addEventListener("click", () => {
    showSlide(slideIndex - 1);
});

dots.forEach((dot, index) => {
    dot.addEventListener("click", () => showSlide(index));
});

// AUTO-SLIDE
setInterval(() => {
    showSlide(slideIndex + 1);
}, 7000);

const menuBtn = document.getElementById("menuBtn");
const navUl = document.querySelector("nav ul");

menuBtn.addEventListener("click", () => {
    navUl.classList.toggle("open");
});
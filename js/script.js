document.addEventListener("DOMContentLoaded", () => {
    console.log("Página cargada correctamente");
});
// script.js
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenu = document.getElementById('mobile-menu');
    const navList = document.querySelector('.nav-list');

    mobileMenu.addEventListener('click', function() {
        navList.classList.toggle('active');
    });
});

let currentSlide = 0;
const slideInterval = 3000; // Intervalo de tiempo en milisegundos

function showSlide(index) {
    const slides = document.querySelectorAll('.carousel-images .producto');
    const totalSlides = slides.length;

    // Asegúrate de que el índice esté dentro de los límites
    if (index >= totalSlides) {
        currentSlide = 0; // Volver al primer slide
    } else if (index < 0) {
        currentSlide = totalSlides - 1; // Ir al último slide
    } else {
        currentSlide = index;
    }

    // Mover el carrusel
    const offset = -currentSlide * 50; // Calcular el desplazamiento
    document.querySelector('.carousel-images').style.transform = `translateX(${offset}%)`;
}

// Cambiar de imagen cada 3 segundos
setInterval(() => {
    showSlide(currentSlide + 1);
}, slideInterval);

// Mostrar el primer slide al cargar
document.addEventListener('DOMContentLoaded', () => {
    showSlide(currentSlide);
});
// Script para manejar el menú de hamburguesa
document.getElementById('menu-toggle').addEventListener('click', function() {
    const navLinks = document.getElementById('nav-links');
    navLinks.classList.toggle('active'); // Alternar la clase 'active' para mostrar/ocultar el menú
});
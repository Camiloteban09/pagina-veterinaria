// Validación del formulario de contacto
document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('#contacto form');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        let isValid = true;
        const inputs = form.querySelectorAll('input, textarea');
        inputs.forEach(input => {
            if (!input.value) {
                isValid = false;
                input.style.borderColor = 'red';
            } else {
                input.style.borderColor = '';
            }
        });

        // Validar formato de correo electrónico
        const emailInput = document.querySelector('#correo');
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (emailInput.value && !emailPattern.test(emailInput.value)) {
            isValid = false;
            emailInput.style.borderColor = 'red';
            alert('Por favor, ingresa un correo electrónico válido.');
        }

        if (isValid) {
            alert('Formulario enviado correctamente');
            form.submit();
        } else {
            alert('Por favor, completa todos los campos requeridos');
        }
    });
});

// Botón de "Subir"
window.addEventListener('scroll', function() {
    const scrollButton = document.querySelector('.scroll-to-top');
    if (window.pageYOffset > 300) {
        scrollButton.classList.add('visible');
    } else {
        scrollButton.classList.remove('visible');
    }
});

document.querySelector('.scroll-to-top').addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Carrusel de Imágenes en "Nosotros"
const carousel = document.querySelector('.carousel');
const items = document.querySelectorAll('.carousel-item');
const prevButton = document.querySelector('.carousel-button.prev');
const nextButton = document.querySelector('.carousel-button.next');
let currentIndex = 0;

function updateCarousel() {
    items.forEach((item, index) => {
        item.classList.toggle('active', index === currentIndex);
    });
}

prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex === 0) ? items.length - 1 : currentIndex - 1;
    updateCarousel();
});

nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex === items.length - 1) ? 0 : currentIndex + 1;
    updateCarousel();
});

updateCarousel();

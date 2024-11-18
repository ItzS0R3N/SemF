const slides = document.querySelectorAll('.slide');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

let currentSlide = 0;

function updateSlide() {
    slides.forEach((slide, index) => {
        slide.classList.toggle('active', index === currentSlide);
    });

    // Buttons aktivieren/deaktivieren
    prevButton.disabled = currentSlide === 0;
    nextButton.disabled = currentSlide === slides.length - 1;
}

prevButton.addEventListener('click', () => {
    if (currentSlide > 0) {
        currentSlide--;
        updateSlide();
    }
});

nextButton.addEventListener('click', () => {
    if (currentSlide < slides.length - 1) {
        currentSlide++;
        updateSlide();
    }
});

// Erste Folie anzeigen
updateSlide();

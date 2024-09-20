let currentSlide = 0;

function showSlides(slideIndex) {
    let slides = document.querySelectorAll('.profile-card');  
    if (slideIndex >= slides.length) currentSlide = 0;
    if (slideIndex < 0) currentSlide = slides.length - 1;

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    slides[currentSlide].style.display = 'flex';  
    slides[(currentSlide + 1) % slides.length].style.display = 'flex';
}

function nextSlide() {
    currentSlide++;
    showSlides(currentSlide);
}

function prevSlide() {
    currentSlide--;
    showSlides(currentSlide);
}

window.onload = function() {
    showSlides(currentSlide);
};



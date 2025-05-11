const slideshow = document.getElementById('slideshow');
    const slides = slideshow.querySelectorAll('.slide');
    const totalSlides = slides.length;

    let currentSlide = 0;

    setInterval(() => {
        currentSlide++;
        if (currentSlide >= totalSlides) {
            slideshow.style.transform = 'translateX(0)';
            currentSlide = 0;
        } else {
            slideshow.style.transform = `translateX(-${100 * currentSlide}%)`;
        }
    }, 5000);
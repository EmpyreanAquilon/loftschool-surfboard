function slidesPlugin(active=0) {
    const slides = document.querySelectorAll('.slider__slide');
    slides[active].classList.add('active');
    for (const slide of slides) {
        slide.addEventListener('click', () => {
            clearActiveClasses()
            slide.classList.add('slider__slide--active')
        })
    };
    function clearActiveClasses() {
        slides.forEach(slide => slide.classList.remove('slider__slide--active'))
    }
}
slidesPlugin(1)
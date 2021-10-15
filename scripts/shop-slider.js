// const container = document.querySelector('.shop__slider')
// const item = document.querySelectorAll('.slide')
const track = document.querySelector('.shop__slider-track')
const btnNext = document.querySelector('.controls-arrow__right')
const btnPrev = document.querySelector('.controls-arrow__left')

btnNext.addEventListener('click', function() {nextSlide()})
btnPrev.addEventListener('click', function() {prevSlide()})

function nextSlide() {
    track.style.transform = "translateX(-100%)"
}
function prevSlide() {
    track.style.transform = "translateX(0%)"
}
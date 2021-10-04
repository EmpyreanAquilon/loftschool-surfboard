const btnLeft = document.querySelector('.controls-arrow__left')
const btnRight = document.querySelector('.controls-arrow__right')
const sliderTrack = document.querySelector('.shop__slider-track')
const computedStyles = window.getComputedStyle(sliderTrack)

btnRight.addEventListener('click', function() {
    let currentRight = parseInt(computedStyles.right)
    if (currentRight < 200) {
        sliderTrack.style.right = `${currentRight + 100}px`
    }
    console.log(currentRight)
})
btnLeft.addEventListener('click', function() {
    let currentRight = parseInt(computedStyles.right)
    if (currentRight > 0) {
        sliderTrack.style.right = `${currentRight - 100}px`
    }
})
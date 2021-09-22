const burger = document.querySelector('.burger');
const navMenu = document.querySelector('.site-nav');

burger.addEventListener('click', () => {
    navMenu.classList.toggle('site-nav--active')
    if (navMenu.getAttribute('class') === 'header__nav site-nav site-nav--active') {
        burger.classList.add('burger--close')
        burger.classList.remove('burger--open')
    } else {
        burger.classList.add('burger--open')
        burger.classList.remove('burger--close')
    }
})



// const points = document.querySelectorAll('.page-slider__point');
// let page = 'window'

// function offSet() {
//     return window.pageYOffset
// }

// for (point of points) {
//     point.addEventListener('click', () => pageScroll())
// }
// function pageScroll() {
//     window.scrollBy(0,1000)
//     const windowScroll = window.pageYOffset
//     console.log(windowScroll)
// }

window.addEventListener('load', function() {
    // if (document.body.classList.contains('fullscreen') && window.innerWidth > 1024) {}
        const section = document.querySelectorAll('section');
        const content = document.querySelectorAll('.main__content');
        let spin_value = 0;

        window.addEventListener('mousewheel', function(e) {
            if (e.deltaY > 0) {
                //scroll down
                spin_value += 1;
            } else {
                //scroll up
                spin_value -= 1;
            }
            console.log('afa');
            
            // scroll_content(spin_value);
        });

        // function scroll_content(count) {
        //     content.setAttribute('style', 'transform: translateY(-`+ count*100 +`vh);')
        // }
})

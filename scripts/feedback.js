const feedbacks = document.querySelector('.feedback__list');
// const feedbacks = document.querySelectorAll('.feedback-person');
const icons = document.querySelectorAll('.control-feedback__item');


for (icon of icons) {
    icon.addEventListener('click', e => {
        console.log('yeah')
        icon.classList.remove('control-feedback__item--active')
        e.target.parentElement.classList.add('control-feedback__item--active');
        console.log(e.target.parentElement)
    })
}
// icons.forEach((icon) => icon.addEventListener('click', () => console.log('yeah')))

// icons.forEach(function(item){
//     item.addEventListener('click',(item) => activeIcon(item))
// })
// function activeIcon(item) {
//     item.classList.add('control-feedback__item--active');
//     console.log('ydc')
// }

// for (let icon = 0; icon < icons.length; icon++) {
//     icon.addEventListener('click', () => {
//         console.log('adad');
//     })
// }
// for (icon of icons) {
//     let index = 0;
//     icon.addEventListener('click', () => console.log('hrs'));
//     index++;
//     console.log(index);
    
// }


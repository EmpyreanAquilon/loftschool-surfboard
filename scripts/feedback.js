const feedbacks = document.querySelector('.feedback__list');
// const feedbacks = document.querySelectorAll('.feedback-person');
const icons = document.querySelectorAll('.control-feedback__item');


// for (item of icons) {
//     item.addEventListener('click',console.log('wfgwh'))
// }

icons.forEach(function(item){
    item.addEventListener('click',(item) => activeIcon(item))
})
function activeIcon(item) {
    item.classList.toggle('control-feedback__item--active');
    console.log('ydc')
}

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


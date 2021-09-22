document.querySelectorAll('.persons__name').forEach((itemName) => 
    itemName.addEventListener('click', () => {
        const parent = itemName.parentElement;
        if (!parent.classList.contains('persons__item--active')) {
            document.querySelectorAll('.persons__item').forEach((item) => item.classList.remove('persons__item--active'))
        }

        parent.classList.toggle('persons__item--active')
    })
)


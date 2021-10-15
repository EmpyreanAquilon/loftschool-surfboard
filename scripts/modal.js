const submit = document.getElementById("submit");
const modal = document.getElementById("modal");
const btnClose = document.querySelector(".btn-close");
const overlay = document.querySelector(".modal__overlay");
// const body = document.querySelector('body');


submit.addEventListener("click", (e) => {
    e.preventDefault();
    modalOpen();
});

btnClose.addEventListener("click", (e) => {
    e.preventDefault();
    modalClose();
})

overlay.addEventListener("click", (e) => {
    modalClose();
})

function modalOpen() {
    modal.style.display = "block";
    body.style.overflow = "hidden"
};

function modalClose() {
    modal.style.display = "none";
    body.style.overflow = "auto"
}
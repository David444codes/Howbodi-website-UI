// Navbar Menu toggle
const burgerIcon = document.querySelector('#burger');
const navbarMenu = document.querySelector('.navbar-menu');

burgerIcon.addEventListener('click', () => {
    navbarMenu.classList.toggle('is-active')
});



// Modal

const assessmentBox = document.querySelector('#assessment');
const modalClose = document.querySelector('.closeModal');
const modal = document.querySelector('.modal');

assessmentBox.addEventListener('click', () => {
    modal.classList.add('is-active'); 
});

modalClose.addEventListener('click', () => {
    modal.classList.remove('is-active');
})


// Subscribe Modal
// const subscribeModal = document.querySelector('#subscribe');
// const subModalClose = document.querySelector('.close-subscribe-Modal');
// const SubModal = document.querySelector('.subscribe-modal');

// subscribeModal.addEventListener('click', () => {
//     SubModal.classList.add('is-active'); 
// });

// subModalClose.addEventListener('click', () => {
//     SubModal.classList.remove('is-active');
// })


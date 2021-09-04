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
const subscribeModal = document.querySelector('#subscribe');
const subModalClose = document.querySelector('.close-subscribe-Modal');
const SubModal = document.querySelector('.subscribe-modal');

subscribeModal.addEventListener('click', () => {
    SubModal.classList.add('is-active'); 
});

subModalClose.addEventListener('click', () => {
    SubModal.classList.remove('is-active');
})


// let button = document.getElementById('subscribe');
// let subModal = document.getElementById('subscribe-modal');
// let close = document.getElementsByClassName('modal-close')[0];

// button.onclick = function(){
//     subModal.style.display = 'block';
// }

// close.onclick = function(){
//     subModal.style.display = 'none';
// }
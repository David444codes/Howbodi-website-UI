// Navbar Menu toggle
const burgerIcon = document.querySelector('#burger');
const navbarMenu = document.querySelector('.navbar-menu');

burgerIcon.addEventListener('click', () => {
    navbarMenu.classList.toggle('is-active')
});


// Modal

  let bigModal = function(){
    const assessmentBox = document.querySelector('#assessment');
    const modalClose = document.querySelector('.closeModal');
    const modal = document.querySelector('.textmodal');

    assessmentBox.addEventListener('click', () => {
        modal.classList.add('is-active'); 
    });

    modalClose.addEventListener('click', () => {
        modal.classList.remove('is-active');
    })
  }
  let assessmentCard = document.querySelector('#assessment');
    assessmentCard.onclick = () => bigModal()








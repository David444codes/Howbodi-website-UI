// Subscribe Modal
let subModall = function() {
    const subscribeModal = document.querySelector('#subscribe');
    const subModalClose = document.querySelector('.close-subscribe-Modal');
    const SubModal = document.querySelector('#subscribe-modal');
  
    subscribeModal.addEventListener('click', () => {
        SubModal.classList.add('is-active'); 
    });
  
    subModalClose.addEventListener('click', () => {
        SubModal.classList.remove('is-active');
    })
   
  } 
  subModall();
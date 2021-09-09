//  Contact form
let contactForms = function () {
    const contactForm = document.getElementById('contact');
const fullName = document.getElementById('fullname');
const contactEmail = document.getElementById('contact_email');
const textArea = document.getElementById('textarea');

contactForm.addEventListener('submit', (e) => {
e.preventDefault();

checkedInputs();
})

function checkedInputs() {
const fullNameValue = fullName.value.trim();
const contactEmailValue = contactEmail.value.trim();
const textAreaValue = textArea.value.trim();

if (fullNameValue === '') {
    setErrorFor(fullName, 'Please input fullname')
} else {
    setSuccessFor(fullName);
}

if (contactEmailValue === '') {
    setErrorFor(contactEmail, 'Please input email')
} else {
    setSuccessFor(contactEmail);
}

if (textAreaValue === '') {
    setErrorFor(textArea, 'Please input message')
} else {
    setSuccessFor(textArea);
}
}

function setErrorFor(input, message){
const control = input.parentElement; //.control
const small = control.querySelector('small');

// Add error message inside small tag
small.innerText = message;

// add error class
control.className = 'control error';
}

function setSuccessFor(input) {
const control = input.parentElement;
control.className = 'control success';
}

}
contactForms();


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



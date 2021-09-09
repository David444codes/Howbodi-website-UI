// Login form validation
let login = function() {
    const form = document.getElementById('form');
    const email = document.getElementById('email');
    const password = document.getElementById('password');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        checkInputs();
    })

    function checkInputs() {
        // get the values from the inputs
        const emailValue = email.value.trim();
        const passwordValue = password.value.trim();

        if (emailValue === '') {
            // show error
            // add error class
            setErrorFor(email, 'email cannot be blank');
        } else {
            // add success class
            setSuccessFor(email);
        } 

        if (passwordValue === '') {
            setErrorFor(password, 'password cannot be blank')
        } else {
            // add success class
            setSuccessFor(password);
        }

    }

    function setErrorFor(input, message) {
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

    login();
}


// // Sign up validation 

let forms = document.getElementById('forms');
let email = document.getElementById('email');
let password = document.getElementById('password');
let firstName = document.getElementById('firstname');
let lastName = document.getElementById('lastname');

forms.addEventListener('submit', (e) => {
    e.preventDefault();

    checkInputs();
})

function checkInputs() {
    // get the values from the inputs
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const firstNameValue = firstName.value.trim();
    const lastNameValue = lastName.value.trim();
    
    if (firstNameValue === '') {
        setErrorFor(firstName, 'Please input first name');
    } else {
        setSuccessFor(firstName);
    }

    if (lastNameValue === '') {
        setErrorFor(lastName, 'Please input last name');
    } else {
        setSuccessFor(lastName);
    }

    if (emailValue === '') {
        // show error
        // add error class
        setErrorFor(email, 'Please input email');
    } else {
        // add success class
        setSuccessFor(email);
    } 

    if (passwordValue === '') {
        setErrorFor(password, 'Please input password')
    } else {
        // add success class
        setSuccessFor(password);
    }

}

function setErrorFor(input, message) {
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





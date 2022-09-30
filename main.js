let firstName = document.querySelector('#firstNameInput');
let lastName = document.querySelector('#lastNameInput');
let emailAdress = document.querySelector('#emailInput');
let password = document.querySelector('#passwordInput');

let firstNameError = document.querySelector('#firstNameError');
let lastNameError = document.querySelector('#lastNameError');
let emailAdressError = document.querySelector('#emailError');
let passwordError = document.querySelector('#passwordError');

let button = document.querySelector('#submit');


button.addEventListener('click', (e) => {
    e.preventDefault();
    validateEmpty(firstName.value, firstName, firstNameError, firstName.placeholder);
    validateEmpty(lastName.value, lastName, lastNameError, lastName.placeholder);
    validateEmail(emailAdress.value, emailAdress, emailAdressError, 'Looks like this is not an email');
    validateEmpty(password.value, password, passwordError, password.placeholder);
    validatePassword(password.value, password, passwordError, 'at least 8 characters');


})

const validateEmail = (valueInput, divInput, divError, nameInput) => {
    let regExp = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g
    if(regExp.test(valueInput) == true){
        divInput.style.border = '1px solid hsl(246, 25%, 77%) ';
        divError.innerHTML = ``;
    }else {
        divInput.style.border = '1px solid red';
        divError.innerHTML = `<img
        class="icon-error"
        src="./images/icon-error.svg"
        alt="Error"
        />
        <p class="error">${nameInput}</p> -->`
    }
} 

const validatePassword = (valueInput, divInput, divError, nameInput) => {
    let regExp = /^(?=.*[a-zA-Z]).{8,}$/gm
    if(regExp.test(valueInput) == true){
        divInput.style.border = '1px solid hsl(246, 25%, 77%) ';
        divError.innerHTML = ``;
    }else {
        divInput.style.border = '1px solid red';
        divError.innerHTML = `<img
        class="icon-error"
        src="./images/icon-error.svg"
        alt="Error"
        />
        <p class="error">${nameInput}</p> -->`
    }

}

const validateEmpty = (valueInput, divInput, divError, nameInput) => {
    (valueInput.length == 0 ? showError(divInput, divError, nameInput) : hideError(divInput, divError));
}

const showError = (divInput, divError, nameInput) => {
    divInput.style.border = '1px solid red';
    divError.innerHTML = `<img
    class="icon-error"
    src="./images/icon-error.svg"
    alt="Error"
    />
    <p class="error">${nameInput} cannot be empty</p> -->`
}

const hideError = (divInput, divError) => {
    divInput.style.border = '1px solid hsl(246, 25%, 77%) ';
    divError.innerHTML = ``;
}
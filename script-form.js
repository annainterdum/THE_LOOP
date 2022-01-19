'use strict';

const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
    e.preventDefault();


    const formData = new FormData (form);
    const email = formData.get("email");
    const password = formData.get("password");
    const checkbox = formData.get("checkbox");


    const isEmailValid = validateEmail(email);
    const isPasswordValid = validatePassword(password);
    const isCheckboxValid = validateCheckbox(checkbox);
     if (isEmailValid && isPasswordValid && isCheckboxValid) {
         console.log({email, password})
     }
});

function validateEmail(email) {

    function validateEmail2(email) {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }


    const emailWrapper = document.querySelector('#email-wrapper');
    const errorMsg = document.querySelector('#email-wrapper .error');

    if (!email.trim()) {
        errorMsg.textContent = 'Поле обязательно для заполнения';
        emailWrapper.classList.add("error");
        return false;
    }
    if (!validateEmail2(email)) {
        errorMsg.textContent = 'Email невалидный';
        emailWrapper.classList.add("error");
        return false;
    }

    errorMsg.textContent = '';
    emailWrapper.classList.remove("error");
    return true;

}

function validatePassword(password) {

    const passwordWrapper = document.querySelector('#password-wrapper');
    const errorMsg = document.querySelector('#password-wrapper .error');


    if (!password.trim()) {
        errorMsg.textContent = 'Поле обязательно для заполнения';
        passwordWrapper.classList.add("error");
        return false;
    }

    if (password.length < 8) {
        errorMsg.textContent = 'Пароль должен содержать как минимум 8 символов';
        passwordWrapper.classList.add("error");
        return false;
    }

    errorMsg.textContent = '';
    passwordWrapper.classList.remove("error");
    return true;
}

function validateCheckbox(checkbox) {

    const checkboxWrapper = document.querySelector('.checkbox');
    const errorMsg = document.querySelector('.checkbox .error');

    if (!checkbox) {
        errorMsg.textContent = 'Поле обязательно для заполнения';
        checkboxWrapper.classList.add("error");
        return false;
    }
    errorMsg.textContent = '';
    checkboxWrapper.classList.remove("error");
    return true;
}


































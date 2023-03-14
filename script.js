'use strict';
const form = document.getElementById('form');
const password1El = document.getElementById('password1');
const password2El = document.getElementById('password2');
const messageContainer = document.querySelector('.message-container');
const message = document.getElementById('message');

let isValid = false;
let passwordsMatch = false;

const validateForm = function () {
  isValid = form.checkValidity();

  if (!isValid) {
    message.textContent = 'Please fill out all fields';
    message.style.color = 'red';
    messageContainer.style.borderColor = 'red';
    return;
  }

  if (password1El.value === password2El.value) {
    passwordsMatch = true;
    password1El.style.borderColor = 'green';
    password2El.style.borderColor = 'green';
  } else {
    passwordsMatch = false;
    message.textContent = 'Make sure both passwords are the same';
    message.style.color = 'red';
    messageContainer.style.borderColor = 'red';
    password1El.style.borderColor = 'red';
    password2El.style.borderColor = 'red';
    return;
  }

  if (isValid && passwordsMatch) {
    message.textContent = 'Registered Successfully';
    message.style.color = 'green';
    messageContainer.style.borderColor = 'green';
  }
};

const storeData = function () {
  const user = {
    name: form.name.value,
    phone: form.phone.value,
    email: form.email.value,
    website: form.website.value,
    password: form.password.value,
  };

  console.log(user);
};

const processRegister = function (e) {
  e.preventDefault();
  validateForm();

  if (isValid && passwordsMatch) {
    storeData();
  }
};

form.addEventListener('submit', processRegister);

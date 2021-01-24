'use strict';

const inputNameRef = document.querySelector('#name-input');
const spanNameRef = document.querySelector('#name-output');

inputNameRef.addEventListener('input', () => {
  if (inputNameRef.value === '') {
    spanNameRef.textContent = 'незнакомец';
  } else {
    spanNameRef.textContent = inputNameRef.value;
  }
});

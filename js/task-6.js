'use strict';

const inputRef = document.querySelector('#validation-input');

inputRef.addEventListener('blur', () => {
  if (inputRef.value.length < 6) {
    inputRef.classList.add('invalid');
  }
  if (inputRef.value.length >= 6) {
    inputRef.classList.remove('invalid');
    inputRef.classList.add('valid');
  }
  if (inputRef.value.length === 0) {
    inputRef.classList.remove('invalid');
    inputRef.classList.remove('valid');
  }
});

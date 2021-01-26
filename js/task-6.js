'use strict';

const inputRef = document.querySelector('#validation-input');
const inputLengthRef = inputRef.getAttribute('data-length');

inputRef.addEventListener('blur', () => {
  if (
    inputRef.value.length < inputLengthRef ||
    inputRef.value.length > inputLengthRef
  ) {
    inputRef.classList.add('invalid');
  }
  if (inputRef.value.length == inputLengthRef) {
    inputRef.classList.remove('invalid');
    inputRef.classList.add('valid');
  }
  if (inputRef.value.length === 0) {
    inputRef.classList.remove('invalid');
    inputRef.classList.remove('valid');
  }
});

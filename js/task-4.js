'use strict';

const decrementRef = document.querySelector("[data-action='decrement']");
const incrementRef = document.querySelector("[data-action='increment']");
const valueRef = document.querySelector('#value');

let counterValue = 0;
const decrement = () => {
  counterValue -= 1;
  valueRef.textContent = counterValue;
};
const increment = () => {
  counterValue += 1;
  valueRef.textContent = counterValue;
};

decrementRef.addEventListener('click', decrement);
incrementRef.addEventListener('click', increment);

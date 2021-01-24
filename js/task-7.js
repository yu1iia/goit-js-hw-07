'use strict';

const rangeRef = document.querySelector('#font-size-control');
const spanRef = document.querySelector('#text');

rangeRef.addEventListener('input', () => {
  const textSize = rangeRef.value;
  spanRef.style.fontSize = `${textSize}px`;
});

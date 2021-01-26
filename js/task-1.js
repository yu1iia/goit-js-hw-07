'use strict';

const liRef = document.querySelectorAll('.item');
console.log(`В списке ${liRef.length} категории`);

const itemsRef = document.querySelectorAll('.item');
Array.prototype.forEach.call(itemsRef, element => {
  const titleRef = element.querySelector('h2').innerHTML;
  const itemsLengthRef = element.querySelectorAll('li').length;
  console.log(
    `Категория: ${titleRef}\nКоличество элементов: ${itemsLengthRef}`,
  );
});

'use strict';

const liRef = document.querySelectorAll('.item');
console.log(`В списке ${liRef.length} категории`);

const liArray = [...liRef]
  .map(
    liElem => `Категория: ${liElem.children[0].textContent}
Количество элементов: ${liElem.children[1].children.length}`,
  )
  .join('\n');

console.log(liArray);

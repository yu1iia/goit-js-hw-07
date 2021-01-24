'use strict';

const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingredientsUlRef = document.querySelector('#ingredients');

const ingredientsLiRefs = ingredients.map(text => {
  const ingredientsliRef = document.createElement('li');
  ingredientsliRef.textContent = text;
  return ingredientsliRef;
});

ingredientsUlRef.append(...ingredientsLiRefs);

const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsEl = document.querySelector('#ingredients');

const ingredientsElMarkup = ingredients
  .map((ingredient) => {
    const ingredientEl = document.createElement('li');
    ingredientEl.textContent = `${ingredient}`;
    ingredientEl.classList = 'item';
    return ingredientEl;
  });

ingredientsEl.append(...ingredientsElMarkup);
const decrementBtnEl = document.querySelector('#counter button[data-action="decrement"]');
const incrementBtnEl = document.querySelector('#counter button[data-action="increment"]');
const valueEl = document.querySelector('#value');

let counterValue = 0;

decrementBtnEl.addEventListener('click', () => {
  counterValue -= 1;
  valueEl.textContent = counterValue;
});

incrementBtnEl.addEventListener('click', () => {
  counterValue += 1;
  valueEl.textContent = counterValue;
});

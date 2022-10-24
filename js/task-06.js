const validationInputEl = document.querySelector('#validation-input');

let value = '';

validationInputEl.addEventListener('input', () => {
  value = [...event.currentTarget.value].length;
});

validationInputEl.addEventListener('blur', () => {
  if (value == validationInputEl.dataset.length) {
    validationInputEl.setAttribute('class', 'valid');
  } else {
    validationInputEl.setAttribute('class', 'invalid');
  }
});

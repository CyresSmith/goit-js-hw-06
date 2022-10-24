function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const controls = document.querySelector('#controls');
const input = controls.children[0];
const create = controls.children[1];
const destroy = controls.children[2];
const boxes = document.querySelector('#boxes');

let boxesAmount = 0;
let markup = [];
let size = 20;

function createBoxes(amount) {
  for (let i = 0; i < amount; i += 1) {
    size += 10;
    markup.push(`<div id="boxes__item" style="background-color:${getRandomHexColor()}; height: ${size}px; width: ${size}px;"></div>`)
  }
}

input.addEventListener('click', () => boxesAmount = input.value);

create.addEventListener('click', () => {
  createBoxes(boxesAmount);
  boxes.insertAdjacentHTML('afterbegin', markup.join(''));
});

destroy.addEventListener('click', () => {
  boxes.innerHTML = '';
  input.value = 0;
  boxesAmount = 0;
  markup = [];
  size = 20;
});
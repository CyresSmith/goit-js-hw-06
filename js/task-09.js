const body = document.querySelector('body')
const color = document.querySelector('.color')
const changeColorBtn = document.querySelector('.change-color')

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function changeColor() {
  body.setAttribute('style', `background-color: ${getRandomHexColor()}`);
  color.innerHTML = `${getRandomHexColor()}`;
}

changeColorBtn.addEventListener('click', changeColor)
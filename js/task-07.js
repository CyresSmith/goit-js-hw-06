const fontSizeControlInput = document.querySelector('#font-size-control');
const fontEl = document.querySelector('#text');

fontSizeControlInput.addEventListener('input', () => {
    fontEl.setAttribute('style', `font-size:${event.currentTarget.value}px;`);
});

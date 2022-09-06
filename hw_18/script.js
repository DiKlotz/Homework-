const block = document.querySelector('.block');

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

const getColor = () => `rgb(${getRandomIntInclusive(0, 255)},${getRandomIntInclusive(0, 255)},${getRandomIntInclusive(0, 255)})`;

const getMaxLeftPos = () => {
    let maxWidth = document.body.clientWidth - 100;
    return getRandomIntInclusive(0, maxWidth);
}

const getMaxTopPos = () => {
    let maxHeight = document.body.clientHeight - 100;
    return getRandomIntInclusive(0, maxHeight);
}

const colorBlock = setInterval(() => {
    block.style.background = getColor();
}, 500);

const setPosition = setInterval(() => {
    block.style.left = getMaxLeftPos() + `px`;
    block.style.top = getMaxTopPos() + `px`;
}, 1000);
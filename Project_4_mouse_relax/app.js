const board = document.querySelector('#board');
const colors = ['#5250de', '#cb50de', '#de50a5', '#5d5bc7', '#50c4de', '#db994d', '#c8db4d', '#50de99'];
const SQUARES_NUMBER = 810;

for (let i = 0; i < SQUARES_NUMBER; i++){
    const square = document.createElement('div');
    square.classList.add('square');

    square.addEventListener('mouseover', () => setColor(square));
    square.addEventListener('mouseleave', () => removeColor(square));

    board.append(square);
}

function setColor(element) {
    const color = getRandomColor();
    element.style.background = color;
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

function removeColor(element) {
element.style.backgroundColor = '#1d1d1d';
element.style.boxShadow = `0 0 2px #000`;
}

function getRandomColor() {
    const index = Math.floor(Math.random() * colors.length);
    return colors[index];
}
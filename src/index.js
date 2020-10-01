const refs = {
    startBtn: document.querySelector('button[data-action=start]'),
    stopBtn: document.querySelector('button[data-action=stop]'),
};

let intervalId = null;
let isActive = false;

const colors = [
    '#FFFFFF',
    '#2196F3',
    '#4CAF50',
    '#FF9800',
    '#009688',
    '#795548',
];

const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

refs.startBtn.addEventListener('click', changeBackground);

function changeBackground() {
    if (isActive) {
        return;
    }

    intervalId = setInterval(() => {
        document.body.style.backgroundColor =
            colors[randomIntegerFromInterval(0, 5)];
    }, 1000);
    isActive = true;
    refs.startBtn.disabled = true;
}

refs.stopBtn.addEventListener('click', () => {
    clearInterval(intervalId);
    isActive = false;
    refs.startBtn.disabled = false;
});

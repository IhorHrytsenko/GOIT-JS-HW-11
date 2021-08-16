const startB = document.querySelector('button[data-action=start]');
const stopB = document.querySelector('button[data-action=stop]');
const bodyTag = document.querySelector('body');
let timerColorId;
isRun = false;

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

function changeColor(colors = [], random){
    bodyTag.style.backgroundColor = colors[random(0, colors.length - 1)];
    console.log(bodyTag.style.backgroundColor);
}  

startB.addEventListener('click', 
() => {
    if (isRun) {return}
    timerColorId = setInterval(changeColor, 1000, colors, randomIntegerFromInterval);
    isRun = true;

    startB.disabled = true;
});

stopB.addEventListener('click', () => {
    clearInterval(timerColorId);
    isRun = false;

    startB.disabled = false;
})

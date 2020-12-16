import './styles.css';

const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];
const bodyRef = document.querySelector('body');
const startBtnRef = document.querySelector('button[data-action="start"]');
const stopBtnRef = document.querySelector('button[data-action="stop"]');
let intervalId = null;

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const changeBodyColor = () => {
  bodyRef.style.backgroundColor = colors[randomIntegerFromInterval(0, colors.length)]
}
const start = () => {
  intervalId = setInterval(changeBodyColor, 1000);
  startBtnRef.setAttribute("disabled", true);
}
const stop = () => {
  clearInterval(intervalId)
  startBtnRef.removeAttribute("disabled");
}
  startBtnRef.addEventListener('click', start);
  stopBtnRef.addEventListener('click', stop);
const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];
const ref = {
    bodyRef: document.querySelector("body"),
    btnStartRef: document.querySelector('[data-action="start"]'),
    btnStopRef: document.querySelector('[data-action="stop"]'),    
}

let changeColorID = null
ref.btnStartRef.addEventListener('click', changeColorInterval)
ref.btnStopRef.addEventListener('click', stopColorInterval)

function changeColorInterval() {
    changeColorID = setInterval(changeColor, 1000)
    ref.btnStartRef.disabled=true
}
function stopColorInterval(){
    clearInterval(changeColorID)
    ref.btnStartRef.disabled=false
}
function changeColor() {
    ref.bodyRef.style.backgroundColor = colors[randomIntegerFromInterval(0,5)]
}
const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
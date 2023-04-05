const startBtnEl = document.querySelector('[data-start]');
const stopBtnEl = document.querySelector('[data-stop]');
const bodyEl = document.body;
const { style } = bodyEl;

let timeId = null;

stopBtnEl.disabled = true;

startBtnEl.addEventListener('click', changeBGcolorOnceInSec);
stopBtnEl.addEventListener('click', stopChangeBGcolorOnceInSec);

function changeBGcolorOnceInSec() {
  startBtnEl.disabled = true;
  stopBtnEl.disabled = false;

  timeId = setInterval(() => {
    style.backgroundColor = getRandomHexColor();
  }, 1000);
}

function stopChangeBGcolorOnceInSec() {
  clearInterval(timeId);

  startBtnEl.disabled = false;
  stopBtnEl.disabled = true;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const startBtnEl = document.querySelector('button[data-start]');
const stopBtnEl = document.querySelector('button[data-stop]');
const bodyEl = document.body;
let timeId = null;

stopBtnEl.disabled = true;

startBtnEl.addEventListener('click', changeBGcolorOnceInSec);
stopBtnEl.addEventListener('click', stopChangeBGcolorOnceInSec);

function changeBGcolorOnceInSec() {
  startBtnEl.disabled = true;
  stopBtnEl.disabled = false;
  const { style } = bodyEl;

  timeId = setInterval(() => {
    style.backgroundColor = getRandomHexColor();
  }, 1000);
}

function stopChangeBGcolorOnceInSec() {
  clearInterval(timeId);
  bodyEl.removeAttribute('style');

  startBtnEl.disabled = false;
  stopBtnEl.disabled = true;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

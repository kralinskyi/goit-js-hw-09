// Описаний в документації
import flatpickr from 'flatpickr';
// Додатковий імпорт стилів
import 'flatpickr/dist/flatpickr.min.css';
// Заміна alert
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const dateInputEl = document.querySelector('#datetime-picker');
const startBtnEl = document.querySelector('[data-start]');
const dataDaysEl = document.querySelector('[data-days]');
const dataHoursEl = document.querySelector('[data-hours]');
const dataMinutesEl = document.querySelector('[data-minutes]');
const dataSecondsEl = document.querySelector('[data-seconds]');

let chosenDate = null;
let timerId = null;

const options = {
  minDate: 'today',
  altInput: true,
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    chosenDate = selectedDates[0];

    startBtnEl.disabled = false;
    startBtnEl.addEventListener('click', timerOn);
    dateInputEl.style.borderColor = 'red';
  },
};

startBtnEl.disabled = true;

flatpickr('#datetime-picker', options);

function timerOn() {
  timerId = setInterval(() => {
    startBtnEl.disabled = true;
    dateInputEl.disabled = true;
    const deltaTime = chosenDate - Date.now();

    if (deltaTime < 1000) {
      clearInterval(timerId);
      startBtnEl.removeEventListener('click', timerOn);
      dateInputEl.disabled = false;

      Notify.info('Choose another date!');
    }

    const { days, hours, minutes, seconds } = convertMs(deltaTime);

    updateClock({ days, hours, minutes, seconds });
  }, 1000);
}

function updateClock({ days, hours, minutes, seconds }) {
  dataDaysEl.textContent = days;
  dataHoursEl.textContent = hours;
  dataMinutesEl.textContent = minutes;
  dataSecondsEl.textContent = seconds;
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = addZero(Math.floor(ms / day));
  // Remaining hours
  const hours = addZero(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = addZero(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = addZero(Math.floor((((ms % day) % hour) % minute) / second));

  return { days, hours, minutes, seconds };
}

function addZero(value) {
  return String(value).padStart(2, '0');
}

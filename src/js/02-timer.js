import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

class CountdownTimer {
  constructor(selector) {
    this.dateInputEl = document.querySelector(selector);
    this.startBtnEl = document.querySelector('[data-start]');
    this.dataDaysEl = document.querySelector('[data-days]');
    this.dataHoursEl = document.querySelector('[data-hours]');
    this.dataMinutesEl = document.querySelector('[data-minutes]');
    this.dataSecondsEl = document.querySelector('[data-seconds]');

    this.chosenDate = null;
    this.timerId = null;

    this.options = {
      minDate: 'today',
      altInput: true,
      enableTime: true,
      time_24hr: true,
      defaultDate: new Date(),
      minuteIncrement: 1,
      onClose: this.onClose.bind(this),
    };

    this.startBtnEl.disabled = true;

    flatpickr(selector, this.options);
  }

  onClose(selectedDates) {
    this.chosenDate = selectedDates[0];

    this.startBtnEl.disabled = false;
    this.startBtnEl.addEventListener('click', this.timerOn.bind(this));
    this.dateInputEl.style.borderColor = 'red';
  }

  timerOn() {
    this.timerId = setInterval(() => {
      this.startBtnEl.disabled = true;
      this.dateInputEl.disabled = true;
      const deltaTime = this.chosenDate - Date.now();

      if (deltaTime < 1000) {
        clearInterval(this.timerId);
        this.startBtnEl.removeEventListener('click', this.timerOn.bind(this));
        this.dateInputEl.disabled = false;

        Notify.info('Choose another date!');
      }

      const { days, hours, minutes, seconds } = this.convertMs(deltaTime);

      this.updateClock({ days, hours, minutes, seconds });
    }, 1000);
  }

  updateClock({ days, hours, minutes, seconds }) {
    this.dataDaysEl.textContent = days;
    this.dataHoursEl.textContent = hours;
    this.dataMinutesEl.textContent = minutes;
    this.dataSecondsEl.textContent = seconds;
  }

  convertMs(ms) {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    // Remaining days
    const days = this.addZero(Math.floor(ms / day));
    // Remaining hours
    const hours = this.addZero(Math.floor((ms % day) / hour));
    // Remaining minutes
    const minutes = this.addZero(Math.floor(((ms % day) % hour) / minute));
    // Remaining seconds
    const seconds = this.addZero(
      Math.floor((((ms % day) % hour) % minute) / second)
    );

    return { days, hours, minutes, seconds };
  }

  addZero(value) {
    return String(value).padStart(2, '0');
  }
}

const timer = new CountdownTimer('#datetime-picker');

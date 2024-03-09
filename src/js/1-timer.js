import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const input = document.getElementById('datetime-picker');
const start = document.querySelector('.strt-btn');
const daysLeft = document.querySelector('[data-days]');
const hoursLeft = document.querySelector('[data-hours]');
const minutesLeft = document.querySelector('[data-minutes]');
const secondsLeft = document.querySelector('[data-seconds]');

let userSelectedDate;
start.disabled = true;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  // minDate: new Date(),

  onClose(selectedDates) {
    userSelectedDate = selectedDates[0];
    const currentDate = new Date();
    if (userSelectedDate <= currentDate) {
      iziToast.error({
        message: 'Please choose a date in the future',
      });
      start.disabled = true;
    } else {
      start.disabled = false;
    }
  },
};

flatpickr('#datetime-picker', options);

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  function addLeadingZero(value) {
    return String(value).padStart(2, '0');
  }

  // Remaining days
  const days = addLeadingZero(Math.floor(ms / day));
  // Remaining hours
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = addLeadingZero(
    Math.floor((((ms % day) % hour) % minute) / second)
  );

  return { days, hours, minutes, seconds };
}

start.addEventListener('click', () => {
  start.disabled = true;
  input.disabled = true;
  setInterval(updeteCountdown, 1000);
});

function updeteCountdown() {
  const currentDate = new Date();
  const difference = userSelectedDate - currentDate;

  if (difference <= 0) {
    daysLeft.textContent = '00';
    hoursLeft.textContent = '00';
    minutesLeft.textContent = '00';
    secondsLeft.textContent = '00';
    return;
  }

  const { days, hours, minutes, seconds } = convertMs(difference);

  daysLeft.textContent = days;
  hoursLeft.textContent = hours;
  minutesLeft.textContent = minutes;
  secondsLeft.textContent = seconds;
}

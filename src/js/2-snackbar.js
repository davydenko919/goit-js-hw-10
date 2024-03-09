import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const input = document.querySelector('.input-ms');
const fulfilledStateRadio = document.querySelector('.state-true');
const form = document.querySelector('.form');

form.addEventListener('submit', event => {
  event.preventDefault();

  const delay = input.value;
  const isSuccess = fulfilledStateRadio.checked;

  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (isSuccess) {
        resolve(delay);
      } else {
        reject(delay);
      }
    }, delay);
  });

  promise
    .then(delay => {
      iziToast.success({
        message: `✅ Fulfilled promise in ${delay}ms`,
      });
    })
    .catch(delay => {
      iziToast.error({
        message: `❌ Rejected promise in ${delay}ms`
      });
    });

  form.reset(); 
});
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const input = document.querySelector('.input-ms');
const subBtn = document.querySelector('.sub-btn');
const stateTrue = document.querySelector('.state-true');
const form = document.querySelector('.form');

subBtn.addEventListener('click', () => {
  const delay = input.value;
  const isSuccess = stateTrue.checked;

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
      iziToast.show({
        message: `✅ Fulfilled promise in ${delay}ms`,
      });
    })
    .catch(delay => {
      iziToast.show({
        message: `❌ Rejected promise in ${delay}ms`
      });
    });

  form.reset(); 
});
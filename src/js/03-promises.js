import * as Notiflix from 'notiflix';

const form = document.querySelector('.form');
const delayInput = form.elements['delay'];
const stepInput = form.elements['step'];
const amountInput = form.elements['amount'];

form.addEventListener('submit', event => {
  event.preventDefault();

  const delay = Number(delayInput.value);
  const step = Number(stepInput.value);
  const amount = Number(amountInput.value);

  if (isNaN(delay) || isNaN(step) || isNaN(amount)) {
    Notiflix.Notify.failure('Please enter valid numbers');
    return;
  }

  const promises = [];
  for (let i = 1; i <= amount; i++) {
    const position = i;
    const promiseDelay = delay + (i - 1) * step;
    const promise = createPromise(position, promiseDelay);
    promises.push(promise);
  }

  Promise.all(
    promises.map(promise => {
      return promise
        .then(result => {
          Notiflix.Notify.success(
            `✅ Fulfilled promise ${result.position} in ${result.delay}ms`
          );
          return result;
        })
        .catch(error => {
          Notiflix.Notify.failure(
            `❌ Rejected promise ${error.position} in ${error.delay}ms`
          );
          throw error;
        });
    })
  )
    .then(results => {
      console.log('All promises fulfilled', results);
    })
    .catch(error => {
      console.log('Some promises rejected', error);
    });
});

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}

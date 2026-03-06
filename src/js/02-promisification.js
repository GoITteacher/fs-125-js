/*
 * Промісифікація:
 * - Проблема доступу до результату проміса з колбеком
 * - Функція, яка повертає проміс
 */

// function createPromise(value, delay, isPositive) {
//   const promise = new Promise((res, rej) => {
//     setTimeout(() => {
//       if (isPositive) {
//         res(value);
//       } else {
//         rej(value);
//       }
//     }, delay);
//   });
//   return promise;
// }

// const p1 = createPromise('P1-OK', 1000, true);
// const p2 = createPromise('P2-ERROR', 5000, false);
// const p3 = createPromise('P3-OK', 3000, true);

// p1.then(data => {
//   console.log(data);
// }).catch(data => {
//   console.log(data);
// });

// p2.then(data => {
//   console.log(data);
// }).catch(data => {
//   console.log(data);
// });

// p3.then(data => {
//   console.log(data);
// }).catch(data => {
//   if (status === 404) {
//     return Promise.reject('Сторінка не знайдена');
//   }
// });

//!=========================================

/*
 * Промісифікація «синхронних» функцій
 * - Promise.resolve()
 * - Promise.reject()
 */

// function foo() {
//   const arr = [];
//   return Promise.resolve(arr);
// }
// console.log(foo());

//!=========================================

function createPromise(value, delay, isPositive) {
  const promise = new Promise((res, rej) => {
    setTimeout(() => {
      if (isPositive) {
        res(value);
      } else {
        rej(value);
      }
    }, delay);
  });
  return promise;
}

// const p1 = createPromise('p1', 5000, true);
// const p2 = createPromise('p2', 1000, false);
// const p3 = createPromise('p3', 4000, false);
// const p4 = createPromise('p4', 3000, true);

// const arr = [p1, p2, p3, p4];

// Promise.all(arr)
//   .then(res => {
//     console.log(res);
//   })
//   .catch(err => {
//     console.log(err);
//   });

// Promise.allSettled(arr).then(res => {
//   console.log(res);
// });

// Promise.race(arr)
//   .then(res => {
//     console.log(res);
//   })
//   .catch(err => {
//     console.log(err);
//   });

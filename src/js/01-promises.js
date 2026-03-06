/**
 * Створення та обробка промісу
 * - Клас Promise
 * - resolve🟢
 * - reject🔴
 * - ✅then, ❌catch, finally
 */

// const promise = new Promise((res, rej) => {
//   const isPositive = Math.random() > 0.5;
//   setTimeout(() => {
//     if (isPositive) {
//       console.log('Натискаю 🟢');
//       res('Ваше замовлення готове, смачного!');
//     } else {
//       console.log('Натискаю 🔴');
//       rej('Sorry');
//     }
//   }, 3000);
// });

//!=========================================
// function onFulfilled(message) {
//   console.log('✅Ням ням ням');
// }
// function onRejected(message) {
//   console.log('❌Поверніть гроші');
// }
// promise.then(onFulfilled, onRejected);
//!=========================================

// promise
//   .then(message => {
//     console.log(message);
//     console.log('✅Ням ням ням');
//   })
//   .catch(message => {
//     console.log(message);
//     console.log('❌Поверніть гроші');
//   });

//!=========================================

/**
 * Ланцюги промісів
 * - декілька послідовних then
 * - then повертає проміс
 */

// const promise = new Promise((res, rej) => {
//   rej(10);
// });

// promise.finally().then().finally(()=>{

// })

// promise
//   .then(data1 => {
//     console.log(data1);
//     return data1 * 2;
//   })
//   .then()
//   .then()
//   .then()

//!=========================================

// const arr = [];

// arr.filter().filter().filter();

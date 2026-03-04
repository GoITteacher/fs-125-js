/*
 * Метод window.setTimeout(callback, delay, args)
 */

//!=========================================

// console.log('1 start');

// setTimeout(() => {
//   console.log('2 Hello');
// }, 1000);

// console.log('3 test');

// setTimeout(() => {
//   console.log('4 Hello');
// }, 5000);

// console.log('5 end');

// for (let i = 0; i < 100000; i++) {
//   console.log('iteration');
// }

//!=========================================

//!=========================================

/*
 * Очищення таймаута за допомогою clearTimeout(timeoutId)
 */

// const timeoutId1 = setTimeout(() => {
//   console.log('Реклама1');
// }, 5000);

// const timeoutId2 = setTimeout(() => {
//   console.log('Реклама2');
// }, 5000);

// const timeoutId3 = setTimeout(() => {
//   console.log('Реклама3');
// }, 5000);

// clearTimeout(timeoutId2);

/**
 * Можливість передати параметри для колбеку
 */

//!=========================================

// function callback(x, y) {
//   console.log('x:', x);
//   console.log('y:', y);
// }

// function foo() {
//   const x = 10;
//   setTimeout(()=>{
//     callback(x, 'World')
//   }, 1000);
// }

// foo();
//!=========================================

// setTimeout(()=>{}, 5000)

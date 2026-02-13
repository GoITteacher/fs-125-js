/**
 * Подія сlick
 *
 * - addEventListener
 * - removeEventListener
 *
 * Натискаючи на кнопку "Click me" змусь
 * червоний квадратик зміщуватись на 50px по діагоналі
 */
//!=========================================
// const btnElem = document.querySelector('.js-test-btn');
// console.log(btnElem);

//!=========================================
// btnElem.addEventListener('click', () => {
//   console.log('Hello');
// });
//!=========================================

// btnElem.addEventListener('click', handleBtnClick);

// function handleBtnClick() {
//   console.log('TEST');
// }

/* 
- onBtnClick - onTargetEvent
- handleBtnClick - handleTargetEvent
- btnClickHandler - targetEventHandler
*/

//!=========================================
// const btnElem = document.querySelector('.js-test-btn');

// btnElem.addEventListener('click', () => {
//   console.log('test1');
// });

// btnElem.addEventListener('click', () => {
//   console.log('test2');
// });

// btnElem.addEventListener('click', () => {
//   console.log('test3');
// });
//!=========================================

// const btnElem = document.querySelector('.js-test-btn');

// btnElem.addEventListener('click', handleBtnClick);

// function handleBtnClick() {
//   console.log('Test');
// }

// btnElem.removeEventListener('click', handleBtnClick);
//!=========================================
// const clickMe = document.querySelector('.js-click');

// const box = document.querySelector('.js-box');

// let boxLeft = 100;
// let boxTop = 100;

// clickMe.addEventListener('click', () => {
//   boxLeft += 10;
//   boxTop += 10;

//   console.log(boxLeft, boxTop);

//   box.style.left = `${boxLeft}px`;
//   box.style.top = `${boxTop}px`;
// });

//!=========================================

// document.addEventListener('click', e => {
//   console.log(e);
// });
// window.addEventListener('keydown', e => {
//   console.log(e);
// });

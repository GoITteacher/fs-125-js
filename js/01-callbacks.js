/**
 * Функція зворотнього виклика (callback)
 *
 * - Функція як значення
 * - Колбек-функції
 * - Інлайн-колбеки
 */
//!=========================================

// function foo(callback){
//     callback()
// }

// function myDay(day, money, color, instruction1, instruction2) {
//   console.log('Прокинутись');
//   console.log('Поснідати');
//   console.log(`Зібрати рюкзак на ${day}`);
//   console.log('Піти до школи');
//   console.log('Повернутись зі школи');

//   instruction();

//   console.log('Повечеряти');
//   console.log('Відпочинок');
//   console.log('Спати');
// }

// function empty(){}
// function goToMusicSchool() {
//   console.log('Go to Music School');
// }
// function goToDanceSchool() {
//   console.log('Go to DANCE SCHOOL');
// }
// function goToMarket() {
//   console.log('Go to Market');
// }
// function goToGYM() {
//   console.log('Go to GYM');
// }
// function goToGrandma() {
//   console.log('goToGrandma');
// }

// myDay('Понеділок', goToMusicSchool,goToMusicSchool);
// myDay('Вівіторок', goToDanceSchool);
// myDay('Середу', goToMarket);
// myDay('Середу', goToGYM);
// myDay('Середу', goToMusicSchool);
// myDay('Середу', goToGrandma);
// myDay('Середу', empty);
//!=========================================

//!=========================================

// function foo(x1, x2) {
//   console.log(x1,x2);
// }

// const myCallback = function(){}

// foo(function(){}, 'Vasya')

//!=========================================
/**
 * Функція calc(a, b, callback)
 */

// function calc(x1, x2, callback) {
//   const res = callback(x1, x2);
//   console.log('RES =', res);
// }

// function sum(a, b) {
//   return a + b;
// }
// function mult(a, b) {
//   return a * b;
// }
// function dif(a, b) {
//   return a / b;
// }
// function sub(a, b) {
//   return a - b;
// }
// function power(a, b) {
//   return a ** b;
// }

// function toStr(a, b) {
//   return '' + a + b;
// }

// function sumSection(start, end) {
//   let total = 0;
//   for (let i = start; i < end; i++) {
//     total += i;
//   }
//   return total;
// }

// calc(10, 20, sum);
// calc(5, 7, power);
// calc(5, 7, power);
// calc(2, 4, toStr);
// calc(10, 20, sumSection);

//!=========================================

/**
 * Напишіть функцію each(array, callback), яка першим параметром очікує масив,
 * а другим - функцію, яка застосовується до кожного елемента масиву. Функція
 * each повинна повернути новий масив, елементами якого будуть
 * результати виклику коллбека.
 */

// function each(array, callback) {
//   const arr = [];

//   for (const item of array) {
//     const res = callback(item);
//     arr.push(res);
//   }

//   return arr;
// }

// each([10, 20, 30, 40, 50], function (item) {
//   return item / 2;
// });

// console.log(
//   each(['Vasya', 'Kolya', 'Vova', 'Roman'], function (item) {
//     return item.toUpperCase();
//   }),
// );

// console.log(
//   each([64, 49, 36, 25, 16], function (value) {
//     return value * 2;
//   })
// );
// console.log(
//   each([64, 49, 36, 25, 16], function (value) {
//     return value - 10;
//   })
// );
// console.log(
//   each([64, 49, 36, 25, 16], function (value) {
//     return Math.sqrt(value);
//   })
// );
// console.log(
//   each([1.5, 2.1, 16.4, 9.7, 11.3], function (value) {
//     return Math.ceil(value);
//   })
// );
// console.log(
//   each([1.5, 2.1, 16.4, 9.7, 11.3], function (value) {
//     return Math.floor(value);
//   })
// );

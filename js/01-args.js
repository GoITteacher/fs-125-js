/**
 * Псевдомасив arguments и Array.from
 */
//!=========================================

// function sayHello(x1, x2) {
//   console.log(`Hello ${x1} ${x2}`);
// }

// sayHello('Vasya', 'Pupkin');
// sayHello('Petya', 'Pytochkin');
// sayHello('Ruslan', 'Kudlay');
// sayHello('Roman', 'Friend');

//!=========================================

// function min(x1, x2) {
//   if (x1 > x2) {
//     return x2;
//   } else {
//     return x1;
//   }
// }

//!=========================================

// function sum() {
//   const arr = Array.from(arguments);

//   for(const arg of arguments){

//   }
// }

// console.log(sum(1, 2, 3, 4));

//!=========================================

// const arr = [1, 2, 3];

// arr.push(1, 2, 3, 4);
// console.log(arr);

//!=========================================

// console.log(Math.min(10, 20, 30, 40));

// function foo(x1, x2) {
//   // const arguments = [10, 2]
//   // const arr = Array.from(arguments);
// }

//!=========================================

// function foo(x1, x2) {
//   // const arguments = [10, 20, 30, 50]
//   console.log('Hello');
// }

// foo(10, 20);
// foo();
// foo(10, 20, 30, 50);

//!=========================================
// function foo() {
//   console.log(arguments);
//   const args = Array.from(arguments);
//   console.log(args);
// }

// fn(1, 2, 3);
// fn(1, 2, 3, 4, 5);
// fn(1, 2, 3, 4, 5, 6, 7);

/**
 * Напиши функцію add для складання довільної
 * кількості аргументів (чисел)
 */

// const add = function (arguments) {
//   const args = Array.from(arguments);
//   let total = 0;

//   for (const arg of args) {
//     total += arg;
//   }

//   return total;
// };

// console.log(add(1, 2, 3));
// console.log(add(1, 2, 4, 5, 6));

/**
 * Напиши функцію calAverage() яка приймає довільну кількість
 * аргументів і повертає їхнє середнє значення. Усі аргументи
 * будуть лише числами.
 */
// function calAverage() {}

// console.log(calAverage(1, 2, 3, 4)); // 2.5
// console.log(calAverage(14, 8, 2)); // 8
// console.log(calAverage(27, 43, 2, 8, 36)); // 23.2

//!=========================================

// function task1() {
//   let sum = 0;

//   for (const item of arguments) {
//     sum += item;
//   }

//   return sum;
// }

// console.log(task1(10, 20, 30));
// console.log(task1(10, 10));
// console.log(task1(51, 12, 3, 1, 2, 3, 4, 1));

//!=========================================

//написати функцію яка приймає першим параметром шукане число, а далі довільну кількість чисел. Треба перевірити чи є шукане число серед інших чисел

// function task2() {
//   const args = Array.from(arguments);
//   const firstElem = args[0];
//   const numbers = args.slice(1);
//   return numbers.includes(firstElem);
// }

// console.log(task2(5, 1, 2, 3, 4));
// console.log(task2(5, 1, 2, 3, 4, 67, 3, 2, 1, 3, 4, 56, 7, 7));
// console.log(task2(5, 1, 4, 6, 5, 5, 3, 1));
//!=========================================

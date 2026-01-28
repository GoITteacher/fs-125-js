/**
 * Стрілочні функції
 * - Оголошення
 * - Явне і неявне поверненя
 * - Псевдомасив arguments (...args)
 * - Інлайн стрілочні функції
 */

//!=========================================

// const x = 40 + 40;
// const y = 10 > 5;
// const foo = () => {};
// const arrowFn = () => {};
// const sum = () => {};

// function foo(x1, x2) {
//   return x1 + x2;
// }

// const foo1 = (x1, x2) => x1 + x2;
// const sum = (a, b) => a + b;
// const mult = (a, b, c) => a * b * c;
// const getFirstLetter = (str) => str[0];

// function power(a) {
//   return a * a;
// }
// const power = a => a * a;

// const arrowFn = (...args) => {
//   console.log(args);
// };

// arrowFn(10, 20, 30);

//!=========================================
function add(a, b, c) {
  return a + b + c;
}

// const addArrow =

console.log(add(5, 10, 15));
// console.log(addArrow(5, 10, 15));

/**
 * ---------------------------
 */
function fnA() {
  return {
    a: 5,
  };
}

console.log(fnA());

// const arrowFnA =

// console.log(arrowFnA());

/**
 * Функція calc(a, b, callback)
 */

// function calc(a, b, callback) {
//   const result = callback(a, b);
//   console.log(result);
// }

// calc(2, 3, (x, y) => x + y);
// calc(10, 8, (x, y) => x - y);

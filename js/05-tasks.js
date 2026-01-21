/**
 * Напиши скрипт, який для об'єкта user, послідовно:
 * - додає поле mood зі значенням 'happy'
 * - замінює значення hobby на 'skydiving'
 * - замінює значення premium на false
 * - виводить вміст об'єкта user у форматі ключ:значення використовуючи Object.keys() та for...of
 */

const user = {
  name: 'Mango',
  age: 20,
  hobby: 'html',
  premium: false,
};

user.mood = 'happy';
user.hobby = 'skydiving';
user.premium = !user.premium;

const keys = Object.keys(user);

// console.log(keys);

// for (const key of keys) {
//   console.log(`${key}: ${user[key]}`);
// }

//!=========================================

/**
 * У нас є об'єкт, де зберігаються зарплати нашої команди. Напишіть код для
 * підсумовування всіх зарплат і збережіть результат у змінній sum.
 * Повинно вийти 390. Якщо об'єкт salaries порожній, то результат має бути 0.
 */

// function sum(salaries) {
//   const arr = Object.values(salaries); // [100,160,130]
//   let total = 0;

//   for (const salary of arr) {
//     total += salary;
//   }

//   return total;
// }

// const salaries1 = {
//   John: 100,
//   Ann: 160,
//   Pete: 130,
// };

// const salaries2 = {
//   John: 100,
//   Ann: 160,
//   Pete: 130,
// };
// console.log(sum(salaries1));
// console.log(sum(salaries2));
//!=========================================
// const product = {
//   x1: 100,
//   x2: 200,
//   title: 'My Product',
// };

// const arr = Object.keys(product); // ['x1','x2', 'title', 'price']
// const arr = Object.values(product); // [100, 200,'My Product']

//!=========================================

// function foo(x) {
//   console.log(x);
// }

// const y = 10;
// foo(y);

// delete user.hobby;
// console.log(user);

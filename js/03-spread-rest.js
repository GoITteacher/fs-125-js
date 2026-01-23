/**
 * Синтаксис spread і rest
 *
 * - Залишкові параметри
 * - Збір частини аргументів
 * - Входження параметрів
 * - Створення масиву
 * - Створення об'єкта
 */

//!=========================================
// const numbers = [1, 3, 5, 1, 2, 4, 6, 7, 2];

// const copy = [...numbers];

// console.log(copy);

//!=========================================

// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];
// const arr3 = [7, 8, 9];

// const copy = ['START', ...arr2, ...arr1, ...arr3, 'END'];

// console.log(copy);

//!=========================================

// const arr = [1, 2, 3];
// arr.push(4);

// let arr = [1, 2, 3, 4];
// const copy = [...arr, 5]

//!=========================================

// const arr = [1, 3, 45, 1, 2, 4, 52];
// Math.max(...arr);

//!=========================================

// const user = {
//   age: 10,
//   name: 'vasya',
// };

// const copy = { ...user, balance: 100 };

// console.log(copy);

//!=========================================

//!=========================================

/**
 * Пошук найменшої аьо найбільшої температури (числа)
 */
const temps = [18, 14, 12, 21, 17, 29, 24];

/**
 * Створення масиву і тип за посиланням
 */
const a = [{ x: 1 }, { y: 2 }, { z: 3 }];
const b = a;

// console.log("a: ", a);
// console.log("b: ", b);

/*
 * Поєднуємо кілька масивів в один через spread
 */
const lastWeekTemps = [1, 2, 3];
const currentTemps = [4, 5, 6];
const nextWeekTemps = [7, 8, 9];

const allTemps = [];
// console.log(allTemps);

/*
 * Створення об'єкта
 */
const objA = { x: 1, y: 2 };
const objB = { x: 0, z: 3 };
const objC = {};

// console.log(objC);

/**
 * Оновлюємо налаштування користувача
 */
const defaultSettings = {
  theme: 'light',
  showNotifications: true,
  hideSidebar: false,
};

const userSettings = {
  showNotifications: false,
  hideSidebar: true,
};

const finalSettings = {};

// console.log(finalSettings);

//!=========================================

// function foo(min, ...items) {
//   for (const item of items) {
//     if (item > min) {
//       console.log(item);
//     }
//   }
// }

function splice(arr, index, count, ...args) {
  // ['Hello', 'World', 'TEST']
  const part1 = arr.slice(0, index);
  const part2 = arr.slice(index + count);

  const res = [...part1, ...args, ...part2];
  console.log(res);
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// [1, 2, 'Hello', 'World', 'TEST', 6, 7, 8, 9]
splice(arr, 2, 3, 'Hello', 'World', 'TEST');

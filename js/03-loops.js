/**
 * Деструктуризація об'єкта в циклі
 */

// const users = [
//   {
//     name: 'Kate',
//   },
//   {
//     name: 'Alex',
//   },
//   {
//     name: 'Mark',
//   },
// ];

/**
 * Без деструктуризації
 */
// const names = [];

// for (const user of users) {
//   names.push(user.name);
// }

// console.log(names);

/**
 * З деструктуризацією
 */

// for (const { name } of users) {
//   names.push(name);
// }

//!=========================================
const studentData = {
  firstname: 'Anton',
  lastname: 'Ponomarenko',
  age: 18,
  group: 'PZ-121',
  phoneNumber: '+38095123123',
};

const arr = Object.entries(studentData);

// console.log(arr);

// for (const [first, second] of arr) {
//   console.log(x, y);
// }

//!=========================================

// const colors = [
//   [100, 222, 123],
//   [12, 42, 12],
//   [52, 12, 53],
//   [34, 23, 12],
// ];

// for (const [red, green, blue] of colors) {
//   console.log(red, green, blue);
// }

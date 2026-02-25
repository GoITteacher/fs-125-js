/**
 * LocalStorage
 */
//!=========================================

// const x = {
//   name: 'Vasya',
//   age: 25,
// };

// const zip = JSON.stringify(x);

// console.log(zip);

//!=========================================

// const zip = '[1, 2, 3, "hello", null]';

// const arr = JSON.parse(zip);

// console.log(arr);

//!=========================================
// const LS_KEY = "Array of names";
// const names = ["Alice", "Kate", "Emma"];

/**
 * Збереження
 * Чому треба використовувати метод JSON.stringify
 */
//!=========================================

// const x = {
//   name: 'Vasya',
//   age: undefined,
//   showInfo() {
//     console.log(this.name);
//   },
// };
// const zip = JSON.stringify(x);
// localStorage.setItem('userData', zip);

//!=========================================

//!=========================================

/**
 * Читання
 * Чому треба використовувати метод JSON.parse
 */

// const zip = localStorage.getItem('userData');
// const data = JSON.parse(zip);
// console.log(data);

/**
 * Видалення
 */

// localStorage.removeItem('userData');
// localStorage.removeItem('userName');

/**
 * LocalStorage не може зберігати функції
 */

// function add(a, b) {
//   return a + b;
// }

// const calculator = {
//   a: 5,
//   b: 10,
//   add() {
//     return this.a + this.b;
//   },
// };

//!=========================================

console.log('START');

const arr = ['html', 'css', 'js'];
const index = Number(prompt('Enter index'));
const elem = arr[index];

try {
  const str = elem.toUpperCase();
  console.log(str);
} catch (err) {
  console.log(err);
  console.log('Щось пішло не так');
}

console.log('END');

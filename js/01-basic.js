/**
 * Деструктуризація об'єкта
 */

//!=========================================
// const user = {
//   age: 25,
//   city: 'Dnirpo',
//   country: 'Ukraine',
//   username: 'Jacob name',
//   address: {
//     location: {
//       x: 10,
//       y: 20,
//     },
//   },
//   skills: {
//     html: true,
//     css: false,
//     js: true,
//   },

//   balance: 125,
// };
//!=========================================
// const { city, age, country, skills } = user;
// const { css, js, html } = user.skills;

// const age = user.age;
// const country = user.country;
// const city = user.city;
//!=========================================

const username = 'Vasya';

// const { username: name } = user;
// const name = user.username

// const { city: userCity } = user;

//!=========================================

// const {
//   skills: { css, html },
// } = user;

// const {css,html} = user.skills;

// console.log(css, html);

//!=========================================

// const { address } = user;
// const { location } = address;
// const { x, y } = location;

//!=========================================

// const {
//   city,
//   address: { location: userLocation },
//   country,
// } = user;

//!=========================================

// let { balance: userBalance = 0 } = user;

// const userBalance = undefined;
// console.log(userBalance);
//!=========================================

// const book = {
//   title: 'Harry Potter',
//   author: '',
//   price: 250,
//   pages: 300,
//   id: '12312412351252351',
// };

// const { id: bookId, ...bookData } = book;

// console.log(bookId);
// console.log(bookData);

//!=========================================

/**
 * Деструктуризація масива
 */

// const arr = [1, 2, 3, 4, 5];
// const [x,y,q] = arr;
//!=========================================

// const rgb = [155, 27, 13];
// const [, , blue, alpha = 1] = rgb;
// console.log(blue, alpha);
//!=========================================

// const numbers = [12, 2, 4, 1, 2, 4, 5, 5, 1, 2, 3, 4];
// const [first, second, ...otherNumbers] = numbers;

// const x = numbers[0];
// const y = numbers[25];

// console.log(first, second);
// console.log(otherNumbers);

//!=========================================

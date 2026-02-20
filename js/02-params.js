/**
 * Деструктуризація об'єкта в параметрах функції
 */

// const user = {
//   username: "Jacob name",
//   skills: {
//     html: true,
//     css: false,
//     js: true,
//   },
// };

// // Без деструктуризації
// function getUserName(obj) {
//   console.log(
//     `Hello my name is ${obj.name}, I know html - ${obj.skills.html}, css - ${obj.skills.css} and js -${obj.skills.js}`
//   );
// }

// З деструктуризацією

// getUserName(user);

//!=========================================
// const users = [
//   { name: 'Vasya', age: 25 },
//   { name: 'Roman', age: 27 },
//   { name: 'Max', age: 23 },
// ];

function userTemplate({ name, age }) {
  return `<li>
  <p>Name: ${name}</p>
  <p>Age: ${age}</p>
</li>`;
}

function usersTemplate(users) {
  return users.map(userTemplate).join('\n\n');
}

// const markup = usersTemplate(users);

// console.log(markup);

//!=========================================

// function showUserInfo({ name, age, city, country }) {
//   console.log(age);
//   console.log(name);
//   console.log(city);
//   console.log(country);
// }

// const userData = {
//   name: 'Vasya',
//   age: 25,
//   city: 'Dnirpo',
//   country: 'Ukraine',
// };

// showUserInfo(userData);

//!=========================================

// const users = [
//   { name: 'Vasya', age: 25 },
//   { name: 'Roman', age: 27 },
//   { name: 'Max', age: 23 },
// ];

// // users.map((user) => user.name);
// const res = users.map(({ name, ...userData }) => `${name}: ${age}`);
// console.log(res);

//!=========================================

// function foo(index, { name, age }, balance) {
//   console.log(index);
//   console.log(name);
//   console.log(age);
//   console.log(balance);
// }

// const userData = {
//   name: 'Vasya',
//   age: 25,
// };

// foo(0, userData, 50);

//!=========================================

// function showButton({x,y,t}) {
//   props.x;
//   props.y;
// }

// showButton({ x: 10, y: 20, t: 50 });

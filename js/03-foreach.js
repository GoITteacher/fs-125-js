/**
 * Метод forEach(callback)
 * - Поелементо перебирає оригінальний масив
 * - Нічого не повертає
 * - Замінює класичний for, якщо не потрібно переривати цикл
 */

// const numbers = [5, 10, 15, 20, 25, 30];
// let total = 0;

// numbers.forEach((element, index, array)=>{});
// numbers.map((element, index, array)=>{});
// numbers.flatMap((element, index, array)=>{});
// numbers.findIndex((element, index, array)=>{});
// numbers.filter((element, index, array)=>{});
// numbers.some((element, index, array)=>{});
// numbers.every((element, index, array)=>{});
// numbers.find((element, index, array)=>{});
// numbers.reduce(()=>{});
// numbers.sort(()=>{});
// numbers.toSorted(()=>{});

//!=========================================

// users.forEach((item)=>{})
// callback(15, 0);
// callback(52, 1);
// callback(12, 2);
// callback(41, 3);

// const numbers = [15, 52, 12, 41];

// const res = numbers.forEach((elem, index) => {
//   numbers[index] = elem * index;
// });

// console.log(res);

//!=========================================

// const users = [
//   {
//     username: 'Vasya',
//     email: 'vasya@gmail.com',
//   },
//   {
//     username: 'Kolya',
//     email: 'Kolya@gmail.com',
//   },
//   {
//     username: 'Petro',
//     email: 'Petro@gmail.com',
//   },
//   {
//     username: 'Roman',
//     email: 'Roman@gmail.com',
//   },
// ];

// users.forEach((user, i) => {
//   console.log(
//     `${i + 1}) Відправили повідомлення з привітанням на пошту ${user.email}`,
//   );
// });

//!=========================================
/* 
callback(5)
callback(10)
callback(15)
callback(20)
callback(25)
*/

/**
 * Виконайте рефакторинг коду за допомогою методу forEach та стрілочні функції.
 */
// function logItems(items) {
//   console.log(items);
//   for (let i = 0; i < items.length; i += 1) {
//     console.log(`${i + 1} - ${items[i]}`);
//   }
// }

// logItems(['Mango', 'Poly', 'Ajax']);
// logItems(['🍎', '🍇', '🍑', '🍌', '🍋']);

/**
 * Виконайте рефакторинг коду за допомогою методу forEach та стрілочні функції.
 */
// function printContactsInfo({ names, phones }) {
//   const nameList = names.split(',');
//   const phoneList = phones.split(',');
//   for (let i = 0; i < nameList.length; i += 1) {
//     console.log(`${nameList[i]}: ${phoneList[i]}`);
//   }
// }

// printContactsInfo({
//   names: 'Jacob,William,Solomon,Artemis',
//   phones: '89001234567,89001112233,890055566377,890055566300',
// });

/**
 * Виконайте рефакторинг коду за допомогою методу forEach та стрілочні функції.
 */
// function calculateAverage(...args) {
//   let total = 0;
//   for (let i = 0; i < args.length; i++) {
//     total += args[i];
//   }
//   return total / args.length;
// }

// console.log(calculateAverage(1, 2, 3, 4)); // 2.5
// console.log(calculateAverage(14, 8, 2)); // 8
// console.log(calculateAverage(27, 43, 2, 8, 36)); // 23.2

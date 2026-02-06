/**
 * Метод toSorted
 *
 * - Свій порядок сортування чисел
 * - Свій порядок сортування рядків
 * - Сортування об'єктів
 *
 * За замовчуванням:
 * - сортує за зростанням
 * - приводить елементи до рядка і сортує за [Unicode](https://unicode-table.com/en/)
 */

//!=========================================

// const numbers = [1, 9, 6, 2, 3];

// const sorted = numbers.toSorted((left, right) => {
//   return right - left;
// });

// console.log('sorted ', sorted);

// const letters = ["b", "B", "a", "A"];
// console.log("letters", letters);

//!=========================================
/**
 * compareFunction - функція порівняння (callback)
 * Елементи масиву сортуються відповідно до її значення, що повертається
 */

// console.log(
//   numbers.toSorted((curEl, nextEl) => {
//     return nextEl - curEl;
//   }),
// );

// const descSortedNumbers = numbers;
// const ascSortedNumbers = numbers;
// console.log('descSortedNumbers', descSortedNumbers);
// console.log('ascSortedNumbers', ascSortedNumbers);

/**
 * Сортування масиву об'єктів
 */
// const players = [
//   { id: 'player-1', name: 'Mango', timePlayed: 310, online: false },
//   { id: 'player-2', name: 'Poly', timePlayed: 470, online: true },
//   { id: 'player-3', name: 'Kiwi', timePlayed: 230, online: true },
//   { id: 'player-4', name: 'Ajax', timePlayed: 150, online: false },
//   { id: 'player-5', name: 'Chelsey', timePlayed: 80, online: true },
// ];

// const res = players.toSorted((b, a) => {
//   return a.name.localeCompare(b.name);
// });

// const res = players.toSorted((a, b) => {
//   return a.timePlayed - b.timePlayed;
// });

// const res = players.toSorted((b, a) => {
//   return a.online - b.online;
// });

// const res = players.toSorted((a, b) => {
//   return a.name.length - b.name.length;
// });

// console.table(res);
//!=========================================
// // За ігровим часом
// const sortedByBestPlayers = players;
// console.table(sortedByBestPlayers);

// const sortedByWorstPlayers = players;
// console.table(sortedByWorstPlayers);

// // По первой букве имени
// const byName = players;
// console.table(byName);

//!=========================================

// const allCars = [
//   { make: 'Honda', model: 'Accord', type: 'sedan', price: 22455 },
//   { make: 'Honda', model: 'CR-V', type: 'suv', price: 24045 },
//   { make: 'Mazda', model: 'Mazda 6', type: 'sedan', price: 24195 },
//   { make: 'Mazda', model: 'CX-9', type: 'suv', price: 31520 },
//   { make: 'Toyota', model: '4Runner', type: 'suv', price: 34210 },
//   { make: 'Toyota', model: 'Sequoia', type: 'suv', price: 45560 },
//   { make: 'Toyota', model: 'Tacoma', type: 'truck', price: 24320 },
//   { make: 'Ford', model: 'F-150', type: 'truck', price: 27110 },
//   { make: 'Ford', model: 'Fusion', type: 'sedan', price: 22120 },
//   { make: 'Ford', model: 'Explorer', type: 'suv', price: 31660 },
// ];

// console.table(
//   allCars.toSorted((a, b) => {
//     return a.price - b.price;
//   }),
// );

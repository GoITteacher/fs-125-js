/**
 * Array.prototype.map()
 * - Поелементо перебирає оригінальний масив
 * - Не змінює оригінальний масив
 * - Повертає новий масив такої ж довжини
 */

//!=========================================

// const numbers = [10, 20, 30, 40, 50];

// const res = numbers.map((item, i, arr) => {
//   return item + i;
// });

// console.log(res);

// // res = [10, 21,32,43,54]
// // res.push(callback(10,0))
// // res.push(callback(20,1))
// // res.push(callback(30,2))
// // res.push(callback(40,3))
// // res.push(callback(50,4))

//!=========================================

// const numbers = [1, 5, 1, 2, 5, 6, 1, 2];

// const res = numbers.map(item => item.toString());

// console.log(res);

//!=========================================
const allCars = [
  { make: 'Honda', model: 'CR-V', amount: 14, price: 24045 },
  { make: 'Honda', model: 'Accord', amount: 2, price: 22455 },
  { make: 'Mazda', model: 'Mazda 6', amount: 8, price: 24195 },
  { make: 'Mazda', model: 'CX-9', amount: 7, price: 31520 },
  { make: 'Toyota', model: '4Runner', amount: 19, price: 34210 },
  { make: 'Toyota', model: 'Sequoia', amount: 16, price: 45560 },
  { make: 'Toyota', model: 'Tacoma', amount: 4, price: 24320 },
  { make: 'Ford', model: 'F-150', amount: 11, price: 27110 },
  { make: 'Ford', model: 'Fusion', amount: 13, price: 22120 },
  { make: 'Ford', model: 'Explorer', amount: 6, price: 31660 },
];

/* 

*/

const arr1 = allCars.map(car => {
  return `<li
      style="
        border: 1px solid black;
        border-radius: 10px;
        padding: 15px;
        display: flex;
        flex-direction: column;
      "
    >
      <p>${car.make} - ${car.model}</p>
      <p>${car.amount}</p>
      <p>${car.price} $</p>
    </li>`;
});

const str = arr1.join('\n');
console.log(str);

//!=========================================
/**
 * Нехай функція getModels повертає масив моделей (поле model) всіх автомобілів.
 */

// const getModels = cars => {};

// console.table(getModels(allCars));

/**
 * Нехай функція makeCarsWithDiscount повертає новий масив об'єктів із змінним
 * значенням властивості price залежно від переданої знижки.
 */

// const makeCarsWithDiscount = (cars, discount) => {};

// console.table(makeCarsWithDiscount(allCars, 0.2));
// console.table(makeCarsWithDiscount(allCars, 0.4));

// const players = [
//   { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false },
//   { id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: true },
//   { id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: true },
//   { id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false },
//   { id: 'player-5', name: 'Chelsy', timePlayed: 80, points: 48, online: true },
// ];
// console.table(players);

/*
 * Збільшуємо кількість годин гравця за id
 */

// const playerIdToUpdate = 'player-3';

// const updatedPlayers = players.map(player => {});

// console.log(updatedPlayers);

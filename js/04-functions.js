/**
 * Функции
 *
 * - Оголошення та виклик функції
 * - Параметри та аргументи
 * - Повернення значення
 */
//!=========================================

// function foo1() {
//   console.log('Постав варитись мясо');
//   console.log('Почисти картоплю');
//   console.log('Приготуй буряк');
//   console.log('Кинь картплю');
// }

// foo1();

//!=========================================

// function myDay(day, food, movie) {
//   console.log('\n\n\n\nЗастели ліжко');
//   console.log('Почисти зубки');
//   console.log(`Збирай рюкзак на ${day}`);
//   console.log('Йди до школи');
//   console.log('Повертайся зі школи');
//   console.log(`Візьми з холодильника ${food} і повечеряй`);
//   console.log('Відпочинь');
//   console.log(`Можеш подивитись ${movie}`);
//   console.log('Лягай день');
// }

// myDay('Понеділок', 'Борщ', 'Барбі');
// myDay('Вівторок', 'Яблука', 'Тачки');

//!=========================================

// function sayHello(username, lastname) {
//   console.log(`Hello ${username} ${lastname}`);
// }

// sayHello('Vova', 'Pashchenko');
// sayHello('Anton', 'Zoloev');

//!=========================================

// function myDay(day, food, money) {
//   console.log('\n\n\n\nЗастели ліжко');
//   console.log('Почисти зубки');
//   console.log(`Збирай рюкзак на ${day}`);
//   console.log(`Візьми з холодильника ${food} і повечеряй`);
//   console.log(`Можеш витратити сьогодні ${money} грн`);
//   console.log('Відпочинь');
//   console.log('Лягай день');
// }

// myDay('Понеділок', 'Яблука', 50);
// myDay('вівторок');
// myDay('середа', 'яблука', 0, 'квитки в кіно');

//!=========================================

// function sum(num1, num2) {
//   const result = num1 + num2;
//   console.log(result);
// }

// sum(1, 2);

// sum(1);

// console.log(Math.floor(10, 10, 20, 30));

//!=========================================

// function shopping(items) {
//   console.log('Вдівайся');
//   console.log('Візьми гроші');
//   console.log('Піди до магазину');
//   console.log(`Купи ${items}`);
//   console.log('Принеси додому');
//   console.log(items);
//   return false
// }

// function sum(x, y) {
//   const result = x + y;
//   console.log(result);
//   return result;
// }

// const r1 = sum(5, 7) * sum(2, 4);
// console.log(r1);

// const x = 0.000123123;

//!=========================================
// console.log("Before fnA execution");
// fnA();
// console.log("After fnA execution");

// console.log("Before fnB execution");
// fnB();
// console.log("After fnB execution");

// console.log("Before fnC execution");
// fnC();
// console.log("After fnC execution");

/**
 * Напиши функцію calcBMI(weight, height) яка розраховує та повертає індекс
 * маси тіла людини. Для цього необхідно розділити вагу на
 * квадрат висоти.
 *
 * Вага та висота будуть спеціально передані як рядки. Не цілі числа можуть
 * бути задані у вигляді 24.7 або 24,7, тобто як роздільник дробової
 * частини може бути кома.
 *
 * Індекс маси тіла необхідно округлити до однієї цифри після коми.
 */

function calcBMI(weight, height) {
  const w = weight.replace(',', '.');
  const h = height.replace(',', '.');

  const wNumber = parseFloat(w);
  const hNumber = parseFloat(h);

  return (wNumber / hNumber ** 2).toFixed(1);
}
const bmi = calcBMI('88,3', '1.75');
console.log(bmi);

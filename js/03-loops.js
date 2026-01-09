/**
 * Цикли
 *
 * - Цикл for
 * - Відлік від 0 до N
 * - Обратний відлік від N до 0
 * - Збільшення/зменшення лічильника на 2+
 * - Інкремент і декремент
 * - Цикли while і do...while
 */

//!=========================================

// for (let i = 0; i < 10; i += 1) {
//   console.log(i);
// }

//!=========================================

// debugger;
// for (let i = 1; i <= 10; i += 1) {
//   console.log(`7 * ${i} = ${i * 7}`);
// }

//!=========================================

// const str = 'Hello world';
// for (let i = 0; i < str.length; i++) {
//   console.log(str[i]);
//   //   console.log(`console.log(str[${i}]);`);
// }

//!=========================================

// const salary = 1300;
// let currentSalary = 1000;

// while (currentSalary < salary) {
//   console.log('А можна трохи більше зп');
//   const random = Math.round(Math.random() * 500);
//   currentSalary += random;
//   console.log(`Ok. Твоя зп - ${currentSalary}`);
// }

//!=========================================
// const salary = 2000;
// let currentSalary = 1000;

// for (let i = 0; i < 3; i++) {
//   console.log('А можна трохи більше зп');
//   const random = Math.round(Math.random() * 500);
//   currentSalary += random;
//   console.log(`Ok. Твоя зп - ${currentSalary}`);
// }

//!=========================================

// const salary = 1500;
// let currentSalary = 2000;

// do {
//   console.log('А можна трохи більше зп');
//   const random = Math.round(Math.random() * 500);
//   currentSalary += random;
//   console.log(`Ok. Твоя зп - ${currentSalary}`);
// } while (currentSalary < salary);

// console.log(`Кінцева ЗП - ${currentSalary}`);

//!=========================================

// for (let i = 1; i < 1000; i++) {
//   if (i % 2 === 0) {
//     continue;
//   }

//   console.log(i);
// }

//!=========================================
// debugger;
// const str = 'Hello world';
// for (let i = 0; i < str.length; i++) {
//   if (str[i] === ' ') {
//     continue;
//   }
//   console.log(str[i]);
// }

// function foo() {
//   const x = 10;
//   const y = 20;
//   return x + y;
// }

// const result = foo();

//!=========================================

// function task1(min, max) {
//   let result = 0;
//   for (let i = min; i <= max; i++) {
//     result += i;
//   }
//   return result;
// }

// const x1 = task1(10);
// const x2 = task1(3);

// console.log(x2);

// 1 + 2 + 3 + 4 + ..... + N

// let i = 25;
// i++; // i+=1;
// i--; // i-=1;

// i = 10;
// console.log(i++)
// console.log(i)
// i+=1

// console.log(++i);

// i += 1;
// console.log(i);

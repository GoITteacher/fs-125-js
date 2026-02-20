/**
 * Необхідно зрoбити рефакторинг функції calculateHousePerimeter,
 * так щоб вона приймала об'єкт з параметрами будинку,
 * включаючи довжини сторін будинку.
 * Функція повинна розрахувати та повернути периметр будинку.
 */

function calculateHousePerimeter({ a, b, c, d }) {
  const perimeter = a + b + c + d;
  return perimeter;
}

const perimeter = calculateHousePerimeter({ a: 10, b: 20, c: 30, d: 35 });
console.log(`Периметр будинку: ${perimeter}`);

//!=========================================

// function showUserSetting({
//   userTheme,
//   showNotification,
//   showAdminPanel,
//   soundValue,
//   brightness,
//   maxMessage,
// }) {
//   console.log(
//     userTheme,
//     showNotification,
//     showAdminPanel,
//     soundValue,
//     brightness,
//     maxMessage,
//   );
// }

// showUserSetting({
//   userTheme: 'dark',
//   showNotification: true,
//   showAdminPanel: false,
//   brightness: 50,
//   soundValue: 100,
//   maxMessage: 10,
// });

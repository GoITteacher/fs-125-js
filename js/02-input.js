/**
 * - Подія input
 * - Подія blur
 *
 * Виводь в консоль все що користувач вводить в input
 */
//!=========================================
// const userName = document.querySelector('.js-user-name');
// const userNameElem = document.querySelector('.js-name');

// userName.addEventListener('input', () => {
//   const value = userName.value;
//   userNameElem.textContent = value;
// });

//!=========================================

/**
 * Користувач вводить в input своє ім'я після втрати
 * фокусу отримує alert з повідомленням-привітанням
 */

// const userName = document.querySelector('.js-user-name');

// userName.addEventListener('focus', () => {
//   console.log('Видалити усі класи');

//   userName.classList.remove('invalid-password');
//   userName.classList.remove('valid-password');
// });

// userName.addEventListener('blur', () => {
//   const value = userName.value;
//   if (value.length > 6) {
//     console.log('додати valid');
//     userName.classList.add('valid-password');
//   } else {
//     console.log('додати invalid');
//     userName.classList.add('invalid-password');
//   }
// });

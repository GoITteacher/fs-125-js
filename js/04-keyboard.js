/*
 * Типи подій: keypress, keydown, keyup
 * - Обмеження keypress
 * - Властивості key та code
 */

// document.addEventListener('keydown', e => {
//   console.log(e.code, e.key);
// });

// document.addEventListener('keypress', () => {
//   console.log('keypress');
// });

// document.addEventListener('keyup', () => {
//   console.log('keyup');
// });

/**
 * Обробка комбінацій клавіш
 */

// document.addEventListener('keypress', e => {
//   console.log(e.code);
//   if (e.shiftKey && e.code === 'KeyQ') {
//     console.log('Активуємо супер силу');
//   }
// });

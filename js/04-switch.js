/**
 * Оператор switch
 */

const username = 'Mango';
//!=========================================
// const userType = 'User';

// switch (userType) {
//   case 'Admin':
//     console.log('Hello Admin');
//     console.log('Hello Admin');
//     console.log('Hello Admin');
//     break;
//   case 'User':
//     console.log('Hello User');
//     console.log('Hello User');
//     console.log('Hello User');
//     break;
//   case 'Guest':
//     console.log('Hello Guest');
//     console.log('Hello Guest');
//     console.log('Hello Guest');
//     break;
//   case 'Anonym':
//     console.log('Hello Anonym');
//     console.log('Hello Anonym');
//     console.log('Hello Anonym');
//     break;
// }

//!=========================================

/**
 * Виконай рефакторинг коду задачі використовуючи switch.
 *
 * Якщо до дедлайну 0 днів - виведи рядок "Today"
 * Якщо до дедлайну 1 день - виведи рядок "Tomorrow"
 * Якщо до дедлайну 2 дні - виведи рядок "Overmorrow"
 * Якщо до дедлайну 3+ днів - виведи рядок "Date in the future"
 */

const daysUntilDeadline = 5;

switch (daysUntilDeadline) {
  case 0:
    console.log('Today');
    break;
  case 1:
    console.log('Tomorrow');
    break;
  case 2:
    console.log('Overmorrow');
    break;

  default:
    console.log('Date in the future');
}

// if (daysUntilDeadline === 0) {
//   console.log('Today');
// } else if (daysUntilDeadline === 1) {
//   console.log('Tomorrow');
// } else if (daysUntilDeadline === 2) {
//   console.log('Overmorrow');
// } else {
//   console.log('Date in the future');
// }

/*
 * Напиши скрипт вибору опції доставки товару.
 * Опція зберігається в змінній option: 1 - самовивіз, 2 - кур'єр, 3 - пошта
 *
 * У змінну message записати повідомлення в залежності від опції.
 * - 'Ви зможете забрати товар завтра з 12:00 у нашому офісі'
 * - 'Кур'єр доставить замовлення завтра з 9:00 до 18:00'
 * - 'Посилання буде відправлено сьогодні'
 * - 'Вам передзвонить менеджер'
 */

const option = Number(prompt('Choose the option'));
let message = '';

switch (option) {
  case 1:
    message = 'Ви зможете забрати товар завтра з 12:00 у нашому офісі';
    break;
  case 2:
    message = "Кур'єр доставить замовлення завтра з 9:00 до 18:00";
    break;
  case 3:
    message = 'Посилання буде відправлено сьогодні';
    break;
  default:
    message = 'Вам передзвонить менеджер';
}

console.log(message);

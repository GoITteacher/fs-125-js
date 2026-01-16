/**
 * Напиши функцію logItems(items), яка отримує масив та використовує цикл,
 * який для кожного елемента масиву буде виводити в консоль повідомлення у
 * форматі <номер елемента> - <значення елемента>. Нумерація елементів
 * повинна починатися з 1.
 *
 * Наприклад для першого елемента масиву ['Mango', 'Poly', 'Ajax'] з
 * індексом 0 буде виведено 1 - Mango, а для індексу 2 виведе 3 - Ajax.
 */

// function logItems(items) {
//   for (let i = 0; i < items.length; i++) {
//     console.log(`${i + 1} - ${items[i]}`);
//   }
// }

// logItems(['Mango', 'Poly', 'Ajax']);
// logItems(['🍎', '🍇', '🍑', '🍌', '🍋']);

/**
 * Напиши функцію printInfo(names, phones) яка виводить
 * у консоль ім'я та телефонний номер користувача. У параметри
 * names та phones будуть передані рядки імен та телефонних номерів,
 * розділені комами. Порядковий номер імен та телефонів у рядках
 * вказують на відповідність. Кількість імен та телефонів
 * гарантовано однакова.
 */

// function printInfo(names, phones) {
//   const namesArr = names.split(',');
//   const phonesArr = phones.split(',');

//   for (let i = 0; i < namesArr.length; i++) {
//     console.log(`${namesArr[i]} - ${phonesArr[i]}`);
//   }
// }

// printInfo(
//   'Jacob,William,Solomon,Artemis',
//   '89001234567,89001112233,890055566377,890055566300',
// );

/**
 * Напиши функцію formatTime(minutes) яка переведе значення
 * minutes (кількість хвилин) у рядок у форматі годин
 * та хвилин HH:MM.
 */

// const hours = Math.floor(totalMinutes / 60);
// const minutes = totalMinutes % 60;
// console.log(hours);
// console.log(minutes);

// const doubleDigitHours = String(hours).padStart(2, 0);
// const doubleDigitMinutes = String(minutes).padStart(2, 0);
// console.log(`${doubleDigitHours}:${doubleDigitMinutes}`);

// function formatTime(minutes) {}

// console.log(formatTime(70)); // "01:10"
// console.log(formatTime(450)); // "07:30"
// console.log(formatTime(1441)); // "24:01"

//!=========================================

// function foo1(i) {
//   console.log(i);
//   foo1(i + 1);
// }

// foo1(1);

// console.log(1)
// foo1(2)

// console.log(2)
// foo1(2+1)

// console.log(3)
// foo1(3+1)

//!=========================================

// 5! = 1 * 2 * 3 * 4 * 5;

// function task1(x) {
//   if (x === 1) {
//     return 1;
//   }

//   return x * task1(x - 1);
// }

// console.log(task1(1));

// 5! = 5 * 4!
// 4! = 4 * 3!
// 3! = 3 * 2!;
// 2! = 2 * 1!;
// 1! = 1;
//!=========================================
// j                         |
const numbers = [1, 2, 3, 4, 5];
// i                         |

// 1,1,2,2,4,4,5,6,7
function sortArr(arr) {
  const copyArr = arr.slice();
  for (let i = 0; i < copyArr.length; i++) {
    for (let j = i; j < copyArr.length; j++) {
      if (copyArr[j] < copyArr[i]) {
        const tmp = copyArr[j];
        copyArr[j] = copyArr[i];
        copyArr[i] = tmp;
      }
    }
  }
  return copyArr;
}

sortArr(numbers);

//!=========================================

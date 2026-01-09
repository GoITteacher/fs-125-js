/**
 * Форматування посилання (endsWith)
 *
 * Напиши скрипт який перевіряє чи закінчується значення
 *  змінної link символом /. Якщо ні, додай до кінця
 *  значення link цей символ.
 * Використовуй конструкцію if...else.
 */

// debugger;
// let link = 'https://my-site.com/about/';

// if (true) {
//   link += '/';
// }

// console.log(link);

/**
 * Форматування посилання (includes та логічне «І»)
 * Напиши скрипт який перевіряє чи закінчується значення
 * змінної link символом /. Якщо ні, додай до кінця
 * значення link цей символ, але тільки в тому випадку,
 * якщо в link є підрядок "my-site".
 * Використовуй конструкцію if...else або тернарний оператор.
 */

// let url = 'https://my-site.com/about';
// const condition1 = url.endsWith('/');
// const condition2 = url.includes('my-site');

// if (!condition1 && condition2) {
//   url += '/';
// }

// console.log(url);

/*
 * Пошук у рядку методом includes()
 */
//!=========================================
// const blacklistedWord1 = 'spam';
// const blacklistedWord2 = 'sale';

// const string1 =
//   "Hello, I'm Prince Abdul, this is not SpAm, I'm offering you a million!";

// const validStr = string1.toLowerCase();
// const hasFirstWord = validStr.includes(blacklistedWord1);
// const hasSecondWord = validStr.includes(blacklistedWord2);

// if (hasFirstWord || hasSecondWord) {
//   console.log('Was blocked');
// }

//!=========================================
// const string2 = "Biggest SALE this week, don't miss out!";
// const string3 = '#fatlivesmatter advertising campaign';

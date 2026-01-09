/**
 * Логічні оператори
 *
 * - Перетворення типів: логічне
 * - Оператор &&
 * - Оператор ||
 * - Оператор !
 */

// console.log(Boolean(0)); // false
// console.log(Boolean(false)); // false
// console.log(Boolean(NaN)); // false
// console.log(Boolean(null)); // false
// console.log(Boolean(undefined)); // false
// console.log(Boolean("")); // false

// console.log(Boolean(true)); // true
// console.log(Boolean(3.14)); // true
// console.log(Boolean(-10)); // true
// console.log(Boolean("hello")); // true
// console.log(Boolean("false")); // true

//!=========================================
// Оператор &&. Повертає перше false. В іншому випадку праву частину.
// 25 && 0 = // 0
// "hello" && 'world' = // 0

//!=========================================

// Оператор ||. Повертає перше true. В іншому випадку праву частину.

//!=========================================
// console.log(5 && 4);
// console.log(5 && "mango");

/**
 * --------------------------------
 */

// console.log(false || 5);
// console.log(false || null);

/**
 * --------------------------------
 */

// console.log(!5);
// console.log(!false);

/**
 * --------------------------------
 */

// console.log(true && 3); //3

// console.log(false && 3); //f

// console.log(true && 4 && 'kiwi'); // k

// console.log(true && 0 && 'kiwi'); //0

// console.log(true || 3);//t

// console.log(true || 3 || 4);//t

// console.log(true || false || 7);//t

// console.log(null || 2 || undefined);//2

// console.log((1 && null && 2) > 0); //false

// console.log(null || (2 && 3) || 4); //3

//!=========================================
// console.log(
//   (true && true) || (false && false && true) || (false && true) || false,
// );
// (1 * 1) + (0 * 0 * 1) + (0 * 1) + 0;

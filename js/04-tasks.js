/*
 * Типів транзакцій всього два.
 * Можна покласти чи зняти гроші з рахунку.
 */
const Transaction = {
  DEPOSIT: 'deposit',
  WITHDRAW: 'withdraw',
};

/*
 * Кожна транзакція це об'єкт із властивостями: id, type та amount
 */

const account = {
  balance: 0,
  transactions: [],
  withdraw() {},
  deposit() {},
};

//!================================================

//!================================================

const arr1 = [1, 2, 3];
const arr2 = [...arr1];

console.log(arr1 === arr2);

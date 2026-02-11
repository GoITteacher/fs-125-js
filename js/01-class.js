/**
 * Классы
 *  - Оголошення класу
 *  - Конструктор класу
 *  - Методи класу
 *  - Прототип екземпляру
 *  - Приватні властивості
 *  - Геттери і сеттери
 *  - Статичні властивості
 */

// class User {
//   constructor(firstname, lastname) {
//     this = undefined;
//     this.firstname = firstname;
//     this.lastname = lastname;
//     // return this
//   }
// }

// const user1 = new User('Volodymyr', 'Pashchenko');
// const user2 = new User('Taras', 'Ponomarenko');

//!=========================================

// function createProduct() {
//   console.log(this);
// }

// new createProduct();
// createProduct.call({})

//!=========================================

// class Product {
//   storeName = 'VARUS';
//   discount = 5;

//   constructor(title, price, amount) {
//     this.storeName = 'VARUS';
//     this.title = title;
//     this.price = price;
//     this.amount = amount;
//   }

//   showInfo() {
//     console.log(this.title, this.price, this.amount);
//   }

//   showTotalPrice() {}

//   showHTML() {}
// }

// const product0 = new Product('Iphone 13', 1500, 5);
// const product1 = new Product('Iphone 14', 1000, 5);
// const product2 = new Product('Iphone 15', 1300, 5);
// const product3 = new Product('Iphone 16', 1500, 5);
// const product4 = new Product('Iphone 17', 1500, 5);

// console.log(product0);

// product0.showInfo();

//!=========================================

// const arr1 = [];
// const arr2 = [];

// console.log(arr1);

//!=========================================

// class Product {
//   #price;

//   constructor(title, price) {
//     this.title = title;
//     this.#price = price;
//   }

//   showInfo() {
//     console.log(this.title, this.#price);
//   }
// }

// const product = new Product('apple', 50);

// product.price = 250;

// product.showInfo();

//!=========================================

// class Player {
//   #balance;
//   #level;
//   constructor(nickname) {
//     this.nickname = nickname;
//     this.#balance = 0;
//     this.#level = 1;
//   }

//   showInfo() {
//     this.#showName();
//     this.#showLevel();
//     this.#showBalance();
//   }

//   #showName() {
//     console.log('Nickname:', this.nickname);
//   }

//   #showBalance() {
//     console.log('Balance:', this.#balance);
//   }

//   #showLevel() {
//     console.log('Level:', this.#level);
//   }
// }

// const pl1 = new Player('roboko');

//!=========================================

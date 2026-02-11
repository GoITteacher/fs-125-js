/*
 * Властивість innerHTML
 * - зчитування
 * - запис
 */

// const titleEl = document.querySelector('.title');

// console.log(titleEl);

// titleEl.insertAdjacentHTML('beforeend', '<span>Hello</span>');

/*
 * Вставка розмітки за допомогою insertAdjacentHTML()
 */

const allCars = [
  {
    make: 'Honda',
    model: 'CR-V',
    type: 'suv',
    amount: 14,
    price: 24045,
    onSale: true,
  },
  {
    make: 'Honda',
    model: 'Accord',
    type: 'sedan',
    amount: 2,
    price: 22455,
    onSale: true,
  },
  {
    make: 'Mazda',
    model: 'Mazda 6',
    type: 'sedan',
    amount: 8,
    price: 24195,
    onSale: false,
  },
  {
    make: 'Mazda',
    model: 'CX-9',
    type: 'suv',
    amount: 7,
    price: 31520,
    onSale: true,
  },
  {
    make: 'Toyota',
    model: '4Runner',
    type: 'suv',
    amount: 19,
    price: 34210,
    onSale: false,
  },
  {
    make: 'Toyota',
    model: 'Sequoia',
    type: 'suv',
    amount: 16,
    price: 45560,
    onSale: false,
  },
  {
    make: 'Toyota',
    model: 'Tacoma',
    type: 'truck',
    amount: 4,
    price: 24320,
    onSale: true,
  },
  {
    make: 'Ford',
    model: 'F-150',
    type: 'truck',
    amount: 11,
    price: 27110,
    onSale: true,
  },
  {
    make: 'Ford',
    model: 'Fusion',
    type: 'sedan',
    amount: 13,
    price: 22120,
    onSale: true,
  },
  {
    make: 'Ford',
    model: 'Explorer',
    type: 'suv',
    amount: 6,
    price: 31660,
    onSale: false,
  },
];

//!=========================================
function carTemplate(car) {
  return `<li class="car-item on-sale">
        <p>${car.make} - ${car.model}</p>
        <p>Type: ${car.type}</p>
        <p>Price: ${car.price}</p>
        <p>Amount: ${car.amount}</p>
      </li>`;
}

function carsTempalte(cars) {
  return cars.map(carTemplate).join('\n');
}

//!=========================================

const carsElem = document.querySelector('.js-car-list');
const markup = carsTempalte(allCars);
carsElem.insertAdjacentHTML('beforeend', markup);

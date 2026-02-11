/*
 * Створюємо та додаємо колекцію
 */

const options = [
  { label: 'червоний', color: '#F44336' },
  { label: 'зелений', color: '#4CAF50' },
  { label: 'синій', color: '#2196F3' },
  { label: 'сірий', color: '#607D8B' },
  { label: 'рожевий', color: '#E91E63' },
  { label: 'індіго', color: '#3F51B5' },
  { label: 'червоний', color: '#F44336' },
  { label: 'зелений', color: '#4CAF50' },
  { label: 'синій', color: '#2196F3' },
  { label: 'сірий', color: '#607D8B' },
  { label: 'рожевий', color: '#E91E63' },
  { label: 'індіго', color: '#3F51B5' },
  { label: 'червоний', color: '#F44336' },
  { label: 'зелений', color: '#4CAF50' },
  { label: 'синій', color: '#2196F3' },
  { label: 'сірий', color: '#607D8B' },
  { label: 'рожевий', color: '#E91E63' },
  { label: 'індіго', color: '#3F51B5' },
  { label: 'червоний', color: '#F44336' },
  { label: 'зелений', color: '#4CAF50' },
  { label: 'синій', color: '#2196F3' },
  { label: 'сірий', color: '#607D8B' },
  { label: 'рожевий', color: '#E91E63' },
  { label: 'індіго', color: '#3F51B5' },
];

const colorPickerContainerEl = document.querySelector('.js-color-picker');

/*
 * Пишемо функцію для створення розмітки колорпікера
 */

//!=========================================

// const linkElem = document.querySelector('a');

// linkElem.innerHTML = '<span>Hello</span>';

//!=========================================

// const li = document.createElement('li');
// li.classList.add('item');

// const p1 = document.createElement('p');
// p1.classList.add('title');
// p1.textContent = 'title';

// const p2 = document.createElement('p');
// p2.classList.add('description');
// p2.textContent = 'Desciption';

// li.append(p1, p2);

// document.body.append(li);

//!=========================================
// document.body.innerHTML = `<li class="item">
//   <p class="title" data-id="hello" src="">Title</p>
//   <p class="description">Desciption</p>
//   <button >
// </li>`;

//!=========================================

// document.body.innerHTML = '';
// document.body.innerHTML = '....';

//!=========================================

// function colorTemplate(item) {
//   return `<li class="color-item">
//         <div style="background-color: ${item.color}"></div>
//         <p>${item.label}</p>
//       </li>`;
// }

// function colorsTemplate(arr) {
//   return arr.map(colorTemplate).join('')
// }

//!=========================================

// function carTemplate(car) {}
// function carsTemplate() {}

//!=========================================

// function userTemplate(user) {}
// function usersTemplate() {}

//!=========================================

// function itemTemplate(item) {
//   return `<li class="color-item">
//         <div style="background-color: ${item.color}"></div>
//         <p>${item.label}</p>
//       </li>`;
// }

// function itemsTemplate(items) {
//   return items.map(itemTemplate).join('');
// }

//!=========================================

function itemTemplate(item) {
  return `<li class="color-item">
  <div style="background-color: ${item.color}"></div>
  <p>${item.label}</p>
</li>`;
}

function itemsTemplate(items) {
  return items.map(itemTemplate).join('\n\n\n');
}

const markup = itemsTemplate(options);

const containerElem = document.querySelector('.js-color-picker');

containerElem.innerHTML = markup;

/*
 * - Подія submit
 * - Дії браузера за замовчуванням
 * - Властивість elements
 *
 * Оброби форму та збери відгук користувача в об'єкт
 */

// const form = document.querySelector('.js-form');

// form.addEventListener('submit', e => {
//   e.preventDefault();
//   // const email = form.elements.email.value.trim();
//   // const password = form.elements.password.value.trim();
//   // const comment = form.elements['user-comment'].value.trim();
//   //!=========================================
//   const borys = new FormData(form);
//   const email = borys.get('email');
//   const password = borys.get('password');
//   const comment = borys.get('user-comment');

//   console.log(email, password, comment);
//   //!=========================================

//   form.reset();
// });

//!=========================================

const formElem = document.querySelector('.js-cars-form');
const carListElem = document.querySelector('.js-car-list');

formElem.addEventListener('submit', e => {
  e.preventDefault();

  const borys = new FormData(formElem);

  const obj = {
    color: borys.get('color'),
    price: borys.get('price'),
    model: borys.get('model'),
  };

  const markup = carTemplate(obj);
  carListElem.insertAdjacentHTML('beforeend', markup);

  formElem.reset();
});

function carTemplate(car) {
  return `<li style="border: 1px solid ${car.color}">
        <p>${car.model}</p>
        <p>${car.price}</p>
      </li>`;
}

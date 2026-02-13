/*
 * Події миші
 * - mouseenter і mouseleave (це ховер)
 * - mousemove (chatty event - балакуча подія)
 */

const boxRef = document.querySelector('.js-box');

// boxRef.addEventListener('mouseenter', () => {
//   boxRef.classList.add('box--active');
// });

// boxRef.addEventListener('mouseleave', () => {
//   boxRef.classList.remove('box--active');
// });

//!=========================================

boxRef.firstElementChild.addEventListener('mouseenter', e => {
  const randomX = Math.round(Math.random() * 500);
  const randomY = Math.round(Math.random() * 500);
  boxRef.firstElementChild.style.left = `${randomX}px`;
  boxRef.firstElementChild.style.top = `${randomY}px`;

  console.log(e);
});

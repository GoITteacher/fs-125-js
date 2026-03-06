/**
 * Напиши програмне забезпечення для ігрового автомата.
 * Для вирішення завдання використай готову розмітку HTML та базову стилізацію.
 *
 * Після натиснення на кнопку "Start game"
 * в кожному віконці по черзі має з'являтись
 * смайлик з затримкою в 1 секунду ('🤑' або '👿')
 *
 * Під час обробки кожного віконця створи масив з Promis-ами
 * в якому кожен з них буде відповідати за своє віконце,
 * після чого оброби даний масив за допомогою методу Promise.allSettled
 *
 * Після того як всі віконця були заповнені потрібно
 * щоб скріпт автоматично визначав чи гравець переміг, чи ні.
 * Якщо в кожному віконці однаковий смайлик це означає що користувач переміг
 *
 * В поле result виводить повідомлення про статус гри ('Winner' або 'Loser')
 *
 * Після повторного натискання на кнопку "Start game"
 * поле має очищатись, а гра починатись з початку.
 */

const startBtn = document.querySelector('.start-btn');
const container = document.querySelector('.container');
const resultElem = document.querySelector('.result');

// 1000
// 2000
// 3000

startBtn.addEventListener('click', () => {
  container.children[0].textContent = '';
  container.children[1].textContent = '';
  container.children[2].textContent = '';

  const arr = [];

  for (let i = 0; i < 3; i++) {
    const smile = createPromise((i + 1) * 100);
    smile
      .then(res => {
        container.children[i].textContent = res;
      })
      .catch(err => {
        container.children[i].textContent = err;
      });

    arr.push(smile);
  }

  Promise.allSettled(arr).then(result => {
    console.log(result);
    const isLose = result.some(el => el.status === 'rejected');

    resultElem.textContent = isLose
      ? 'Спробуй ще раз. Наступного разу точно пощастить'
      : 'Вітаємо, сьогодні точно ваш день. Спробуй ше раз!';
  });
});

//!=========================================

function createPromise(delay) {
  const promise = new Promise((res, rej) => {
    setTimeout(() => {
      const isPositive = Math.random() > 0.3;
      if (isPositive) {
        res('🤑');
      } else {
        rej('👿');
      }
    }, delay);
  });
  return promise;
}

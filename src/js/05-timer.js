/**
 * Напишемо клас Timer, який буде
 * запускати та зупиняти відлік часу
 */

const startBtn = document.querySelector('button[data-action-start]');
const stopBtn = document.querySelector('button[data-action-stop]');
const clockface = document.querySelector('.js-clockface');

let intervalId;

startBtn.addEventListener('click', () => {
  console.log('START');
  const futureTime = new Date('2026-03-04 21:34:00');

  intervalId = setInterval(() => {
    console.log('TICK');
    const currentTime = Date.now();
    const diff = futureTime - currentTime;

    const str = msToTime(diff);
    clockface.innerHTML = str;

    if (diff <= 0) {
      clearInterval(intervalId);
    }
  }, 1000);
});

stopBtn.addEventListener('click', () => {
  console.log('STOP');
  clearInterval(intervalId);
});

// function convertMsToTime(ms) {
//   const sec = Math.round((ms / 1000) % 60);
//   console.log(sec);
// }

function msToTime(ms) {
  let seconds = parseInt((ms / 1000) % 60);
  let minutes = parseInt((ms / (1000 * 60)) % 60);
  let hours = parseInt((ms / (1000 * 60 * 60)) % 24);

  hours = hours < 10 ? '0' + hours : hours;
  minutes = minutes < 10 ? '0' + minutes : minutes;
  seconds = seconds < 10 ? '0' + seconds : seconds;

  return hours + ':' + minutes + ':' + seconds;
}

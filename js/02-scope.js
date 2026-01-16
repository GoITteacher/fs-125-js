/**
 * - Глобальна область видимості
 * - Блочна область видимості
 * - Пошук за ланцюжком областей видимості
 */

const globalValue = 10;

function task1() {
  const x = 10;

  if (true) {
    const x = 10;
    for (let i = 0; i < 1; i++) {
      const x = 10;
      if (true) {
        const x = 10;
        if (true) {
          const x = 10;
          debugger;
          console.log(globalValue);
        }
      }
    }
  }
}

task1();

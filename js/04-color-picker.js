let colorPalette = [];
const LENGTH = 15;

function createPaletteItems() {
  const items = [];
  for (let i = 0; i < LENGTH; i++) {
    let hex = getRangomColor();
    let color = {
      hex,
      rgb: hexToRgb(hex),
    };

    items.push(color);
  }

  colorPalette = [...items];
}

function getRangomColor() {
  return `#${getRandomHex()}${getRandomHex()}${getRandomHex()}`;
}

function getRandomHex() {
  return Math.round(Math.random() * 256)
    .toString(16)
    .padStart(2, '0');
}

function hexToRgb(hex) {
  let red = parseInt(hex.substring(1, 3), 16);
  let green = parseInt(hex.substring(3, 5), 16);
  let blue = parseInt(hex.substring(5, 7), 16);
  return `${red}, ${green}, ${blue}`;
}

createPaletteItems();
//!=========================================

const refs = {
  itemList: document.querySelector('.js-colors-box'),
  modalElement: document.querySelector('.modal'),
  btnReloadColor: document.querySelector('.js-reload-color'),
  backdropElem: document.querySelector('.js-backdrop'),
};
//!=========================================

let modalInstance;

function showModal(color) {
  modalInstance = basicLightbox.create(
    `
      <div class="modal" style="width: 500px; height:500px; background-color:${color};"></div>
    `,
    {
      onShow: () => {
        console.log('OPEN MODAL');
        document.addEventListener('keydown', handleCloseModal);
      },
      onClose: () => {
        console.log('CLOSE MODAL');
        document.removeEventListener('keydown', handleCloseModal);
      },
    },
  );

  modalInstance.show();
}

function handleCloseModal(e) {
  console.log(e.code);

  if (e.code === 'Escape') {
    modalInstance.close();
  }
}

//!=========================================

refs.itemList.addEventListener('click', e => {
  if (!e.target.classList.contains('js-btn')) {
    return;
  }

  const color = e.target.dataset.color;

  showModal(color);
});

//!=========================================

refs.backdropElem.addEventListener('click', e => {
  if (e.target === e.currentTarget) {
    hideModal();
  }
});

//!=========================================

function colorTemplate(obj) {
  return `<li class="color-item">
    <button class="color-body js-btn" data-color="${obj.hex}" style="background-color:${obj.hex};"></button>
    <div class="color-footer">
        <div>HEX: ${obj.hex}</div>
        <div>RGB: ${obj.rgb}</div>
        <div></div>
    </div>
</li>`;
}

function colorsTemplate(arr) {
  return arr.map(colorTemplate).join('');
}

document.addEventListener('DOMContentLoaded', () => {
  const markup = colorsTemplate(colorPalette);
  refs.itemList.innerHTML = markup;
});

//!=========================================

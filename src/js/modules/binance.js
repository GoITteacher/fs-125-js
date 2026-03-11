const refs = {
  formEl: document.querySelector('.js-binance-form'),
  infoEl: document.querySelector('.js-binance-info'),
};

//!=========================================

function getPrice(query) {
  const baseUrl = 'https://binance43.p.rapidapi.com';
  const endPoint = '/ticker/price';

  const params = new URLSearchParams({
    symbol: query,
  });

  const url = `${baseUrl}${endPoint}?${params}`;

  const options = {
    headers: {
      'x-rapidapi-key': '9b3ff61931msh1b42d77d34e33dap1c29cajsn3d3169e0e2f4',
      'x-rapidapi-host': 'binance43.p.rapidapi.com',
    },
  };
  return fetch(url, options).then(res => res.json());
}

//!=========================================
function symbolTemplate(obj) {
  const icon = obj.symbol.toLowerCase().replace('usdt', '');
  obj.price = Number(obj.price).toFixed(2);
  return `
  <img
      class="coin-logo"
      src="https://assets.coincap.io/assets/icons/${icon}@2x.png"
    />
  <span class="coin-title">${obj.symbol}</span>
  <span class="coin-price">${obj.price}</span>`;
}

//!=========================================

refs.formEl.addEventListener('submit', e => {
  e.preventDefault();

  const formData = new FormData(e.target);
  const query = formData.get('query');

  getPrice(query).then(data => {
    const markup = symbolTemplate(data);
    refs.infoEl.innerHTML = markup;
  });
});

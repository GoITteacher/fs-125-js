import { fetchArticles } from './modules/newsAPI';
import { articlesTemplate } from './templates/render-functions';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

//!=========================================
const refs = {
  formElem: document.querySelector('.js-search-form'),
  articleListElem: document.querySelector('.js-article-list'),
  btnLoadMore: document.querySelector('.js-btn-load'),
  loadElem: document.querySelector('.js-loader'),
};
//!=========================================
const PER_PAGE = 8;

let query;
let page;
let totalPages;

//!=========================================
refs.formElem.addEventListener('submit', async e => {
  e.preventDefault();

  hideLoadBtn();
  showSpinner();

  const formData = new FormData(e.target);

  query = formData.get('query');
  page = 1;

  try {
    const res = await fetchArticles(query, page);
    const markup = articlesTemplate(res.articles);
    refs.articleListElem.innerHTML = markup;
    totalPages = Math.ceil(res.totalResults / PER_PAGE);

    if (totalPages === 0) {
      showMessage('Нічого не знайдено', `...`);
    } else {
      showMessage('Ось новини', `Всього ${totalPages} сторінок`);
    }
  } catch {
    iziToast.error('Smth went wrong');
  }

  checkBtnStatus();
  hideSpinner();
  e.target.reset();
});

refs.btnLoadMore.addEventListener('click', async e => {
  page += 1;
  showSpinner();
  hideLoadBtn();

  try {
    const res = await fetchArticles(query, page);
    const markup = articlesTemplate(res.articles);
    refs.articleListElem.insertAdjacentHTML('beforeend', markup);
    showMessage('Ура', 'Відповідь прийшла');
    scrollPage();
  } catch {
    iziToast.error('Smth went wrong');
  }

  checkBtnStatus();
  hideSpinner();
});

//!=========================================

function showLoadBtn() {
  refs.btnLoadMore.disabled = false;
}
function hideLoadBtn() {
  refs.btnLoadMore.disabled = true;
}
function showSpinner() {
  refs.loadElem.classList.remove('hidden');
}
function hideSpinner() {
  refs.loadElem.classList.add('hidden');
}
function checkBtnStatus() {
  if (page === totalPages) {
    showMessage('The end', 'Це була остання сторінка');
  }

  if (page >= totalPages) {
    hideLoadBtn();
  } else {
    showLoadBtn();
  }
}

function showMessage(title, message) {
  iziToast.info({ title: title, message: message });
}

function scrollPage() {
  const elem = refs.articleListElem.lastElementChild;
  const height = elem.getBoundingClientRect().height;

  window.scrollBy({
    top: height * 2,
    behavior: 'smooth',
  });
}

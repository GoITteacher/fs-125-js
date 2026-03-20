import iziToast from 'izitoast';
import { fetchArticles } from './modules/newsAPI';
import { articlesTemplate } from './templates/render-functions';

const refs = {
  formElem: document.querySelector('.js-search-form'),
  articleListElem: document.querySelector('.js-article-list'),
  targetElem: document.querySelector('.js-target'),
  loadElem: document.querySelector('.js-loader'),
};

//!=========================================

const PER_PAGE = 8;
let query;
let currentPage;
let totalPages;

//!=========================================

refs.formElem.addEventListener('submit', async e => {
  e.preventDefault();
  const formData = new FormData(e.target);
  query = formData.get('query').trim();
  currentPage = 1;

  if (query === '') {
    iziToast.error('Заповніть усі поля');
    return;
  }

  vasya.unobserve(refs.targetElem);

  const res = await fetchArticles(query, currentPage);
  const markup = articlesTemplate(res.articles);
  refs.articleListElem.innerHTML = markup;
  totalPages = Math.ceil(res.totalResults / PER_PAGE);

  checkObserverStatus();
});

async function loadMore() {
  currentPage += 1;
  vasya.unobserve(refs.targetElem);

  const res = await fetchArticles(query, currentPage);
  const markup = articlesTemplate(res.articles);
  refs.articleListElem.insertAdjacentHTML('beforeend', markup);

  checkObserverStatus();
}
//!=========================================

const vasya = new IntersectionObserver(entries => {
  const entry = entries[0];
  if (entry.isIntersecting) {
    console.log('Викликаю LoadMore');
    loadMore();
  }
});

function checkObserverStatus() {
  console.log('Перевірка чи треба вирубати Васю');
  if (currentPage >= totalPages) {
    vasya.unobserve(refs.targetElem);
    console.log('Вирубили Васю');
  } else {
    console.log('Підняли Васю');
    vasya.observe(refs.targetElem);
  }
}

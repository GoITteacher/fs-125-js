import {
  getBooks,
  createBook,
  updateBook,
  resetBook,
  deleteBook,
} from './modules/booksAPI';

const refs = {
  createFormElem: document.querySelector('.js-create-form'),
  resetFormElem: document.querySelector('.js-reset-form'),
  updateFormElem: document.querySelector('.js-update-form'),
  deleteFormElem: document.querySelector('.js-delete-form'),
  bookListElem: document.querySelector('.js-article-list'),
};

//!=========================================

refs.createFormElem.addEventListener('submit', onCreateFormSubmit);
refs.updateFormElem.addEventListener('submit', onUpdateFormSubmit);
refs.resetFormElem.addEventListener('submit', onResetFormSubmit);
refs.deleteFormElem.addEventListener('submit', onDeleteFormSubmit);

//!=========================================
document.addEventListener('DOMContentLoaded', async () => {
  try {
    const data = await getBooks();
    renderBooks(data.reverse());
  } catch (err) {
    console.log(err);
  }
});

//!=========================================

function templateBook({ id, title, desc, author, img, price, rating }) {
  return `
<li class="book-item card" data-id="${id}">
  <img
    class="book-img"
    src="${img}"
    alt=""
  />

  <h5 class="book-title">${title}</h5>
  <h6>Author: ${author}</h6>
  <p class="book-desc">${desc}</p>

  <div class="book-info">
    <span>Price: ${price}</span>
    <span>Rating: ${rating}</span>
  </div>
</li>`;
}

function templateBooks(books) {
  return books.map(templateBook).join('');
}

function renderBooks(books) {
  const markup = templateBooks(books);
  refs.bookListElem.innerHTML = markup;
}

//!=========================================

async function onCreateFormSubmit(e) {
  e.preventDefault();
  const formData = new FormData(e.target);

  const book = {
    title: formData.get('bookTitle'),
    author: formData.get('bookAuthor'),
    desc: formData.get('bookDesc'),
    img: formData.get('bookImg'),
    rating: formData.get('bookRating'),
    price: formData.get('bookPrice'),
  };

  try {
    const newBook = await createBook(book);
    const markup = templateBook(newBook);
    refs.bookListElem.insertAdjacentHTML('afterbegin', markup);
  } catch {
    //.....
  }

  e.target.reset();
}

async function onResetFormSubmit(e) {
  e.preventDefault();

  const formData = new FormData(e.target);
  const book = {};

  formData.forEach((value, key) => {
    key = key.slice(4).toLowerCase();
    book[key] = value;
  });

  try {
    const newBook = await resetBook(book.id, book);
    const oldBookCard = document.querySelector(`[data-id="${book.id}"]`);
    const markup = templateBook(newBook);
    oldBookCard.insertAdjacentHTML('afterend', markup);
    oldBookCard.remove();
  } catch {
    //.....
  }

  e.target.reset();
}

async function onUpdateFormSubmit(e) {
  e.preventDefault();

  const formData = new FormData(e.target);
  const book = {};

  formData.forEach((value, key) => {
    key = key.slice(4).toLowerCase();
    if (value) book[key] = value;
  });

  try {
    const newBook = await updateBook(book.id, book);
    const oldBookCard = document.querySelector(`[data-id="${book.id}"]`);
    const markup = templateBook(newBook);
    oldBookCard.insertAdjacentHTML('afterend', markup);
    oldBookCard.remove();
  } catch (err) {
    console.log(err);
    // ...
  }

  e.target.reset();
}

async function onDeleteFormSubmit(e) {
  e.preventDefault();
  const id = e.target.elements.bookId.value;
  try {
    await deleteBook(id);
    const oldBookCard = document.querySelector(`[data-id="${id}"]`);
    oldBookCard.remove();
  } catch {
    //....
  }
}

//!=========================================

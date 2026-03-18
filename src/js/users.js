import { createUser, getUsers } from './modules/usersAPI';
import 'toastify-js/src/toastify.css';
import Toastify from 'toastify-js';

//!=========================================
const refs = {
  userListElem: document.querySelector('.js-user-list'),
  createUserForm: document.querySelector('.js-create-form'),
  updateUserForm: document.querySelector('.js-update-form'),
  resetUserForm: document.querySelector('.js-reset-form'),
  loader: document.querySelector('.js-loader'),
};

//!=========================================

function templateUser({ id, name, email, phone, img }) {
  return `
  <li class="card user-item" data-id="${id}">
  <img
    src="${img}"
    alt="#"
    class="user-avatar"
  />
  <h3 class="user-title">${name}</h3>
  <p>Phone: ${email}</p>
  <p>Email: ${phone}</p>
  <button class="btn button">DELETE</button>
</li>`;
}

function templateUsers(users) {
  return users.map(templateUser).join('');
}

//!=========================================

document.addEventListener('DOMContentLoaded', handleDomLoaded);
refs.createUserForm.addEventListener('submit', handleCreateSubmit);
refs.updateUserForm.addEventListener('submit', handleUpdateSubmit);
refs.resetUserForm.addEventListener('submit', handleResetSubmit);

//!=========================================

async function handleDomLoaded(e) {
  showLoader();
  try {
    const users = await getUsers();
    const markup = templateUsers(users);
    refs.userListElem.innerHTML = markup;
  } catch {
    showError('ERROR');
  }
  hideLoader();
}

async function handleCreateSubmit(e) {
  e.preventDefault();

  const formData = new FormData(e.target);

  const user = {
    name: formData.get('userName'),
    phone: formData.get('userPhone'),
    email: formData.get('userEmail'),
  };

  showLoader();
  try {
    const newUser = await createUser(user);
    const markup = templateUser(newUser);
    refs.userListElem.insertAdjacentHTML('afterbegin', markup);
  } catch {
    showError('Error');
  }
  hideLoader();

  e.target.reset();
}
async function handleUpdateSubmit(e) {}
async function handleResetSubmit(e) {}

//!=========================================

function showError(message) {
  Toastify({
    text: message,
    className: 'info',
    style: {
      background: 'linear-gradient(to right, #b00000, #c9443d)',
    },
  }).showToast();
}

function showLoader() {
  refs.loader.classList.remove('hidden');
}

function hideLoader() {
  refs.loader.classList.add('hidden');
}

//!=========================================

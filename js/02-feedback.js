const STORAGE_KEY = 'feedback-msg';

const form = document.querySelector('.feedback-form');
const textarea = form.querySelector('textarea');

form.addEventListener('input', e => {
  const formData = new FormData(form);

  const obj = {
    name: formData.get('name'),
    message: formData.get('message'),
  };

  const zip = JSON.stringify(obj);
  localStorage.setItem(STORAGE_KEY, zip);
});

document.addEventListener('DOMContentLoaded', e => {
  const zip = localStorage.getItem(STORAGE_KEY);
  const userForm = JSON.parse(zip) || {};
  form.elements.name.value = userForm.name || '';
  form.elements.message.value = userForm.message || '';
});

form.addEventListener('submit', e => {
  e.preventDefault();
  const formData = new FormData(form);

  const obj = {
    name: formData.get('name'),
    message: formData.get('message'),
  };

  console.log(obj);

  localStorage.removeItem(STORAGE_KEY);
  form.reset();
});

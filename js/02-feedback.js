const STORAGE_KEY = 'feedback-msg';

const form = document.querySelector('.feedback-form');
const textarea = form.querySelector('textarea');

form.addEventListener('input', e => {
  const formData = new FormData(form);

  const obj = {
    name: formData.get('name'),
    message: formData.get('message'),
  };

  saveToLS(STORAGE_KEY, obj);
});

document.addEventListener('DOMContentLoaded', e => {
  const userForm = loadFromLS(STORAGE_KEY, {});
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

//!=========================================

// const x = 25;
// const zip = JSON.stringify(x);
// localStorage.setItem('userAge', zip);

// const x = 25;
// const zip = JSON.stringify(x);
// localStorage.setItem('userAge', zip);

// const x = 25;
// const zip = JSON.stringify(x);
// localStorage.setItem('userAge', zip);

// const x = 25;
// const zip = JSON.stringify(x);
// localStorage.setItem('userAge', zip);

//!=========================================

// function saveToLS(key, value) {
//   const json = JSON.stringify(value);
//   localStorage.setItem(key, json);
// }

// saveToLS('x1', 25);
// saveToLS('x2', 30);
// saveToLS('x3', 40);
// saveToLS('x4', 50);

//!=========================================

// try {
//   const json = localStorage.getItem('x1');
//   const data = JSON.parse(json);
//   console.log(data);
// } catch {}

// try {
//   const json = localStorage.getItem('x1');
//   const data = JSON.parse(json);
//   console.log(data);
// } catch {}

// try {
//   const json = localStorage.getItem('x1');
//   const data = JSON.parse(json);
//   console.log(data);
// } catch {}

// try {
//   const json = localStorage.getItem('x1');
//   const data = JSON.parse(json);
//   console.log(data);
// } catch {}

//!=========================================

function saveToLS(key, value) {
  const json = JSON.stringify(value);
  localStorage.setItem(key, json);
}

function loadFromLS(key, defaultValue) {
  const jsonData = localStorage.getItem(key);
  try {
    const data = JSON.parse(jsonData);
    return data ?? defaultValue;
  } catch {
    return jsonData ?? defaultValue;
  }
}

// false || 'Hello';
// false ?? 'Hello';

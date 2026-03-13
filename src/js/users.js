import {
  getStudentsList,
  createStudent,
  updateStudent,
  replaceStudent,
  deleteStudent,
} from './modules/usersAPI';

const refs = {
  userListElem: document.querySelector('.js-user-list'),
  createUserForm: document.querySelector('.js-create-form'),
  updateUserForm: document.querySelector('.js-update-form'),
  resetUserForm: document.querySelector('.js-reset-form'),
};

document.addEventListener('click', e => {
  console.log(e.target.nodeName);
});

//!=========================================
refs.userListElem.addEventListener('click', e => {
  if (e.target.nodeName !== 'BUTTON') return;
  const liCard = e.target.closest('li');
  const id = liCard.dataset.id;

  deleteStudent(id)
    .then(() => {
      liCard.remove();
    })
    .catch(err => {
      console.log('awdawd');
    });
});

//!=========================================
refs.updateUserForm.addEventListener('submit', e => {
  e.preventDefault();
  const formData = new FormData(e.target);

  const id = formData.get('userId');

  const body = {
    firstName: formData.get('firstName') || undefined,
    lastName: formData.get('lastName') || undefined,
    major: formData.get('major') || undefined,
    cohortYear: formData.get('cohortYear') || undefined,
  };

  updateStudent(id, body)
    .then(res => {
      const liCard = document.querySelector(`li[data-id="${id}"]`);
      const markup = studentTemplate(res.item);
      liCard.outerHTML = markup;
      e.target.reset();
    })
    .catch(() => {});
});

//!=========================================
refs.createUserForm.addEventListener('submit', e => {
  e.preventDefault();

  const formData = new FormData(e.target);

  const obj = {
    firstName: formData.get('firstName'),
    lastName: formData.get('lastName'),
    major: formData.get('major'),
    cohortYear: formData.get('cohortYear'),
  };

  createStudent(obj)
    .then(res => {
      const student = res.item;
      const markup = studentTemplate(student);
      refs.userListElem.insertAdjacentHTML('afterbegin', markup);
    })
    .catch(() => {});

  e.target.reset();
});

//!=========================================

document.addEventListener('DOMContentLoaded', () => {
  getStudentsList()
    .then(res => {
      const arr = res.items;
      const markup = studentsTemplate(arr);
      refs.userListElem.innerHTML = markup;
    })
    .catch(() => {});
});

//!=========================================
function studentTemplate(student) {
  return `<li class="card user-item" data-id="${student._id}">
        <img
          src="https://picsum.photos/200?random=${student._id}"
          alt="#"
          class="user-avatar"
        />
        <h3 class="user-title">${student.firstName} ${student.lastName}</h3>
        <p>major: ${student.major}</p>
        <p>cohortYear: ${student.cohortYear}</p>
        <p>${student._id}</p>
        <button class="btn button">DELETE</button>
      </li>`;
}

function studentsTemplate(arr) {
  return arr.map(studentTemplate).join('');
}

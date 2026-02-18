let refs = {
  firstTagsList: document.querySelector('.tags-box[data-group="group-1"]'),
  secondTagsList: document.querySelector('.tags-box[data-group="group-2"]'),
};

//!=========================================
refs.firstTagsList.addEventListener('click', e => {
  if (e.target === e.currentTarget) {
    return;
  }
  const liElem = e.target.closest('li');
  liElem.classList.toggle('active');
});

//!=========================================

// refs.secondTagsList.addEventListener('click', e => {
//   const liElem = e.target.closest('li');
//   if (!liElem) {
//     return;
//   }
//   const oldElem = e.currentTarget.querySelector('.active');
//   oldElem.classList.remove('active');
//   liElem.classList.add('active');
// });

//!=========================================

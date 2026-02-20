const ulElem = document.querySelector('.js-gallery');

const images = [
  'https://images.prom.ua/4224863764_w640_h320_milye-kotiki-flizelinovye.jpg',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3dlJN6Pct9s9xNTqNTvyNBK8IB50YypyDLw&s',
  'https://i.pinimg.com/236x/c8/cc/24/c8cc24bba37a25c009647b8875aae0e3.jpg',
  'https://fotkiflo.ru/wp-content/uploads/milye-kotiki-v-shapochkakh-5.webp',
  'https://irecommend.ru/sites/default/files/imagecache/copyright1/user-images/13405/emoNxJGJ3NydM0LQ1tkxSQ.jpg',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSs-5dxc3nun3broB2asNnnInPeSZIEwHXQQA&s',
];

//!=========================================

function itemTemplate(item) {
  return `<li>
  <a href="${item}">
        <img src="${item}" alt="" title="" width="200">
        </a>
  </li>
  `;
}

function itemsTemplate(arr) {
  return arr.map(itemTemplate).join('');
}

document.addEventListener('DOMContentLoaded', () => {
  const markup = itemsTemplate(images);
  ulElem.innerHTML = markup;
  //   let gallery = new SimpleLightbox('.js-gallery a', {
  //     navText: ['prev', 'next'],
  //     loop: false,
  //   });

  //   gallery.on('open.simplelightbox', () => {
  //     console.log('CLOSE MODAL');
  //   });
  //   gallery.on('close.simplelightbox', () => {
  //     console.log('CLOSE MODAL');
  //   });
});

//!=========================================

ulElem.addEventListener('click', e => {
  e.preventDefault();
  console.log(e.target.nodeName);

  if (e.target.nodeName !== 'IMG') {
    return;
  }

  showModal(e.target.src);
});

//!=========================================

function showModal(imageUrl) {
  console.log(imageUrl);

  const instance = basicLightbox.create(`
  		<img width="800" src="${imageUrl}"/>
  `);
  instance.show();
}

//!=========================================

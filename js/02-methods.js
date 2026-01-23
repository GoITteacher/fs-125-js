/**
 * Об'єкти
 *
 * - Методи об'єкта
 * - Доступ до властивостей об'єкта через this
 * - Зміна за посиланням
 */
//!=========================================

const cat = {
  name: 'Marsik',
  age: 2,
  color: 'black',
  breed: 'Noname',

  sayMeow() {
    console.log('Meow, meow');
  },
  eat(food) {
    console.log(`Ням ням ${food} смакує`);
  },
  sleep() {
    console.log('Zzzzz');
  },
};

//!=========================================
const playlist = {
  name: 'My amazing playlist',
  rating: 5,
  tracks: ['track-1', 'track-2', 'track-3'],

  changeName(newName) {
    playlist.name = newName;
  },
  addTrack(track) {
    playlist.tracks.push(track);
  },
  updateRating(newRating) {
    playlist.rating = newRating;
  },
  getTrackCount() {
    return playlist.tracks.length;
  },

  play() {},
  pause() {},
  removeTrack() {},
};

// console.log(playlist.getTrackCount());

// playlist.changeName("New playlist name");

// playlist.addTrack("new track 1");
// console.log(playlist.getTrackCount());

// playlist.addTrack("new track 2");
// console.log(playlist.getTrackCount());

// playlist.updateRating(4);
// console.log(playlist);

//!=========================================

const student = {
  firstname: 'Vasya',
  lastname: 'Petrenko',
  age: 20,

  changeInfo() {},
  updateFirstname() {},
  updateLastname() {},
  updateAge() {},
};

// const student = {
//   hp: 100,
//   damage: 51,
//   speed: 20,

//   kick() {},
//   hide() {},
//   run() {},
// };

//!=========================================

// const user = {
//   fistname: 'Vasya',
//   lastname: 'Petrenko',
//   age: 25,

//   showInfo() {
//     const info = `${this.fistname} ${this.lastname} (${this.age})`;
//     console.log(info);
//   },

//   sum(x, y) {
//     console.log('SUM:', x + y);
//     return x + y;
//   },
// };

// user.sum(10, 30);

// const user2 = {
//   fistname: 'Vasya',
//   lastname: 'Petrenko',
//   age: 25,

//   showFullName() {
//     console.log('Fullname:', this.fistname, this.lastname);
//   },

//   showAge() {
//     console.log('Age:', this.age);
//   },

//   showInfo() {
//     this.showFullName();
//     this.showAge();
//   },
// };

// user2.showInfo();

// const res = Math.round(4.5)

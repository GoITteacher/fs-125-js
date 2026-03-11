import './modules/binance';
import './modules/hero';
import './modules/quotes';
import './modules/ipfinder';
import './modules/pokemon';
import './modules/instagram';
import './modules/user';

//!=========================================
// function getSongs(userTitle) {
//   const baseUrl = 'https://q10gsl5s9d.execute-api.us-east-1.amazonaws.com';
//   const endPoint = '/public/songs';

//   const params = new URLSearchParams({
//     perPage: 10,
//     title: userTitle,
//   });

//   const url = `${baseUrl}${endPoint}?${params}`;
//   return fetch(url);
// }

//!=========================================
/* function getPostsByUser(userId) {
  const BASE_URL = 'https://jsonplaceholder.typicode.com';
  const END_POINT = '/posts';
  const PARAMS = `?userId=${userId}`;
  const url = BASE_URL + END_POINT + PARAMS;

  const options = {
    headers: {
      test_header: 'Volodka',
    },
  };

  return fetch(url, options).then(res => res.json());
} */

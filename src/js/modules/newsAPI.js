import axios from 'axios';

export async function fetchArticles(query, page) {
  const API_KEY = 'c8747511a2c34730a83caaff4f3693e7';
  const BASE_URL = 'https://newsapi.org/v2';
  const END_POINT = '/everything';
  const url = `${BASE_URL}${END_POINT}`;

  const params = {
    apiKey: API_KEY,
    q: query,
    pageSize: 8,
    page: page,
  };

  const res = await axios.get(url, { params });
  return res.data;
}

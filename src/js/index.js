import axios from 'axios';

const serverApi = axios.create({
  baseURL: 'https://q10gsl5s9d.execute-api.us-east-1.amazonaws.com',
  headers: { token: 'HELLO WORLD' },
  params: { perPage: 20 },
});

// serverApi.get('/todos');
// serverApi.get('/public/songs');
// serverApi.get('/public/students');

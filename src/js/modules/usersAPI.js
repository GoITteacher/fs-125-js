import axios from 'axios';

axios.defaults.baseURL = '';
axios.defaults.headers = {};
axios.defaults.params = {};

const serverApi = axios.create({
  baseURL: 'https://q10gsl5s9d.execute-api.us-east-1.amazonaws.com',
});

export const getStudentsList = async () => {
  return serverApi.get('/public/students').then(res => res.data);
};

export const createStudent = async body => {
  return serverApi.post('/public/students', body).then(res => res.data);
};

export const updateStudent = async (id, body) => {
  return serverApi.patch(`/public/students/${id}`, body).then(res => res.data);
};

export const replaceStudent = async (id, body) => {
  return serverApi.put(`/public/students/${id}`, body).then(res => res.data);
};

export const deleteStudent = async id => {
  return serverApi.delete(`/public/students/${id}`).then(res => res.data);
};

//!=========================================

async function searchImages(query) {
  const baseURL = 'https://pixabay.com';
  const endPoint = '/api/';
  const url = baseURL + endPoint;

  const params = {
    key: '29372998-77c4088f99339c8fc310ed4d5',
    q: query,
  };

  return axios.get(url, { params }).then(res => res.data);
}

searchImages('Tesla');

import axios from 'axios';

const api = axios.create({
  baseURL: 'http://192.168.15.8:8080',
  headers: {
    'Content-Type': 'application/json',
  },
});

const apiPython = axios.create({
  baseURL: 'http://localhost:8000',
  headers: {
    'Content-Type': 'application/json',
  },
});

// Interceptador para remover o Content-Type quando FormData é usado
api.interceptors.request.use(config => {
  if (config.data instanceof FormData) {
    // Quando enviando FormData, deixe o axios definir automaticamente 
    // o Content-Type como multipart/form-data com o boundary correto
    delete config.headers['Content-Type'];
  }
  return config;
});

export { api, apiPython };
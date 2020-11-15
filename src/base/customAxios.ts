import Axios, { AxiosInstance } from 'axios';
import store from '@/store';

export function axiosCreator(): AxiosInstance {
  return Axios.create({  
    baseURL: `https://dungdvapp.herokuapp.com/api/`,
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': !!localStorage.getItem('vuex.state.token') ? `Bearer ${store.getters['token']}` : ''
    }
  });
}

export function axiosCreatorWithMultipart(): AxiosInstance {
  return Axios.create({  
    baseURL: `http://localhost:9090/api/`,
    headers: {
      'Content-Type': 'multipart/form-data',
      'Authorization': !!localStorage.getItem('vuex.state.token') ? `Bearer ${store.getters['token']}` : ''
    }
  });
}

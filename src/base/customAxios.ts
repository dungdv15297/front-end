import Axios, { AxiosInstance } from 'axios';
import store from '@/store';

export function axiosCreator(): AxiosInstance {
  return Axios.create({  
    baseURL: `http://localhost:9090/api/`,
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': store.getters['token'] ? `Bearer ${store.getters['token']}` : ''
    }
  });
}

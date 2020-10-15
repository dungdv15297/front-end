import Axios, { AxiosInstance } from 'axios';

export function axiosCreator(): AxiosInstance {
  return Axios.create({  
    baseURL: `http://localhost:9090/api/`,
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': localStorage.token ? `Bearer ${localStorage.token}` : ''
    }
  });
}

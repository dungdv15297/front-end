import Axios, { AxiosResponse, AxiosRequestConfig } from 'axios';

const axios = Axios.create({
  baseURL: `http://localhost:9090/`,
  headers: {
    // Authorization: 'Bearer {token}',
  }
})

export default axios;
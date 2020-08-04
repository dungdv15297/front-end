import Axios, { AxiosResponse, AxiosRequestConfig } from 'axios';

const axios = Axios.create({
  baseURL: `https://5f183fa77c06c900160dcc51.mockapi.io/`,
  // headers: {
  //   Authorization: 'Bearer {token}'
  // }
})

export function onGet<T = any, R = AxiosResponse<T>>(url: string, config?: AxiosRequestConfig): Promise<R> {
    return axios.get<T, R>(url, config);
}
 
export function onPost<T = any, R = AxiosResponse<T>>(url: string, config?: AxiosRequestConfig): Promise<R> {
    return axios.post<T, R>(url, config);
}
 
export function onPut<T = any, R = AxiosResponse<T>>(url: string, config?: AxiosRequestConfig): Promise<R> {
    return axios.put<T, R>(url, config);
}

export function onDelete<T = any, R = AxiosResponse<T>>(url: string, config?: AxiosRequestConfig): Promise<R> {
  return axios.delete<T, R>(url, config);
}

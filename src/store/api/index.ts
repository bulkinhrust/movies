import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  params: {
    language: 'ru-RU',
    api_key: '7b108db8be702d4e025d3f1b8bd4f97c',
  },
});

export const api = {
  async get<T>(url: string, config?: axios.AxiosRequestConfig<any>): Promise<T> { // eslint-disable-line
    const { data } = await axiosInstance.get(url, config);

    return data;
  },

  async post<T, D>(url: string, body: D, config?: axios.AxiosRequestConfig<any>): Promise<T> { // eslint-disable-line
    const { data } = await axiosInstance.post<T>(url, body, config);

    return data;
  },

  async patch<T, D>(url: string, body: D, config?: axios.AxiosRequestConfig<any>): Promise<T> { // eslint-disable-line
    const { data } = await axiosInstance.patch<T>(url, body, config);

    return data;
  },

  async delete<T>(url: string, config?: axios.AxiosRequestConfig<any>): Promise<T> { // eslint-disable-line
    const { data } = await axiosInstance.delete<T>(url, config);

    return data;
  },
};

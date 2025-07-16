import axios from "axios"
import type {AxiosRequestConfig} from "axios"
import type { CustomAxiosResponse } from "../types/axios-response"
import handleAxiosError from "../utils/handle-axios-error"

const instance = axios.create({
     baseURL: "https://68766728814c0dfa653bf813.mockapi.io/api/v1",
     headers:{
          'Content-Type':"application/json"
     }
});

instance.interceptors.response.use(
  (response) => response,
  (error) => {
    // Ví dụ: bạn vẫn muốn log hoặc handle status 401
    console.error('API error:', error);
    return Promise.reject(error);
  }
);

const AxiosAPI = {
  get: async <T>(url: string, config?: AxiosRequestConfig): Promise<CustomAxiosResponse<T>> => {
    try {
      const response = await instance.get<T>(url, config);
      return response;
    } catch (error) {
      return handleAxiosError<T>(error);
    }
  },
  post: async <T>(url: string, data: T, config?: AxiosRequestConfig): Promise<CustomAxiosResponse<T>> => {
    try {
      const response = await instance.post<T>(url, data, config);
      return response;
    } catch (error) {
      return handleAxiosError<T>(error);
    }
  },
  put: async <T>(url: string, data: T, config?: AxiosRequestConfig): Promise<CustomAxiosResponse<T>> => {
    try {
      const response = await instance.put<T>(url, data, config);
      return response;
    } catch (error) {
      return handleAxiosError<T>(error);
    }
  },
  delete: async <T>(url: string, config?: AxiosRequestConfig): Promise<CustomAxiosResponse<T>> => {
    try {
      const response = await instance.delete<T>(url, config);
      return response;
    } catch (error) {
      return handleAxiosError<T>(error);
    }
  },
  patch: async <T>(url: string, data: T, config?: AxiosRequestConfig): Promise<CustomAxiosResponse<T>> => {
    try {
      const response = await instance.patch<T>(url, data, config);
      return response;
    } catch (error) {
      return handleAxiosError<T>(error);
    }
  },
};

export default AxiosAPI;
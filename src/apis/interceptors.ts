import { AxiosError, AxiosResponse, type InternalAxiosRequestConfig } from 'axios';

/**
 * 요청을 보내기 전에 토큰이 있을 경우 Authorization 헤더에 토큰을 추가하는 인터셉터
 *
 * @param {InternalAxiosRequestConfig} config - Axios의 요청 설정 객체
 * @returns {InternalAxiosRequestConfig} 토큰이 포함된 요청 설정 객체
 */
const requestInterceptor = (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
  if (typeof window === 'undefined') return config;

  const modefiedConfig = config;
  const token = localStorage.getItem('token') ?? '';

  if (token) {
    modefiedConfig.headers.Authorization = `Bearer ${token}`;
  }

  return modefiedConfig;
};

/**
 * 성공적인 응답을 처리하는 인터셉터
 *
 * @param {AxiosResponse} response - Axios 응답 객체
 * @returns {AxiosResponse} 응답 객체
 */
const successInterceptor = (response: AxiosResponse): AxiosResponse => {
  return response;
};

/**
 * 에러를 처리하는 인터셉터
 *
 * @param {AxiosError} error - Axios 에러 객체
 * @returns {Promise} 에러를 거부하는 프로미스
 */
const errorInterceptor = (error: AxiosError): Promise<AxiosError> => {
  console.error('Response Error:', error);
  return Promise.reject(error);
};

export { requestInterceptor, successInterceptor, errorInterceptor };

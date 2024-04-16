import { type InternalAxiosRequestConfig } from 'axios';

/**
 * 요청을 보내기 전에 토큰이 있을 경우 Authorization 헤더에 토큰을 추가하는 인터셉터
 *
 * @param {InternalAxiosRequestConfig} config - Axios의 요청 설정 객체
 * @returns {InternalAxiosRequestConfig} 토큰이 포함된 요청 설정 객체
 */
const requestInterceptor = (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
  if (typeof window === 'undefined') return config;

  const token = localStorage.getItem('accessToken') ?? '';
  if (token) config.headers.set('Authorization', `Bearer ${token}`);

  return config;
};

export default requestInterceptor;

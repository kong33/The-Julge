/* eslint-disable class-methods-use-this */
import { AxiosRequestConfig } from 'axios';

import { PostImagePayload } from '@/apis/image/image.type';
import { apiRequestorToken } from '@/apis/requestor';

import { removeQueryParams } from '../utils';

class ImageService {
  postImage(payload: PostImagePayload) {
    return apiRequestorToken.post('/images', payload);
  }

  putImage(file: File, presignedUrl: string) {
    const config: AxiosRequestConfig = {
      baseURL: '',
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    };
    const formData = new FormData();
    formData.append('file', file);
    return apiRequestorToken.put(presignedUrl, config);
  }

  getImage(presignedUrl: string) {
    const config: AxiosRequestConfig = {
      baseURL: ''
    };
    const cleanUrl = removeQueryParams(presignedUrl); // query params 제거
    return apiRequestorToken.put(cleanUrl, config);
  }
}

export default new ImageService();

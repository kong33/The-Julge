/* eslint-disable class-methods-use-this */
import { AxiosRequestConfig } from 'axios';

import { PostImagePayload } from '@/apis/image/image.type';
import { apiFileRequestor, apiRequestor, apiRequestorToken } from '@/apis/requestor';

import { removeQueryParams } from '../utils';

class ImageService {
  postImage(payload: PostImagePayload) {
    return apiRequestorToken.post('/images', payload);
  }

  putImage(file: File, presignedUrl: string) {
    const formData = new FormData();
    formData.append('file', file);
    return apiFileRequestor.put(presignedUrl, formData);
  }

  getImage(presignedUrl: string) {
    const config: AxiosRequestConfig = {
      baseURL: ''
    };
    const cleanUrl = removeQueryParams(presignedUrl); // query params 제거
    return apiRequestor.put(cleanUrl, config);
  }
}

export default new ImageService();

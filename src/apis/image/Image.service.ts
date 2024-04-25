/* eslint-disable class-methods-use-this */
import { PostImagePayload } from '@/apis/image/image.type';
import { apiFileRequestor, apiRequestorNoBaseUrl, apiRequestorToken } from '@/apis/requestor';

import { removeQueryParams } from '../utils';

class ImageService {
  postImage(payload: PostImagePayload) {
    return apiRequestorToken.post('/images', payload);
  }

  putImage(file: File, presignedUrl: string) {
    return apiFileRequestor.put(presignedUrl, file);
  }

  getImage(presignedUrl: string) {
    const cleanUrl = removeQueryParams(presignedUrl); // query params 제거
    return apiRequestorNoBaseUrl.put(cleanUrl);
  }
}

export default new ImageService();

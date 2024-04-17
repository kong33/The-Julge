/* eslint-disable class-methods-use-this */
import { apiRequestorToken } from '@/apis/requestor';

import { PostImage } from './image.type';

class ImageService {
  postImage(payload: PostImage) {
    return apiRequestorToken.post('/images', payload);
  }
}

export default new ImageService();

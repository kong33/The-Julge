/* eslint-disable class-methods-use-this */
import { PostImage } from '@/apis/image/image.type';
import { apiRequestorToken } from '@/apis/requestor';

class ImageService {
  postImage(payload: PostImage) {
    return apiRequestorToken.post('/images', payload);
  }
}

export default new ImageService();

/* eslint-disable class-methods-use-this */
import { PostImagePayload } from '@/apis/image/image.type';
import { apiRequestorToken } from '@/apis/requestor';

class ImageService {
  postImage(payload: PostImagePayload) {
    return apiRequestorToken.post('/images', payload);
  }
}

export default new ImageService();

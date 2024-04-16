/* eslint-disable class-methods-use-this */
import { apiRequestorToken } from '../requestor';

class ImageService {
  postImages(payload: { name: string }) {
    return apiRequestorToken.post('/images', payload);
  }
}

export default new ImageService();

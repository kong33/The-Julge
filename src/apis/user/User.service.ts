/* eslint-disable class-methods-use-this */
import { apiRequestor } from '@/apis/requestor';
import { PostUserPayload } from '@/apis/user/user.type';

class UserService {
  postUser(payload: PostUserPayload) {
    return apiRequestor.post(`/users`, payload);
  }

  getUser(userId: string) {
    return apiRequestor.get(`/users/${userId}`);
  }
}

export default new UserService();

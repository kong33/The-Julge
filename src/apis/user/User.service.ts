/* eslint-disable class-methods-use-this */
import { apiRequestor, apiRequestorToken } from '@/apis/requestor';
import { PostUserPayload, PutUserPayload } from '@/apis/user/user.type';

class UserService {
  postUser(payload: PostUserPayload) {
    return apiRequestor.post(`/users`, payload);
  }

  getUser(userId: string) {
    console.log('userId', userId);
    return apiRequestor.get(`/users/${userId}`);
  }

  putUser(userId: string, payload: PutUserPayload) {
    return apiRequestorToken.put(`/users/${userId}`, payload);
  }
}

export default new UserService();

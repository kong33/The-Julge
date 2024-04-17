/* eslint-disable class-methods-use-this */
import { PostAuthenticationPayload } from '@/apis/authentication/authentication.type';

import { apiRequestor } from '../requestor';

class AuthenticationService {
  postAuthentication(payload: PostAuthenticationPayload) {
    return apiRequestor.post(`/token`, payload);
  }
}

export default new AuthenticationService();

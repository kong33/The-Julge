import AuthenticationService from '@/apis/authentication/Authentication.service';
import { PostAuthenticationPayload } from '@/apis/authentication/authentication.type';

const queryKeys = {
  postAuthentication: (payload: PostAuthenticationPayload) => ['postAuthentication', payload] as const
};

const queryOptions = {
  postAuthentication: (payload: PostAuthenticationPayload) => ({
    mutationKey: queryKeys.postAuthentication(payload),
    mutationFn: (postData: PostAuthenticationPayload) => AuthenticationService.postAuthentication(postData)
  })
};

export default queryOptions;

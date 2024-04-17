import UserService from '@/apis/user/User.service';
import { PostUserPayload } from '@/apis/user/user.type';

const queryKeys = {
  postUser: (payload: PostUserPayload) => ['postUser', payload] as const
};

const queryOptions = {
  postUser: (payload: PostUserPayload) => ({
    mutationKey: queryKeys.postUser(payload),
    mutationFn: () => UserService.postUser(payload)
  })
};

export default queryOptions;

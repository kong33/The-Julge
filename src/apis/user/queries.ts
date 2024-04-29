import UserService from '@/apis/user/User.service';
import { PostUserPayload, PutUserPayload } from '@/apis/user/user.type';

const queryKeys = {
  postUser: (payload: PostUserPayload) => ['postUser', payload] as const,
  getUser: (userId: string) => ['getUser', userId] as const,
  putUser: (userId: string, payload: PutUserPayload) => ['putUser', { userId, payload }] as const
};

const queryOptions = {
  postUser: (payload: PostUserPayload) => ({
    mutationKey: queryKeys.postUser(payload),
    mutationFn: (postPayload: PostUserPayload) => UserService.postUser(postPayload)
  }),
  getUser: (userId: string) => ({
    queryKey: queryKeys.getUser(userId),
    queryFn: () => UserService.getUser(userId)
  }),
  putUser: (userId: string, payload: PutUserPayload) => ({
    mutationKey: queryKeys.putUser(userId, payload),
    mutationFn: (putUserId: string, putPayload: PutUserPayload) => UserService.putUser(putUserId, putPayload)
  })
};

export default queryOptions;

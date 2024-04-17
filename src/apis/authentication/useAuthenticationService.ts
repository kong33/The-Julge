import { useMutation } from '@tanstack/react-query';

import { PostAuthenticationPayload, PostAuthenticationRes } from '@/apis/authentication/authentication.type';
import queryOptions from '@/apis/authentication/queries';
import selectData from '@/apis/utils';

/**
 * 사용자 로그인을 처리합니다.
 * @param payload \{
  email: string;
  password: string;
}
 * @returns \{
  item: {
  token: string;
  user: User;
};
  links: Array\<Link>;
}
 */

// eslint-disable-next-line import/prefer-default-export
export function usePostAuthentication(payload: PostAuthenticationPayload) {
  const res = useMutation(queryOptions.postAuthentication(payload));
  return selectData<PostAuthenticationRes>(res);
}

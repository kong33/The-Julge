import { useMutation } from '@tanstack/react-query';

import queryOptions from '@/apis/user/queries';
import { PostUserPayload } from '@/apis/user/user.type';
import selectData from '@/apis/utils';

/**
 * 사용자 로그인을 처리합니다.
 * @param payload \{
  email: string;
  password: string;
  type: 'employer' | 'employee';
}
 * @returns \{
  item: Item;
  links: Array\<Link>;
}
 */

// eslint-disable-next-line import/prefer-default-export
export function usePostUser(payload: PostUserPayload) {
  const res = useMutation(queryOptions.postUser(payload));
  return selectData(res);
}

import { useMutation, useSuspenseQuery } from '@tanstack/react-query';

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

export function usePostUser(payload: PostUserPayload) {
  const res = useMutation(queryOptions.postUser(payload));
  return selectData(res);
}

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

export function useGetUser(userId: string) {
  const res = useSuspenseQuery(queryOptions.getUser(userId));
  return selectData(res);
}

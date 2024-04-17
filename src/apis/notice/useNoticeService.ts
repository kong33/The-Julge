import { useSuspenseQuery } from '@tanstack/react-query';

import queryOptions from '@/apis/notice/queries';

import { GetNoticesParams, Notices } from './notice.type';

/**
 * 공고 목록을 조회합니다.
 * @param params \{
  offset?: number;
  limit?: number;
  address?: string;
  keyword?: string;
  startsAtGte?: string;
  hourlyPayGte?: number;
  sort?: 'time' | 'pay' | 'hour' | 'shop';
}
 * @returns \{
  offset: number;
  limit: number;
  address: Array\<string>;
  count: number;
  hasNext: boolean;
  items: Array\<Item>;
  keyword?: string;
  links: Array\<Link>;
}
 */

// eslint-disable-next-line import/prefer-default-export
export function useGetNotices(params: GetNoticesParams) {
  const res = useSuspenseQuery(queryOptions.getNotices(params));
  const { data: resData, ...rest } = res;
  const data: Notices = resData?.data;
  return { data, ...rest };
}

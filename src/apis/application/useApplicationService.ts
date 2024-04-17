import { useSuspenseQuery } from '@tanstack/react-query';

import queryOptions from '@/apis/application/queries';
import { BaseQuery } from '@/apis/common.type';
import selectData from '@/apis/utils';

import { GetApplicationsRes } from './application.type';

/**
 * 특정 가게의 특정 공고에 대한 지원 목록을 조회합니다.
 * @param shopId required; string
 * @param noticeId required; string
 * @param params optional; \{
  offset?: number;
  limit?: number;
}
 * @returns \{
  offset: number;
  limit: number;
  count: number;
  hasNext: boolean;
  items: Array<Item>;
  links: Array<Link>;
}
 */

// eslint-disable-next-line import/prefer-default-export
export function useGetApplicationsByNoticeId(shopId: string, noticeId: string, params: BaseQuery) {
  const res = useSuspenseQuery(queryOptions.getApplicationsByNoticeId(shopId, noticeId, params));
  return selectData<GetApplicationsRes>(res);
}

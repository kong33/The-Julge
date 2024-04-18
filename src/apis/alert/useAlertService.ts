import { useSuspenseQuery } from '@tanstack/react-query';

import { GetAlertsRes } from '@/apis/alert/alert.type';
import queryOptions from '@/apis/alert/queries';
import { BaseQuery } from '@/apis/common.type';
import selectData from '@/apis/utils';

/**
 * 특정 사용자의 알림 목록을 조회합니다.
 * @param userId required; string
 * @param params \{
  offset?: number;
  limit?: number;
}
 * @returns \{
  offset: number;
  limit: number;
  count: number;
  hasNext: boolean;
  items: Array\<Item>;
  links: Array\<Link>;
}
 */

// eslint-disable-next-line import/prefer-default-export
export function useGetAlerts(userId: string, params: BaseQuery) {
  const res = useSuspenseQuery(queryOptions.getAlerts(userId, params));
  return selectData<GetAlertsRes>(res);
}

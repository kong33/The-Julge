import { useMutation, useSuspenseQuery } from '@tanstack/react-query';

import { GetAlertListRes, PutAlertRes } from '@/apis/alert/alert.type';
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

export function useGetAlertList(userId: string, params: BaseQuery) {
  const res = useSuspenseQuery(queryOptions.getAlertList(userId, params));
  return selectData<GetAlertListRes>(res);
}

/**
 * 특정 사용자의 알림을 읽음 처리합니다.
 * @param userId required; string
 * @param alertId required; string
 * @returns \{
  offset: number;
  limit: number;
  items: Array\<Item>;
  links: Array\<Link>;
}
 */

export function usePutAlert(userId: string, alertId: string) {
  const res = useMutation(queryOptions.putAlert(userId, alertId));
  return selectData<PutAlertRes>(res);
}

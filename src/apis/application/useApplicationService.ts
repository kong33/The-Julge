import { useMutation, useSuspenseQuery } from '@tanstack/react-query';

import {
  GetApplicationsByUserIdRes,
  GetApplicationsRes,
  PostApplicationRes,
  PutApplicationPayload,
  PutApplicationRes
} from '@/apis/application/application.type';
import queryOptions from '@/apis/application/queries';
import { BaseQuery } from '@/apis/common.type';
import selectData from '@/apis/utils';

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
  items: Array\<Item>;
  links: Array\<Link>;
}
 */

export function useGetApplicationsByNoticeId(shopId: string, noticeId: string, params: BaseQuery) {
  const res = useSuspenseQuery(queryOptions.getApplicationsByNoticeId(shopId, noticeId, params));
  return selectData<GetApplicationsRes>(res);
}

/**
 * 특정 가게의 특정 공고에 지원을 등록합니다.
 * @param shopId required; string
 * @param noticeId required; string
 * @returns \{
  item: ItemInfo;
  links: Array\<Link>;
}
 */

export function usePostApplication(shopId: string, noticeId: string) {
  const res = useMutation(queryOptions.postApplication(shopId, noticeId));
  return selectData<PostApplicationRes>(res);
}

/**
 * 특정 가게의 특정 공고에 대한 지원을 승인, 거절 또는 취소합니다.
 * @param shopId required; string
 * @param noticeId required; string
 * @param applicationId required; string
 * @param payload \{
  status: 'pending' | 'accepted' | 'rejected' | 'canceled';
}
 * @returns \{
  item: ItemInfo;
  links: Array\<Link>;
}
 */

export function usePutApplication(
  shopId: string,
  noticeId: string,
  applicationId: string,
  payload: PutApplicationPayload
) {
  const res = useMutation(queryOptions.putApplication(shopId, noticeId, applicationId, payload));
  return selectData<PutApplicationRes>(res);
}

/**
 * 특정 사용자가 제출한 지원 목록을 조회합니다.
 * @param userId required; string
 * @param params optional; \{
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

export function useGetApplicationsByUserId(userId: string, params: BaseQuery) {
  const res = useSuspenseQuery(queryOptions.getApplicationsByUserId(userId, params));
  return selectData<GetApplicationsByUserIdRes>(res);
}

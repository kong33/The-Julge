import { useMutation, useSuspenseQuery } from '@tanstack/react-query';

import { BaseQuery } from '@/apis/common.type';
import { GetNoticesParams, GetNoticesRes, BaseNoticesRes, PostNoticePayload, Item } from '@/apis/notice/notice.type';
import queryOptions from '@/apis/notice/queries';
import selectData from '@/apis/utils';

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
  return selectData<GetNoticesRes>(res);
}

/**
 * 특정 가게의 공고 목록을 조회합니다.
 * @param shopId required; string
 * @param params \{
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

export function useGetNoticesByShopId(shopId: string, params: BaseQuery) {
  const res = useSuspenseQuery(queryOptions.getNoticesByShopId(shopId, params));
  return selectData<BaseNoticesRes>(res);
}

/**
 * 가게 공고를 등록합니다.
 * @param shopId required; string
 * @param payload \{
  hourlyPay: number;
  startsAt: string;
  workhour: number;
  description: string;
}
 * @returns \{
  item: ItemInfo;
  links: Array<Link>;
}
 */

export function usePostNoticeByShopId(shopId: string, payload: PostNoticePayload) {
  const res = useMutation(queryOptions.postNoticeByShopId(shopId, payload));
  return selectData<Item>(res);
}

/**
 * 특정 가게의 특정 공고를 조회합니다.
 * @param shopId required; string
 * @param noticeId required; string
 * @returns \{
  item: ItemInfo;
  links: Array<Link>;
}
 */

export function useGetNoticeByNoticeId(shopId: string, noticeId: string) {
  const res = useSuspenseQuery(queryOptions.getNoticeByNoticeId(shopId, noticeId));
  return selectData<Item>(res);
}

/**
 * 특정 가게의 특정 공고를 수정합니다.
 * @param shopId required; string
 * @param noticeId required; string
 * @returns \{
  item: ItemInfo;
  links: Array<Link>;
}
 */

export function usePutNoticeByNoticeId(shopId: string, noticeId: string, payload: PostNoticePayload) {
  const res = useMutation(queryOptions.putNoticeByNoticeId(shopId, noticeId, payload));
  return selectData<Item>(res);
}

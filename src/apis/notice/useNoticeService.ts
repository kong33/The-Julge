import { useMutation, useSuspenseQuery } from '@tanstack/react-query';

import queryOptions from '@/apis/notice/queries';

import { GetNoticesParams, GetNotices, BaseNotices, BaseParams, PostNoticePayload, Item } from './notice.type';

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
  const data: GetNotices = resData?.data;
  return { data, ...rest };
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

export function useGetNoticesByShopId(shopId: string, params: BaseParams) {
  const res = useSuspenseQuery(queryOptions.getNoticesByShopId(shopId, params));
  const { data: resData, ...rest } = res;
  const data: BaseNotices = resData?.data;
  return { data, ...rest };
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
  const { data: resData, ...rest } = res;
  const data: Item = resData?.data;
  return { data, ...rest };
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
  const { data: resData, ...rest } = res;
  const data: Item = resData?.data;
  return { data, ...rest };
}

import { useMutation, useSuspenseQuery } from '@tanstack/react-query';

import { BaseQuery } from '@/apis/common.type';
import {
  GetNoticeListParams,
  GetNoticeListRes,
  PostNoticePayload,
  PutNoticePayload,
  GetNoticeListByShopIdRes,
  PostNoticeRes,
  GetNoticeRes,
  PutNoticeRes
} from '@/apis/notice/notice.type';
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

export function useGetNoticeList(params: GetNoticeListParams) {
  const res = useSuspenseQuery(queryOptions.getNoticeList(params));
  return selectData<GetNoticeListRes>(res);
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

export function useGetNoticeListByShopId(shopId: string, params: BaseQuery) {
  const res = useSuspenseQuery(queryOptions.getNoticeListByShopId(shopId, params));
  return selectData<GetNoticeListByShopIdRes>(res);
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

export function usePostNotice(shopId: string, payload: PostNoticePayload) {
  const res = useMutation(queryOptions.postNotice(shopId, payload));
  return selectData<PostNoticeRes>(res);
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

export function useGetNotice(shopId: string, noticeId: string) {
  const res = useSuspenseQuery(queryOptions.getNotice(shopId, noticeId));
  return selectData<GetNoticeRes>(res);
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

export function usePutNotice(shopId: string, noticeId: string, payload: PutNoticePayload) {
  const res = useMutation(queryOptions.putNotice(shopId, noticeId, payload));
  return selectData<PutNoticeRes>(res);
}

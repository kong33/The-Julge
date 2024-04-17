import { BaseQuery } from '@/apis/common.type';
import NoticeService from '@/apis/notice/Notice.service';
import { GetNoticesParams, PostNoticePayload } from '@/apis/notice/notice.type';

const queryKeys = {
  getNotices: (params: GetNoticesParams) => ['getNotices', params] as const,
  getNoticesByShopId: (shopId: string, params: BaseQuery) => ['getNoticesByShopId', { shopId, params }] as const,
  postNoticeByShopId: (shopId: string, payload: PostNoticePayload) =>
    ['postNoticeByShopId', { shopId, payload }] as const,
  getNoticeByNoticeId: (shopId: string, noticeId: string) => ['getNoticeByNoticeId', { shopId, noticeId }] as const,
  putNoticeByNoticeId: (shopId: string, noticeId: string, payload: PostNoticePayload) =>
    ['putNoticeByNoticeId', { shopId, noticeId, payload }] as const
};

const queryOptions = {
  getNotices: (params: GetNoticesParams) => ({
    queryKey: queryKeys.getNotices(params),
    queryFn: () => NoticeService.getNotices(params)
  }),
  getNoticesByShopId: (shopId: string, params: BaseQuery) => ({
    queryKey: queryKeys.getNoticesByShopId(shopId, params),
    queryFn: () => NoticeService.getNoticesByShopId(shopId, params)
  }),

  postNoticeByShopId: (shopId: string, payload: PostNoticePayload) => ({
    mutationKey: queryKeys.postNoticeByShopId(shopId, payload),
    mutationFn: (postData: PostNoticePayload) => NoticeService.postNoticeByShopId(shopId, postData)
  }),
  getNoticeByNoticeId: (shopId: string, noticeId: string) => ({
    queryKey: queryKeys.getNoticeByNoticeId(shopId, noticeId),
    queryFn: () => NoticeService.getNoticeByNoticeId(shopId, noticeId)
  }),
  putNoticeByNoticeId: (shopId: string, noticeId: string, payload: PostNoticePayload) => ({
    mutationKey: queryKeys.putNoticeByNoticeId(shopId, noticeId, payload),
    mutationFn: (putData: PostNoticePayload) => NoticeService.putNoticeByNoticeId(shopId, noticeId, putData)
  })
};

export default queryOptions;

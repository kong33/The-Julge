import { BaseQuery } from '@/apis/common.type';
import NoticeService from '@/apis/notice/Notice.service';
import { GetNoticeListParams, PostNoticePayload, PutNoticePayload } from '@/apis/notice/notice.type';

const queryKeys = {
  getNoticeList: (params: GetNoticeListParams) => ['getNoticeList', params] as const,
  getNoticeListByShopId: (shopId: string, params: BaseQuery) => ['getNoticeListByShopId', { shopId, params }] as const,
  postNotice: (shopId: string, payload: PostNoticePayload) => ['postNotice', { shopId, payload }] as const,
  getNotice: (shopId: string, noticeId: string) => ['getNotice', { shopId, noticeId }] as const,
  putNotice: (shopId: string, noticeId: string, payload: PutNoticePayload) =>
    ['putNotice', { shopId, noticeId, payload }] as const
};

const queryOptions = {
  getNoticeList: (params: GetNoticeListParams) => ({
    queryKey: queryKeys.getNoticeList(params),
    queryFn: () => NoticeService.getNoticeList(params)
  }),
  getNoticeListByShopId: (shopId: string, params: BaseQuery) => ({
    queryKey: queryKeys.getNoticeListByShopId(shopId, params),
    queryFn: () => NoticeService.getNoticeListByShopId(shopId, params)
  }),

  postNotice: (shopId: string, payload: PostNoticePayload) => ({
    mutationKey: queryKeys.postNotice(shopId, payload),
    mutationFn: (postData: PostNoticePayload) => NoticeService.postNotice(shopId, postData)
  }),
  getNotice: (shopId: string, noticeId: string) => ({
    queryKey: queryKeys.getNotice(shopId, noticeId),
    queryFn: () => NoticeService.getNotice(shopId, noticeId)
  }),
  putNotice: (shopId: string, noticeId: string, payload: PutNoticePayload) => ({
    mutationKey: queryKeys.putNotice(shopId, noticeId, payload),
    mutationFn: (putData: PutNoticePayload) => NoticeService.putNotice(shopId, noticeId, putData)
  })
};

export default queryOptions;

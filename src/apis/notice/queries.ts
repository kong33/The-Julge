import NoticeService from '@/apis/notice/Notice.service';

import { BaseParams, GetNoticesParams, PostNoticePayload } from './notice.type';

const queryKeys = {
  // postImage: (name: string) => ['postImages', name] as const
  getNotices: (params: GetNoticesParams) => ['getNotices', params] as const,
  getNoticesByShopId: (shopId: string, params: BaseParams) => ['getNoticesByShopId', { shopId, params }] as const,
  postNoticeByShopId: (shopId: string, payload: PostNoticePayload) =>
    ['postNoticeByShopId', { shopId, payload }] as const
};

const queryOptions = {
  // postImage: (name: string) => ({
  //   mutationKey: queryKeys.postImage(name),
  //   mutationFn: (postData: PostImage) => ImageService.postImage(postData)
  // })

  getNotices: (params: GetNoticesParams) => ({
    queryKey: queryKeys.getNotices(params),
    queryFn: () => NoticeService.getNotices(params)
  }),
  getNoticesByShopId: (shopId: string, params: BaseParams) => ({
    queryKey: queryKeys.getNoticesByShopId(shopId, params),
    queryFn: () => NoticeService.getNoticesByShopId(shopId, params)
  }),

  postNoticeByShopId: (shopId: string, payload: PostNoticePayload) => ({
    mutationKey: queryKeys.postNoticeByShopId(shopId, payload),
    mutationFn: (postData: PostNoticePayload) => NoticeService.postNoticeByShopId(shopId, postData)
  })
};

export default queryOptions;
